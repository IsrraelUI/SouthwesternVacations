import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PackagesGalleryComponent } from './components/packages-gallery/packages-gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PackageComponent } from './components/package/package.component';
import { ContactComponent } from './components/contact/contact.component';
import { DataService } from './services/data.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'package/:id',      component: PackageComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PackagesGalleryComponent,
    HeaderComponent,
    HomeComponent,
    PackageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
