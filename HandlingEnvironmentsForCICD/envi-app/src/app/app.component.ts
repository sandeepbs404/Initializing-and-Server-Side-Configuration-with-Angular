import { Component } from '@angular/core';
import { ConfigurationService } from './ConfigurationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'envi-app';
  private configurationService:ConfigurationService;
  constructor(configurationService:ConfigurationService){
    this.configurationService = configurationService;
    this.configurationService.allConfigs().subscribe((data)=>this.title = data.resourceServerB);
  }

}
