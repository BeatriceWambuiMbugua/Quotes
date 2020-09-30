import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiquotesComponent } from './miquotes/miquotes.component';
import { MiquotesDetailComponent } from './miquotes-detail/miquotes-detail.component';
import { MiquotesFormComponent } from './miquotes-form/miquotes-form.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { UpwardComponent } from './upward/upward.component';

@NgModule({
  declarations: [
    AppComponent,
    MiquotesComponent,
    MiquotesDetailComponent,
    MiquotesFormComponent,
    StrikethroughDirective,
    DateCountPipe,
    UpwardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
