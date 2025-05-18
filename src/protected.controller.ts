// protected.controller.ts
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAccessGuard } from './guards/jwt_access.guard';
import { TokenService } from './auth/tokens/tokens.service';
import { Request } from 'express';

@Controller('protected')
export class ProtectedController {
  constructor(private readonly token: TokenService) {}

  @UseGuards(JwtAccessGuard)
  @Get()
  getProtectedResource(@Req() req: Request) {
    const id = this.token.getIdFromToken(req);
    return id;
  }
}
