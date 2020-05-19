import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EditBookComponent} from './book/edit-book/edit-book.component';
import {AddBookComponent} from './book/add-book/add-book.component';


const routes: Routes = [
  {
    path:'',
   component:HomeComponent
 },
 {
   path:'editbook',
  component:EditBookComponent
},
{
  path:'addbook',
 component:AddBookComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
