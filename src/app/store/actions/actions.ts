import { createAction, props } from "@ngrx/store";
export interface data{
    userName:string,
    avatar_url:string,
    follower_url:string,
    bio:string
}
export const changeReducerStateLoading=createAction('[Request]Loading',props<{status:boolean}>())
export const changeReducerStateError=createAction("[Request]Error",props<{error:boolean}>())
export const changeDataAction=createAction("[Info]Data",props<{data:data}>())