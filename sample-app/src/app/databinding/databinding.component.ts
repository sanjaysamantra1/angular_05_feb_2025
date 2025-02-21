import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  name:string='Siva Sankar';
  profile_url: string='https://documents.bcci.tv/resizedimageskirti/164_compress.png';
  flag: boolean=false;
  num1: number=10;
  num2:number=20;

  showtext: boolean = true;

  visibletext() {
    this.showtext = !this.showtext; 
  }

  text:string='';
  maxlength:number=100;
  
  remainingtextcount:number=this.maxlength;
  updatecount(){
    this.remainingtextcount=this.maxlength-this.text.length;
  }

  selectedvalue:string="";


  symbol:string="+";
  a1:number=0;
  a2:number=0;
  val:number=0;
  

  calculate(){

    // switch (this.symbol){
    //   case '+':
    //     this.val=this.a1+this.a2;
    //     break;
    //   case '-':
    //     this.val=this.a1-this.a2;
    //     break;
    //   case '*':
    //     this.val=this.a1*this.a2;
    //     break;
    //   case '/':
    //     this.val=this.a2 !== 0 ? this.a1 / this.a2 : NaN;
    //     break;
    //   default:
    //     this.val=0;
    // }

    if(this.symbol=="+"){
      this.val=this.a1+this.a2;
    }else if(this.symbol=='-'){
      this.val=this.a1-this.a2;
    }else if(this.symbol=='*'){
      this.val=this.a1*this.a2;
    }else if(this.symbol=='/'){
      this.val=this.a2 !== 0 ? this.a1 / this.a2 : NaN;
    }
  }

txt:string="text"
checkbox:boolean=false;
myFunction(){
 this.txt=this.checkbox?"password":"text";
}
counter:number=0;
increment(){this.counter++;}

decrement(){this.counter--;}
reset(){this.counter=0;}

 isDarkMode: boolean = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }
  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
	{ "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];

}
