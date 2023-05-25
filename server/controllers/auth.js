import bcrypt from "bcrypt"; //bcrypt => b+crypt => b = blowfish algo and crypt is name of hashinh function used by the unix password system
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// REGISTER USER
export const register = async (request, response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = request.body;
    // salt used for password encrption
    const salt = await bcrypt.salt(); // bcrypt uses a 128-bit salt and encrypts a 192-bit magic value. It takes advantage of the fact that the Blowfish algorithm (used in the core of bcrypt for password hashing) needs a fairly expensive key setup, thus considerably slowing down dictionary-based attacks.
    const passwordHash = await bcrypt.hash(password, salt); //The bcrypt hashing function allows us to build a password security platform that scales with computation power and always hashes every password with a salt.
  } catch (error) {}
};