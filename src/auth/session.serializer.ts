import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  deserializeUser(
    payload: any,
    done: (err: Error, payload: string) => void
  ): void {
    done(null, payload);
  }
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, { id: user._id });
  }
}
