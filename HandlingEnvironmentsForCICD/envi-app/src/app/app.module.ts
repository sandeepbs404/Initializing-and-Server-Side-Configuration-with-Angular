import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigurationService } from './ConfigurationService';
import { HttpClientModule } from '@angular/common/http';

export function initConfig(configService: ConfigurationService): () => Promise<any> {
  return (): Promise<any> => {
    return configService.loadConfigurations().toPromise();
  };
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ConfigurationService,
    {
      provide: APP_INITIALIZER, 
      useFactory:initConfig,
      multi: true,
      deps:[ConfigurationService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
