import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => {
          return req?.cookies?.SteamREP_accessToken; // Извлечение токена из куки
        },
      ]),
      secretOrKey: process.env.JWT_ACCESS_SECRET!,
    });
    console.log(ExtractJwt.fromAuthHeaderAsBearerToken());
  }

  async validate(payload: any) {
    return true;
  }
}
