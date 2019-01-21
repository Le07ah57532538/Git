import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username = 'Okalll';
    private client_id = '7ae988b22a5b7f560312';
    private client_secret='891230bd9468344e0ee5f5ed75e7ec8598b9bcfe';

    constructor(private _http:Http){
        console.log("GithubService started..");
    }

    getUser(){
        return this._http.get('https://api.github.com/users/' + this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUsername(username:string){
        this.username = username;
    }
}
