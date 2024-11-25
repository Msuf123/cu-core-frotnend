import { createReducer, on } from "@ngrx/store";
import { changeDataAction, changeReducerStateError, changeReducerStateLoading } from "../actions/actions";

export const loadingReducer=createReducer({loading:false},on(changeReducerStateLoading,(state,action)=>({...state,loading:action.status})))
export const errorReducer=createReducer({error:false},on(changeReducerStateError,(state,action)=>({...state,error:action.error})))
export const userData=createReducer({backendData:{}},on(changeDataAction,(state,action)=>({...state,backendData:action.data})))