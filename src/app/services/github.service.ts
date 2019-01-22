
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class GithubService {
  // apiUrl = environment.apiUrl;
  private username: string;
  private repo: string;


  constructor(private http: HttpClient) {
    console.log("ready");
    this.username = "Okalll";
    this.repo = '';
  }

  getUser(): any {
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=73e96903e758317c7cb25889c158cc10c542035d")
    .pipe(map(res =>res));
  }

  getRepos(): any {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=73e96903e758317c7cb25889c158cc10c542035d")
    .pipe(map(res => res));
  }
  updateUser(username:string){
    this.username = username;
  }

}
