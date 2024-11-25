import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

// Import shared and core components
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeroComponent } from './core/features/hero/hero.component';
import { AboutComponent } from './core/features/about/about.component';
import { ContactComponent } from './core/features/contact/contact.component';
import { HighlightsComponent } from './core/features/highlights/highlights.component';
import { ServiceComponent } from './core/features/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ContactComponent,
    HighlightsComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule, // Ensure this is included
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
