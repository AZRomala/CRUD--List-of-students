import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentNewComponent } from './student-new/student-new.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentEditComponent,
    NotFoundComponent,
    StudentSearchComponent,
    StudentNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
