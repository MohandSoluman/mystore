import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductModule } from './products/product.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { MessageComponent } from './message/message.component';
import { UserModule } from './user/user.module';




@NgModule({
  declarations: [AppComponent,
    WelcomeComponent,
     NotfoundComponent,
     MessageComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
