import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../API.service';
import { Todo } from '../../types/todo';
@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
})
export class TopPageComponent implements OnInit {
  public createForm: FormGroup;
  public todos: Todo[];
  constructor(private api: APIService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      summary: ['', Validators.required],
    });

    this.api.ListTodos().then((event) => {
      console.log(event);
      this.todos = event.items;
    });

    this.api.OnCreateTodoListener.subscribe((event: any) => {
      const todo = event.value.data.onCreateTodo;
      this.todos = [todo, ...this.todos];
    });
  }

  public onCreate(todo: Todo): void {
    this.api
      .CreateTodo(todo)
      .then((event) => {
        console.log('item created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating restaurant...', e);
      });
  }
}
