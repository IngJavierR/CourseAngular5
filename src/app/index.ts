import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {NguiMapModule} from '@ngui/map';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule} from '@angular/material';

import {MainComponent} from './main/main';
import {AboutComponent} from './about/about';
import {ContactComponent} from './contact/contact';
import { PersonItem } from "./main/person-item/person-item";
import { APP_PROVIDERS } from './app.providers';
import { ReactiveComponent } from "./reactive/reactive";
import { FinalComponent } from "./final/final";
import { OneComponent } from "./final/comp-one/comp-one";
import { TwoComponent } from "./final/comp-two/comp-two";
import { ThreeComponent } from "./final/comp-three/comp-three";

export const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule
]

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MATERIAL_COMPONENTS,
    FormsModule
  ],
  exports: [
    MATERIAL_COMPONENTS
  ],
  declarations: [
    RootComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    PersonItem,
    ReactiveComponent,
    FinalComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  providers: APP_PROVIDERS,
  bootstrap: [RootComponent]
})
export class AppModule {}
