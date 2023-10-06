import express from "express";
import { createUser, getUserByEmail } from "../db/users";
import { random, authentication } from "../helpers";

// user Login controller
export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.sendStatus(400);
    }

    try {
      const user = await getUserByEmail(email).select(
        "+authentication.salt +authentication.password"
      );
      if (!user) {
        console.log("user not found!");
        return res.sendStatus(403);
      }
      const expectedHash = authentication(user.authentication.salt, password);
      if (user.authentication.password != expectedHash) {
        console.log("Password not match!");
        return res.sendStatus(403);
      }

      const salt = random();
      user.authentication.sessionToken = authentication(
        salt,
        user._id.toString()
      );
      await user.save();

      res.cookie("MATOBYTE-AUTH", user.authentication.sessionToken, {
        domain: "localhost",
        path: "/",
      });
      return res.json(user).sendStatus(200).end();
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

// user Registration controller
export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      res.send(400);
    }
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      res.send(400);
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.json(user).sendStatus(200).end();
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};
