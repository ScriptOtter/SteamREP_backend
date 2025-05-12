import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAccessGuard extends AuthGuard('jwt_access') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
