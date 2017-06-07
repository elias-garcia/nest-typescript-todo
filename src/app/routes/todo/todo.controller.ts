import { ToDoUnprocessableException } from './todo.exceptions';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Request, Response } from '@nestjs/common';
import { ToDoService } from "./todo.service";

@Controller('todos')
export class ToDoController {

    constructor(private toDoService: ToDoService) { }

    @Get()
    getAllToDos(@Request() req, @Response() res) {
      const toDos = this.toDoService.getAllToDos();
      return res.status(HttpStatus.OK).json(toDos);
    }

    @Post()
    addToDo(@Response() res, @Request() req) {
      this.toDoService.addToDo(req.body);
      return res.status(HttpStatus.CREATED).end();
    }

    @Get('/:id')
    getToDo(@Response() res, @Param('id') id) {
      const toDo = this.toDoService.getToDo(id);
      return res.status(HttpStatus.OK).json(toDo);
    }

    @Put('/:id')
    updateToDo(@Response() res, @Param('id') id, @Request() req) {
      this.toDoService.updateToDo(id, req.body);
      return res.status(HttpStatus.NO_CONTENT).end();
    }

    @Delete('/:id')
    deleteToDo(@Response() res, @Param('id') id) {
      this.toDoService.deleteToDo(id);
      return res.status(HttpStatus.NO_CONTENT).end();
    }

}