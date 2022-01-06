import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { AddSkinComponent } from './add-skin/add-skin.component';
import { UpdateSkinComponent } from './update-skin/update-skin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SkinGuard } from './skin.guard';
import { AuthGard } from './auth.gard';

const routes: Routes = [
  { path: 'addskin', component: AddSkinComponent, canActivate: [SkinGuard] },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'inventory', component: InventoryComponent ,canActivate: [AuthGard]},
  { path: 'updateskin/:id', component: UpdateSkinComponent },
  { path: 'login', component: LoginComponent  },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
