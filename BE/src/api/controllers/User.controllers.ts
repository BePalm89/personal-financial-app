import { NextFunction, Request, RequestHandler, Response } from "express";
import User from "../models/User.model";
import { compareSync } from "bcrypt";
import { generateToken } from "../../utils/jtw";

export const register: RequestHandler = async (req, res, next) => {
  try {
    const duplicatedUser = await User.findOne({ email: req.body.email });

    if (duplicatedUser) {
      res.status(409).json({ message: "The user already exists" });
      return;
    }

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", newUser: user });
      return;
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        res.status(401).send({ message: "Invalid email or password" });
        return;
    }

    if (compareSync(password, user?.password ?? "")) {
      const token = user?._id ? generateToken(user._id) : null;
      if (token) {
         res.status(200).send({ token, user });
         return;
      } else {
         res.status(500).send({ message: "Token generation failed" });
         return;
      }
    }
     res.status(401).send({ message: "Invalid email or password" });
     return 
  } catch (error) {
    next(error);
  }
};
