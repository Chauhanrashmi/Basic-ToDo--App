import { Component} from '@angular/core';
import { trigger,animate,style,transition,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoArray=[];
  todo;
  //todoForm: new FormGroup()  

   /*add item*/
  addTodo(value){
    if(value!==""){
     this.todoArray.push(value)
    //console.log(this.todos) 
  }else{
    alert('Field required **')
  }
}

  /*delete item*/
  deleteItem(todo){
  	for(let i=0 ;i<= this.todoArray.length ;i++){
  		if(todo== this.todoArray[i]){
  			this.todoArray.splice(i,1)
  		}
  	}
  }

 /*Submit form*/
todoSubmit(value:any)
{
      if(value!==""){
    this.todoArray.push(value.todo)
      //this.todoForm.reset()
    }else{
      alert('Field required **')
         }  
   }
}
