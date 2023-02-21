import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginModalComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ]
  ,exports:[
    HeaderComponent,
    FooterComponent,
    LoginModalComponent
  ]
})
export class SharedModule { }
