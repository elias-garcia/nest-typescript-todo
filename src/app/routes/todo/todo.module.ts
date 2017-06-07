import { ToDoController } from './todo.controller';
import { ToDoService } from './todo.service';
import { Module } from '@nestjs/common';

@Module({
    controllers: [ ToDoController ],
    components: [ ToDoService ]
})
export class ToDoModule {}