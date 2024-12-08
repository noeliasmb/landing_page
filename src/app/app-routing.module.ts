import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // A single route that loads the main component containing all sections
  { path: '', component: AppComponent },
  // Fallback route if an unknown path is accessed
  { path: '**', redirectTo: '' }
];

const routerOptions: ExtraOptions = {
  initialNavigation: 'enabledBlocking',
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
