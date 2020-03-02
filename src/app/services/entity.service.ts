import { Observable } from 'rxjs';
import { Entity } from './../Data/entity';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  //private baseUrl="http://localhost:52841";
 private baseUrl="https://upstartserver.somee.com/"

  constructor(private  http:HttpClient) {

  }
  Get():Observable<Entity[]>
  {
    return this.http.get<Entity[]>(`${this.baseUrl}/api/entity/`);
  }
  GetById(id:string):Observable<Entity>
  {
    return this.http.get<Entity>(`${this.baseUrl}/api/entity/${id}`);
  }
  CreateOrEdit(entity:Entity)
  {
    return this.http.post<Entity>(`${this.baseUrl}/api/entity/`,entity);
  }
  delete(id:string)
  {
    return this.http.delete(`${this.baseUrl}/api/entity/${id}`)
  }
}
