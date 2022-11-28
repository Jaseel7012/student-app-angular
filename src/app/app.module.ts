import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentViewAllComponent } from './student-view-all/student-view-all.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
const myroute:Routes=[
  {
    path:'',
    component:StudentEntryComponent
  },
  {
    path:'view',
    component:StudentViewAllComponent
  },{
    path:'search',
    component:StudentSearchComponent
  },
  {
    path:'delete',
    component:StudentDeleteComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    StudentViewAllComponent,
    StudentSearchComponent,
    StudentDeleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
