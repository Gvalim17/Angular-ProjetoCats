import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCatsComponent } from './component/list-cats/list-cats.component';

const routes: Routes = [
  {path: 'list-cats', component:ListCatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
