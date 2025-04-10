import { Request, Response } from 'express';
import AuthService from '../services/auth.service';

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const user = await AuthService.register(username, email, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await AuthService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new AuthController();
