import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtRefreshGuard extends AuthGuard('jwt_refresh') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
