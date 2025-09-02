import { Controller, Patch, Query, Req, Res, UsePipes } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { Response } from 'express';
import { ValidationDtoPipe } from 'src/shared/utils/Pipes/ValidationDtoPipe';

@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Patch('email')
  @UsePipes(ValidationDtoPipe)
  public async verify(@Res() res: Response, @Query('token') token: string) {
    return this.verificationService.verify(res, token);
  }
}
