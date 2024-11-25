import { createAction, props } from "@ngrx/store";

export const changeReducerStateLoading=createAction('[Request]Loading',props<{status:boolean}>())
export const changeReducerStateError=createAction("[Request]Error",props<{error:boolean}>())