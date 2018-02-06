import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { TabledataService } from './tabledata.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TabledataService]
})
export class TableComponent implements OnInit {
  constructor( private httpService : TabledataService){}
  items: any[] = [];
  ngOnInit(){
  	this.httpService.getData().subscribe(items => this.items = items );
  };

}
