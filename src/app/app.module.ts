import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiquotesComponent } from './miquotes/miquotes.component';
import { MiquotesDetailComponent } from './miquotes-detail/miquotes-detail.component';
import { MiquotesFormComponent } from './miquotes-form/miquotes-form.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MiquotesComponent,
    MiquotesDetailComponent,
    MiquotesFormComponent,
    StrikethroughDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
