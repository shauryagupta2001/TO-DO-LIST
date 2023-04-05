import { Component , OnInit}from '@angular/core';
import {MyService} from '../service/myService';
import {of,map,filter} from 'rxjs';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  constructor(private ms:MyService){}
  cart:number=0;
  price="10000";
   arr : number[] = [];
  list = of(1,3,4,5,6,8,12);
  todoList: string[] = [];
  newTodoText: string = '';
  
  ngOnInit(){
    this.ms.getAddToCartData().subscribe(data => {
      this.cart = parseInt(data);
    })
    this.list.pipe(map(x => x*5)).subscribe(data =>{
      this.arr.push(data);
    })
    // this.list.pipe(filter(x => x%2==0)).subscribe(data =>{
    //   console.log(data);
    // })

  }
  addTodoItem() {
    if (this.newTodoText.trim()) {
      this.todoList.push(this.newTodoText);
      this.newTodoText = '';
    }
  }

  removeTodoItem(index: number) {
    this.todoList.splice(index, 1);
  }

  
}
