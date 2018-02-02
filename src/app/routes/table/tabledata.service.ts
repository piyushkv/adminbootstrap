import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class TabledataService {
  constructor(private http : Http) { }
  getData()
  {
  	return this.http.get('https://adminnew-2de82.firebaseio.com/userlist.json')
  	.map((response: Response) => response.json());
  }
}