import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  alertMe(): void {
    setTimeout(function(): void {
      alert("You've selected the alert tab!");
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
