import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    NumberComponent,
    FormComponent,
    TextareaComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
