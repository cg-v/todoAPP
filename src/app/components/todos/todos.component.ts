import { Component, OnInit } from '@angular/core';
import { TodoService} from '../../services/todo.service';
import { ToDo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos : ToDo[];
  constructor(private todoService : TodoService) { 

  }

  ngOnInit() {
     this.todoService.getTodos().subscribe(todos=>{
       this.todos =todos;
     } );
    }
    /* this.todos = [
      {
        id : 1,
        title : 'todo1',
        completed : false
      },
      {
        id : 2,
        title : 'todo2',
        completed : true
      },
      {
        id : 3,
        title : 'todo3',
        completed : false
      }
    ])*/
  
  deleteTodo(todo : ToDo){
  //console.log('delete me');
  //remove from UI
   this.todos = this.todos.filter(t => t.id !== todo.id);
   //remove from server
   this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo :ToDo)
  {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
