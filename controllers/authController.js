import { registerUser, loginUser } from "../services/authService.js";

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    const user = await registerUser(name, email, password);

    return res.status(201).json({
      message: "Compte créé avec succès"
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      error: error.message,
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const token = await loginUser(email, password);

    return res.status(200).json({
      message: "Connexion réussie",
      token,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      error: error.message,
    });
  }
}
