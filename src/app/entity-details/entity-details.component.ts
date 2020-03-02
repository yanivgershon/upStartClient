import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntityService } from '../services/entity.service';
import { Entity } from '../Data/entity';

@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.less']
})
export class EntityDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private  entityService:EntityService) { }

  entity:Entity;
  ngOnInit()
  {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
    {
      this.entityService.GetById(id).subscribe(data=>this.entity=data);
    }
  }
  getDate(tick)
  {
    return new Date(tick/10000);
  }

}
