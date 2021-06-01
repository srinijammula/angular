import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { IcecreamComponent } from './icecream/icecream.component';
import { CupcakeComponent } from './cupcake/cupcake.component';
import { BerriesComponent } from './berries/berries.component';
import { PgnotfoundComponent } from './pgnotfound/pgnotfound.component';
import { TestComponent } from './test/test.component';
import { Api1Component } from './api1/api1.component';
import { UdComponent } from './ud/ud.component';
import{HttpClientModule} from '@angular/common/http';
import { ViewcupcakeComponent } from './viewcupcake/viewcupcake.component';
import { AddnewcupcakeComponent } from './addnewcupcake/addnewcupcake.component';
import { SquarePipe } from './square.pipe';
import {SearchPipe} from './search.pipe'
import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { StarterComponent } from './starter/starter.component';
import { SoupComponent } from './soup/soup.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SaladComponent } from './salad/salad.component';
import { GrillComponent } from './grill/grill.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { FishComponent } from './fish/fish.component';
import { PrawnsComponent } from './prawns/prawns.component';
import { CrabComponent } from './crab/crab.component';
import { DessertComponent } from './dessert/dessert.component';
import { CakeComponent } from './cake/cake.component';
import { IcecreamsComponent } from './icecreams/icecreams.component';
import { DrinksComponent } from './drinks/drinks.component';
import { MaincourseComponent } from './maincourse/maincourse.component';
import { VegcurryComponent } from './vegcurry/vegcurry.component';
import { NonvegcurryComponent } from './nonvegcurry/nonvegcurry.component';
import { RotiComponent } from './roti/roti.component';
import { BiryaniComponent } from './biryani/biryani.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProductComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ContactusComponent,
    ProductsComponent,
    IcecreamComponent,
    CupcakeComponent,
    BerriesComponent,
    PgnotfoundComponent,
    TestComponent,
    Api1Component,
    UdComponent,
    ViewcupcakeComponent,
    AddnewcupcakeComponent,
    SquarePipe,
    SearchPipe,
    MenuComponent,
    StarterComponent,
    SoupComponent,
    PizzaComponent,
    SaladComponent,
    GrillComponent,
    SeafoodComponent,
    FishComponent,
    PrawnsComponent,
    CrabComponent,
    DessertComponent,
    CakeComponent,
    IcecreamsComponent,
    DrinksComponent,
    MaincourseComponent,
    VegcurryComponent,
    NonvegcurryComponent,
    RotiComponent,
    BiryaniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
