import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, switchMap, map, exhaustMap, fromEvent, tap, delay } from 'rxjs';

@Component({
  selector: 'app-observable-demo4',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './observable-demo4.component.html',
  styleUrl: './observable-demo4.component.css'
})
export class ObservableDemo4Component {
  searchResult$: Observable<any> | undefined;
  searchForm: any;
  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });
  }
  fetchProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }
  ngOnInit() {
    this.searchResult$ = this.searchForm.get("searchField").valueChanges.pipe(
      switchMap((term) =>
        this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`).pipe(delay(5000))
      ),
      map((response: any) =>
        response.count > 0 ? response.results : []
      ));


    const clickObservable = fromEvent(document.getElementById('getProducts')!, 'click')
    
    clickObservable.pipe(exhaustMap(()=>{
      return this.fetchProducts();
    })).subscribe((products)=>{
      console.log('products',products)
    })
  }
}
