import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import pt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    IonicModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
