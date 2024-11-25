import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";

export function FirstIntersepto(req:HttpRequest<unknown>,next:HttpHandlerFn):Observable<HttpEvent<unknown>>{
    let router=inject(Router)
    let token=localStorage.getItem('token')
    if(req.url.includes("/token")){
      req=req.clone({
        url:"http://localhost:3000"+req.url
    })
    
  
    return next(req) 
    }
    if(!token){
      router.navigate(['login'])
      return of()
    }else{
    req=req.clone({
        url:"http://localhost:3000"+req.url
    })
    
  
    return next(req) 
  }
}
