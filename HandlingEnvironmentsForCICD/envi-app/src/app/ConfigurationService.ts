import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

interface Configuration {
  resourceServerA: string;
  resourceServerB: string;
  stage: string;
}

@Injectable({providedIn: 'root'})
export class ConfigurationService {

  private readonly BACKEND_URL = 'https://localhost:44301/';
  private configuration$: Observable<Configuration>;

  constructor(private http: HttpClient) {
  }

  public loadConfigurations(): Observable<Configuration> {
    if (!this.configuration$) {

        var data: Observable<Array<Configuration>>;

      this.configuration$ = 
      //this.http.get<Configuration>(`${this.BACKEND_URL}/setup`)
      this.getConfigs()
      .pipe(
        shareReplay(1)
      );
    }
    // var c:HttpClient;
    // var sc:ConfigurationService= new ConfigurationService(c);
    // sc.loadConfigurations().subscribe((data)=>{
    //     data.resourceServerA;
    // })

    return this.configuration$;
  }

  getConfigs(): Observable<Configuration> {
    var data:Configuration = {
        resourceServerA : "abc",
        resourceServerB:'bb',
        stage:''
    }
    return of(data);
  }

  allConfigs():Observable<Configuration>{
      return this.configuration$;
  }

}

// export class AppConstants {
//     public static get baseURL(): string { return "http://localhost:4200/api"; }
// }