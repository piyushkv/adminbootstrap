import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdduserService {
  constructor(private http : Http) { }
  sendData(user: any)
  {
  	console.log(user,3333);
  	const body = JSON.stringify(user);
  	const headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post('https://adminnew-2de82.firebaseio.com/users.json',body, {headers: headers})
  	.map((response: Response) => response.json());
  }

}
