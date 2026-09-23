import { User } from "../src/models/User.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export async function registerUser(name, email, password) {
  const userAlreadyExists = await User.findOne({
    where: { email },
  });

  if (userAlreadyExists) {
    const error = new Error("Cette adresse email est déjà utilisée");
    error.status = 409;
    throw error;
  }

  const passwordHash = await argon2.hash(password);

  const user = await User.create({
    name,
    email,
    password: passwordHash,
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

export async function loginUser(email, password) {
  const user = await User.findOne({
    where: { email },
  });

  if (user === null) {
    const error = new Error("Vos identifiants sont erronés");
    error.status = 401;
    throw error;
  }

  const passwordCorrect = await argon2.verify(user.password, password);

  if (!passwordCorrect) {
    const error = new Error("Vos identifiants sont erronés");
    error.status = 401;
    throw error;
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET
  );

  return token;
}
