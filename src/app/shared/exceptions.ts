import { HttpException } from '@nestjs/core';
import { HttpStatus } from "@nestjs/common";

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
