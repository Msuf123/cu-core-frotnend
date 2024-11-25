import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, of } from 'rxjs';
import { changeDataAction, changeReducerStateError, data } from '../store/actions/actions';
import { Router } from '@angular/router';
import { stateData } from '../store/selectors/selector';
import { CommonModule } from '@angular/common';
function handler(arg:HttpErrorResponse){
  if(arg.status===0){
    of('Connection error')
  }
  if(arg.status===304){
    console.log('hii')
    console.log(arg)
   return of(JSON.stringify({userName:'aksjhat'}))
  }
  return of('Error')
}
interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;  // Since the type is 'User', it will be a string
  user_view_type: string;
  site_admin: boolean;
}

@Component({
  selector: 'app-info-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.css'
})
export class InfoPageComponent {
  http=inject(HttpClient)
  store=inject(Store)
  router=inject(Router)
  getUserData$=this.store.select(stateData)
  dataThere=false
  followersThere=false
  follower:GitHubUser[]=[]
  url=inject
  constructor(){
   
        this.http.get('/userDetails',{responseType:"text",withCredentials:true}).pipe(catchError(handler)).subscribe((res)=>{
          if(res==='Connection error'){
            console.log('dispathcnf')
            this.store.dispatch(changeReducerStateError({error:true}))
          }
          if(res==="Error"){
            this.router.navigate(['login'])
          }
          else{
           let  dataFromServer:data=JSON.parse(res)
            this.store.dispatch(changeDataAction({data:JSON.parse(res) as data}))
            this.http.get(dataFromServer.follower_url+'?getGitFollower').subscribe((gitRes)=>{
             let data=gitRes as GitHubUser[]
             this.follower=data
             this.followersThere=true
            })
            this.dataThere=true
          }
        })
  
  }
}
