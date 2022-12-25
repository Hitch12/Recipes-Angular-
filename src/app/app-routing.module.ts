import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { CategoriesComponent } from './categories/categories.component';
import { BeefCategoryComponent } from './beef-category/beef-category.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { DetailsComponent } from './details/details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { AreaDetailsComponent } from './area-details/area-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'area',component:AreaComponent},
  {path:'ingredients',component:IngredientsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'details/:idMeal',component:DetailsComponent},
  {path:'category-details/:category',component:CategoryDetailsComponent},
  {path:'area-details/:area',component:AreaDetailsComponent},
  {path:'beef',component:BeefCategoryComponent},


  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
