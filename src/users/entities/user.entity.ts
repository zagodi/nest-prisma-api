import { User } from '@prisma/client';

export class UserEntity implements User {
  name: string;
  id: number;
  email: string;
  admin: boolean;
  createdAt: Date;
}
