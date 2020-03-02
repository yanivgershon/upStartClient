import { Entity } from './../Data/entity';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EntityService } from '../services/entity.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.less']
})
export class EntitiesComponent implements OnInit {

  dataSource
  displayedColumns: string[] = ['Id', 'Name', 'Description', 'Amount','Date','IsPrivate','Edit','Delete','Details'];
  entities:Entity[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private entityService:EntityService) {

  }

  ngOnInit()
  {
    this.getData();

  }
  getData()
  {
    this.entityService.Get().subscribe(
      data=>
    {
      this.entities=data;
      this.dataSource = new MatTableDataSource(this.entities);
      this.dataSource.sort = this.sort;
    });
  }
  update(id:string)
  {

  }
  delete(id:string)
  {
    this.entityService.delete(id).subscribe(
      response=>
      {
        this.getData();
      }
    )
  }
  getDate(tick)
  {
      return new Date(tick/10000);
  }

}
