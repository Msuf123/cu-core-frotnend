import { createSelector } from "@ngrx/store";
import { Store } from "../storeInterface";
let selectLoadingState=(slice:Store)=>slice.loading
let errorSelectorState=(slice:Store)=>slice.error
export const loadingState=createSelector(selectLoadingState,(state)=>state.loading)
export const errorState=createSelector(errorSelectorState,(state)=>state.error)