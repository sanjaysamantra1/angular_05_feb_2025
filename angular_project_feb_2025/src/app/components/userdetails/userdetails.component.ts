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
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {

  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const userId = params['id'];

      this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe(response => {
        this.user = response;
      });
    });
  }
}
