import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { WelcomeComponent } from './welcome/welcome.component';

const Routes = [

  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(Routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
