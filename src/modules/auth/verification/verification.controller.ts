import { Controller, Patch, Query, Req, Res } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { Response } from 'express';

@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Patch('email')
  public async verify(@Res() res: Response, @Query('token') token: string) {
    return this.verificationService.verify(res, token);
  }
}
