import { Component, OnInit } from '@angular/core';
import { AdduserService } from './adduser.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [AdduserService]
})
export class AdduserComponent implements OnInit {
  user: any[] = [];
  constructor(private httpService : AdduserService) { }

  onSubmit(user: any){
  	console.log(user,2222);
  	this.httpService.sendData({firstName: user.firstName,lastName: user.lastName,email: user.email,username: user.username,password: user.password})
  	.subscribe(datas => console.log(datas));
  }
  ngOnInit() {
  }

}
