import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorServerComponent } from './error-server/error-server.component';
import { Store } from '@ngrx/store';
import { errorState } from './store/selectors/selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ErrorServerComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  store=inject(Store)
  errorOfServer$=this.store.select(errorState)
  title = 'frontend';
  constructor(){
    this.errorOfServer$.subscribe((a)=>{
      console.log('error state is ',a)
    })
  }
}
