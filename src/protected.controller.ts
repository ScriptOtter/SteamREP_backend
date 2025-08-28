// protected.controller.ts
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAccessGuard } from './guards/jwt_access.guard';

import { Request } from 'express';
import { TokenService } from './modules/auth/tokens/tokens.service';

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
