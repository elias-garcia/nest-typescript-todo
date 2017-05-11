import { HttpException, HttpStatus } from 'nest.js';

export class NotFoundException extends HttpException {
  constructor(msg: string | object) {
    super(msg, HttpStatus.NOT_FOUND);
  }
}

export class UnprocessableException extends HttpException {
  constructor(msg: string | object) {
    super(msg, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
