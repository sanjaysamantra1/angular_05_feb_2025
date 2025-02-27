import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { MysortPipe } from '../../custom-pipes/mysort.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,
    FormsModule,
    RemainingPipe,
    MysortPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
myname:string="nandini";
salary:number =5000;
datevalue: Date = new Date();
user: Object = {name: "nandini", age:25,address: "PA"};
cars:string[] =["honda","tesla","kia","mitsubishi","Audi"]

msg :string="";
msg2:string="";

myArray :any = [30,10,40,20,60];

}
