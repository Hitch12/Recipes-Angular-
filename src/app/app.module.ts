import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AreaComponent } from './area/area.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { BeefCategoryComponent } from './beef-category/beef-category.component';
import { DetailsComponent } from './details/details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { AreaDetailsComponent } from './area-details/area-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    AreaComponent,
    IngredientsComponent,
    ContactUsComponent,
    SideNavComponent,
    NotfoundComponent,
    BeefCategoryComponent,
    DetailsComponent,
    CategoryDetailsComponent,
    SearchPipe,
    AreaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
