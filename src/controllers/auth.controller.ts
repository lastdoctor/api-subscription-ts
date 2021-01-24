import { Request, Response } from 'express';
import { Controller, Post } from '../decorators';
import { AuthService } from '../services';

@Controller('/auth')
class AuthController {
  constructor(private authService: AuthService = new AuthService()) {
  }

  @Post('/sign-in')
  async signIn(req: Request, res: Response): Promise<void> {
    try {
      const { uid } = req.body;
      console.log(req.body);
      const token = await this.authService.createCustomToken(uid);
      console.log(token);
      res.status(200).json({ token });
    } catch (e) {
      res.status(404).json({ error: true, message: e.message });
    }
  }

  @Post('/sign-up')
  async signup(req: Request, res: Response) {
    try {
      const user = this.authService.createUser(req.body);
      res.status(200).json(user);
    } catch (e) {
      res.status(400).json({ error: true, message: e.message });
    }
  }
}