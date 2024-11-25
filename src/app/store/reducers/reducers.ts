import { createReducer, on } from "@ngrx/store";
import { changeReducerStateError, changeReducerStateLoading } from "../actions/actions";

export const loadingReducer=createReducer({loading:false},on(changeReducerStateLoading,(state,action)=>({...state,loading:action.status})))
export const errorReducer=createReducer({error:false},on(changeReducerStateError,(state,action)=>({...state,error:action.error})))
export const userData=createReducer({backendData:[]})