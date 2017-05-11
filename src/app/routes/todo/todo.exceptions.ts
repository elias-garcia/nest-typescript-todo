import { NotFoundException, UnprocessableException } from './../../shared/exceptions';

export class ToDoNotFoundException extends NotFoundException {
  constructor() {
      super('todo not found');
  }
}

export class ToDoUnprocessableException extends UnprocessableException {
    constructor() {
        super('params are not valid');
    }
}
