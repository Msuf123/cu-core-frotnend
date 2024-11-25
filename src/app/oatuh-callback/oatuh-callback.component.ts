import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { catchError, of } from 'rxjs';
function errorHandler(errArg:HttpErrorResponse){
 
 return of()
  
}
@Component({
  selector: 'app-oatuh-callback',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './oatuh-callback.component.html',
  styleUrl: './oatuh-callback.component.css'
})
export class OatuhCallbackComponent {
 router=inject(ActivatedRoute)
 changeRoute=inject(Router)
 http=inject(HttpClient)
 code=""
 state=""
 rejected=false
 constructor(){
  this.router.queryParams.subscribe((url:any)=>{
   if(typeof url==="object"){
    if(url.hasOwnProperty('code')&&url.hasOwnProperty('state')){
      this.code=url.code
      this.state=url.state
      this.http.get("/token?code="+this.code+'&state='+this.state,{responseType:"text"}).pipe(catchError(errorHandler)).subscribe((res)=>{
        console.log('Setting token ')
        localStorage.setItem('token',res)
        this.changeRoute.navigate(['info'])
      })
    }
    else{
      this.rejected=true
    }
   }
 
  })
 }
}
