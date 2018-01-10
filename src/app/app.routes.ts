import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { CatCentralComponent } from './cat-central/cat-central.component';
import { CondoCrazeComponent } from './condo-craze/condo-craze.component';



export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: UserListComponent },
  { path: 'cat', component: CatCentralComponent},
  { path: 'condo', component: CondoCrazeComponent}
  // { path: 'condo', loadChildren: './condo-craze/condo-craze.module#CondoCrazeModule'}
];
