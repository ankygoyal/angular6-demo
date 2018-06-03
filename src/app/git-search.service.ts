import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private HttpClient: HttpClient) {
  }



  gitSearch = (query: string): Promise<GitSearch> => {
    // tslint:disable-next-line:prefer-const
    let promise = new Promise<GitSearch>((resolve, reject) => {
      this.HttpClient.get('https://api.github.com/search/repositories?q=' + query)
        .toPromise()
        .then(
          (response) => { resolve(response as GitSearch); },
          (error) => { reject(error); }
        );
    });
    return promise;
  }
}
