import { BadRequestException, Body, Controller, Patch } from '@nestjs/common';
import { PasswordRecoveryService } from './password-recovery.service';
import { PasswordRecoveryDto } from '../dto/password-recovery.dto';

@Controller('recovery')
export class PasswordRecoveryController {
  constructor(
    private readonly passwordRecoveryService: PasswordRecoveryService,
  ) {}

  @Patch('password')
  public async sendPasswordRecoveryToken(@Body() dto: { email: string }) {
    return this.passwordRecoveryService.sendPasswordRecoveryToken(dto.email);
  }

  @Patch('verify')
  public async verify(@Body() dto: PasswordRecoveryDto) {
    const { token, password, confirmPassword } = dto;

    if (password !== confirmPassword) {
      throw new BadRequestException("Password doesen't match!");
    }
    return this.passwordRecoveryService.verify(token, password);
  }
}
