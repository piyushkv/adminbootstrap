import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor() { }
  	sidebarOpen(){
  		if(document.querySelector('.sidebar').classList.contains('open'))
  			document.querySelector('.sidebar').classList.remove('open');
  		else
  			document.querySelector('.sidebar').classList.add('open');
  	}

  ngOnInit() {
  }

}
