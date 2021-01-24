import { Request, Response } from 'express';
import { Controller, Get, Post } from '../decorators';

@Controller('/auth')
class LoginController {
  @Get('/login')
  getLogin(req: Request, res: Response): void {
    try {
      res.status(200).json({ mgs: 'hello' })
    } catch (e) {

    }
  }

  @Post('/login')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
  }
}