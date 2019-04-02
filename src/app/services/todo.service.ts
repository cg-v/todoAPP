import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ToDo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
todosUrl :string ='https://jsonplaceholder.typicode.com/todos';
todosLimit='?_limit=5';  
constructor(private http:HttpClient) { }


//get todos
  getTodos():Observable<ToDo[]>{
    return this.http.get<ToDo[]>(`${this.todosUrl}${this.todosLimit}`);
    
  }

  //Delete Todo
  deleteTodo(todo :ToDo):Observable<ToDo>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<ToDo>(url, httpOptions);
  }
//Add Todo
addTodo(todo : ToDo):Observable<ToDo>{
  return this.http.post<ToDo>(this.todosUrl, todo, httpOptions);
}

  //toggle completed
  toggleCompleted(todo: ToDo):Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`;
    //console.log(todo.id);
    return this.http.put(url,todo,httpOptions);
  }
}
