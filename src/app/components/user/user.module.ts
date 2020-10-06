import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { FirebaseUIModule } from 'firebaseui-angular';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { NgModule } from '@angular/core';
import { NgxFileDropModule } from 'ngx-file-drop';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { RouteComponent } from './view/route.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ViewComponent,
    EditComponent,
    ImageComponent,
    RouteComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    FirebaseUIModule.forFeature({}),
  ],
})
export class UserModule {}
