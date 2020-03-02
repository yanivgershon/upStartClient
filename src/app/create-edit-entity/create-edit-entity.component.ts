import { dashCaseToCamelCase } from '@angular/compiler/src/util';

import { Entity } from './../Data/entity';
import { EntityService } from './../services/entity.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-edit-entity',
  templateUrl: './create-edit-entity.component.html',
  styleUrls: ['./create-edit-entity.component.less']
})
export class CreateEditEntityComponent implements OnInit {

  title:string='create'
  @ViewChild('myInput',null) formName: ElementRef;
  @ViewChild('entityForm',null) entityForm: NgForm;

  entity:Entity=new Entity();
  constructor( private route: ActivatedRoute,
                private  entityService:EntityService,
                private router: Router
                ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
    {
      this.entityService.GetById(id).subscribe(data=>
        {
         // this.entityForm.setValue(data);
         setTimeout(() => {
          //this.formName.nativeElement.value="ddata."
          //this.entityForm.setValue(data)
          //this.entityForm.controls["name"].setValue("1");
          var obj= {
           name: data.Name,
           Description: data.Description,
           Amount: data.Amount,
           Date: new Date(data.Date/10000),
           IsPrivate: data.IsPrivate,

          }
          this.entityForm.control.patchValue(obj);
        });

          //this.entity=data;
          //this.Name=data.Name;
        })
        this.title="Edit"
    }

  }
  onSubmit(entityForm:NgForm)
  {
    let entity:Entity={...entityForm.value,Date: entityForm.value.Date.getTime() * 10000}
    const id = this.route.snapshot.paramMap.get('id');
    if(id) entity.Id=id;
   // entity.Date=((entityForm.value.Date.getTime() * 10000));
    this.entityService.CreateOrEdit(entity).subscribe(response=>
      {
       this.router.navigate([`/details/${entity.Id}`])
    })
  }


}
