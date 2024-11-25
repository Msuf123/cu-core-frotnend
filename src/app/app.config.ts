import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { errorReducer, loadingReducer, userData } from './store/reducers/reducers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { FirstIntersepto } from './Interseptor/FirstInterSeptor';
export const url_backend="http://localhost:3000"
export const backend_url_token=new InjectionToken<string>('My backend url')
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([FirstIntersepto]))
    ,{provide:backend_url_token,useValue:url_backend}, provideRouter(routes), provideStore({loading:loadingReducer,error:errorReducer,data:userData})]
};   
