import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  contact:FormGroup = new FormGroup({


    email: new FormControl(),
    password: new FormControl(),
    age: new FormControl(),
    country: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl(),


  }
  );

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.contact);
  }
  
}
