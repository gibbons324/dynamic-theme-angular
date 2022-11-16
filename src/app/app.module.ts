import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './material.module';
import { ViewDynamicThemeComponent } from './pages/view-dynamic-theme/view-dynamic-theme.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  declarations: [AppComponent, ViewDynamicThemeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
