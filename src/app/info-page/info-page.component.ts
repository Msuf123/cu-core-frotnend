import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-info-page',
  standalone: true,
  imports: [],
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.css'
})
export class InfoPageComponent {
  http=inject(HttpClient)
  url=inject
  constructor(){
    this.http.get('/userDetails',{responseType:"text",withCredentials:true}).subscribe((res)=>{
      console.log(res)
    })
  }
}
