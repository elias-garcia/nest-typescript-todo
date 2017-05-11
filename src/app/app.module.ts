import { ToDoModule } from './routes/todo/todo.module';
import { Module } from 'nest.js';

@Module({
    modules: [ ToDoModule ]
})
export class ApplicationModule {}