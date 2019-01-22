import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GithubService } from '../services/github.service'

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: any[];
  repos: any[];
  username: string;

  constructor(private githubService: GithubService) {
    this.githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.githubService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  findUser() {
    this.githubService.updateUser(this.username);

    this.githubService.getUser().subscribe(user => {
      // console.log(user);
      this.user = user;
    });

    this.githubService.getRepos().subscribe(repos => {
      // console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
