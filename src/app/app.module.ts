import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './inputs/text/text.component';
import { NumberComponent } from './inputs/number/number.component';
import { FormComponent } from './pages/form/form.component';
import { TextareaComponent } from './inputs/textarea/textarea.component';
import { StorageComponent } from './inputs/storage/storage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { QrComponent } from './pages/qr/qr.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    NumberComponent,
    FormComponent,
    TextareaComponent,
    StorageComponent,
    QrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
