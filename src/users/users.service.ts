import { Inject, Injectable } from '@nestjs/common';
import { Kysely } from 'kysely';
import { DB } from 'src/database/database.type';

@Injectable()
export class UsersService {
  constructor(
    @Inject('DATABASE')
    private readonly db: Kysely<DB>,
  ) {}

  async findAll() {
    return this.db.selectFrom('users').selectAll().execute();
  }
}
