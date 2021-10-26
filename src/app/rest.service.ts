import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from './skills';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

    url : string = "http://localhost:3000/Skills/"

    getSkills() {
      return this.http.get<Skills[]>(this.url);
    }
  
}