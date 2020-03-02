import { EntityDetailsComponent } from './entity-details/entity-details.component';
import { EntitiesComponent } from './entities/entities.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditEntityComponent } from './create-edit-entity/create-edit-entity.component';


const routes: Routes = [
  { path: '', component: EntitiesComponent },
 // {path: '**', component: EntitiesComponent},
  { path: 'edit/:id',      component: CreateEditEntityComponent },
  { path: 'create',      component: CreateEditEntityComponent },
  { path: 'details/:id',      component: EntityDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
