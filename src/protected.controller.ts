// protected.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAccessGuard } from './guards/jwt_access.guard';

@Controller('protected')
export class ProtectedController {
  @UseGuards(JwtAccessGuard)
  @Get()
  getProtectedResource() {
    return { message: 'This is a protected resource' };
  }
}
