import { createSelector } from "@ngrx/store";
import { Store } from "../storeInterface";
let selectLoadingState=(slice:Store)=>slice.loading
let errorSelectorState=(slice:Store)=>slice.error
let dataSelectorState=(slice:Store)=>slice.data
export const loadingState=createSelector(selectLoadingState,(state)=>state.loading)
export const errorState=createSelector(errorSelectorState,(state)=>state.error)
export const stateData=createSelector(dataSelectorState,(state)=>state.backendData)