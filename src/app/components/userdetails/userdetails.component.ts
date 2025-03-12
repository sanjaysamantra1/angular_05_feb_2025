import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  imports: [],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
userId:any;
user:any;

  constructor( private activatedRoute: ActivatedRoute,private http: HttpClient){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.userId=params['id'];
      this.http.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`).subscribe(response=>{
        this.user=response;
      })
      
    });
  }
}
