import prisma from "../../config/database.js";
import hashPassword from "../utils/hashPassword.js";

const register = async (req, res) => {
  try {
    // Register logic
    const { name, email, password } = req.body;
    // Hash password
    const payload = {
      name,
      email,
      password,
    };
    payload.password = await hashPassword(password);
    // Save to database
    const user = prisma.user.create({
      data: payload,
    });
    res.json({ message: "user created successfully", data: payload });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { register };
