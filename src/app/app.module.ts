import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCatsComponent } from './component/list-cats/list-cats.component';
import { HttpClientModule } from '@angular/common/http';
import { CatService } from './cat.service';

@NgModule({
  declarations: [
    AppComponent,
    ListCatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
