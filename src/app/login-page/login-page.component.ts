import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {animals, colors, uniqueNamesGenerator} from "unique-names-generator"
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  http=inject(HttpClient)
  url=""
  constructor(){
    const name=uniqueNamesGenerator({dictionaries:[colors,animals]})
  
    let seachPrams=new URLSearchParams({client_id:'Ov23ctlxK38f77XvveHD',state:name})
    this.url='https://github.com/login/oauth/authorize?'+seachPrams.toString()+ '&redirect_uri=' + 'http://localhost:4200/oauth'
  }
  login(){
    window.location.href=this.url
  }
 
}
