import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myname: string = 'Deepthi'
  img_url: string ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnRbD3qO1x1mjGMkcmL8DT4cPx-aWJPKBZw&s'
  flag: boolean= false

  searchtext:string = '';
  searchTextchange(){
    console.log(this.searchtext)
  }

  f1(){
    alert('I am f1...')

  }

}
