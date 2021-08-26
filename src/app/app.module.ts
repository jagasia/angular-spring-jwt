import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

export function tokenGetter() {
  return "SOME_TOKEN";
}

export function getAuthScheme(request:any) {
  return "Bearer ";
}

export function jwtOptionsFactory() {
  return {
    tokenGetter,
    authScheme: getAuthScheme,
  };
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: () => {
    //       return 'Bearer '+localStorage.getItem('token');
    //     }
    //     // whitelistedDomains: ['localhost'],
    //     // blacklistedRoutes: ['localhost/auth/login']
    //   }
    // })

    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
