import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { IcecreamComponent } from './icecream/icecream.component';
import {CupcakeComponent} from './cupcake/cupcake.component';
import { BerriesComponent } from './berries/berries.component';
import{PgnotfoundComponent} from './pgnotfound/pgnotfound.component';
import{TestComponent} from './test/test.component';
import{UdComponent} from './ud/ud.component';
import{ViewcupcakeComponent} from './viewcupcake/viewcupcake.component';
import{AddnewcupcakeComponent} from './addnewcupcake/addnewcupcake.component';
import{StarterComponent} from './starter/starter.component';
import { AdminGuard } from './admin.guard';
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

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'contactus',component:ContactusComponent},
{path:'products',component:ProductsComponent,children:[{path:'icecream',component:IcecreamComponent},
{path:'cupcake',component:CupcakeComponent,children:[{path:'viewcupcake',component:ViewcupcakeComponent},{path:'addnewcupcake',component:AddnewcupcakeComponent},{path:'',redirectTo:'/products/cupcake/viewcupcake',pathMatch:'full'}]},
{path:'berries',component:BerriesComponent},
{path:'',redirectTo:'/products/icecream',pathMatch:'full'}
]},
{path:'starter',component:StarterComponent,children:[{path:'soup',component:SoupComponent},
{path:'pizza',component:PizzaComponent},
{path:'salad',component:SaladComponent},
{path:'grill',component:GrillComponent},
{path:'',redirectTo:'/starter/soup',pathMatch:'full'}
]
},
{path:'seafood',component:SeafoodComponent,children:[{path:'fish',component:FishComponent},
{path:'prawns',component:PrawnsComponent},
{path:'crab',component:CrabComponent},
{path:'',redirectTo:'/seafood/fish',pathMatch:'full'}
]
},
{path:'dessert',component:DessertComponent,children:[{path:'cake',component:CakeComponent},
{path:'icecreams',component:IcecreamsComponent},
{path:'drinks',component:DrinksComponent},
{path:'',redirectTo:'/dessert/cake',pathMatch:'full'}
]
},
{path:'maincourse',component:MaincourseComponent,children:[{path:'vegcurry',component:VegcurryComponent},
{path:'nonvegcurry',component:NonvegcurryComponent},
{path:'roti',component:RotiComponent},
{path:'biryani',component:BiryaniComponent},
{path:'',redirectTo:'/maincourse/vegcurry',pathMatch:'full'}
]
},
{path:'test',component:TestComponent},
{path:'test/:id',component:UdComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path: '404', component: PgnotfoundComponent},
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[AdminGuard] },
{path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

