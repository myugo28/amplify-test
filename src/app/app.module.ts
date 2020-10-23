import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { TopPageComponent } from './top-page/top-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, TopPageComponent, NotFoundComponent],
  imports: [BrowserModule, AppRouting, AmplifyUIAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
