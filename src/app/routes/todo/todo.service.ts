import { ToDoUnprocessableException, ToDoNotFoundException } from './todo.exceptions';
import { isToDo, IToDo } from './todo.model';
import { Component } from 'nest.js';

@Component()
export class ToDoService {

  private todos: IToDo[] = [];
  private idCounter: number = 0;

  public getAllToDos(): IToDo[] {
    return this.todos;
  }

  public addToDo(toDo: IToDo): void {
    if (!isToDo(toDo)) {
      throw new ToDoUnprocessableException();
    }
    toDo.id = this.idCounter;
    this.todos.push(<IToDo> toDo);
    this.idCounter++;
  }

  public getToDo(id: number): IToDo {
    if (!this.checkValidId) {
      throw new ToDoNotFoundException();
    }
    return this.todos[id];
  }

  public updateToDo(id: number, toDo: IToDo): void {
    if (!isToDo(toDo)) {
      throw new ToDoUnprocessableException();
    }
    if (!this.checkValidId) {
      throw new ToDoNotFoundException();
    }
    this.todos[id].description = toDo.description;
    this.todos[id].completed = toDo.completed;
  }

  public deleteToDo(id: number): void {
    if (!this.checkValidId) {
      throw new ToDoNotFoundException();
    }
    this.todos.splice(id, 1);
  }

  private checkValidId(id: number) {
    return (id < 0 || id > this.todos.length);
  }

}
