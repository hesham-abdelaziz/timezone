import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModuleService } from './app-routing-module.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModuleService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
