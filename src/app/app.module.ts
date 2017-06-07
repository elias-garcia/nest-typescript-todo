import { ToDoModule } from './routes/todo/todo.module';
import { Module } from '@nestjs/common';

@Module({
    modules: [ ToDoModule ]
})
export class ApplicationModule {}