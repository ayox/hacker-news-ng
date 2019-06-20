import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { StoriesComponent } from "./stories/stories.component";
import { FooterComponent } from "./footer/footer.component";
import { ItemComponent } from "./item/item.component";
import { HNAPIService } from "./hn-api.service";
import { HttpClientModule } from '@angular/common/http';
import { DomainPipe } from './domain.pipe';
import { MomentModule } from 'ngx-moment';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe,
    LoadingComponent
  ],
  imports: [BrowserModule,MomentModule, HttpClientModule, AppRoutingModule],
  providers: [HNAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
