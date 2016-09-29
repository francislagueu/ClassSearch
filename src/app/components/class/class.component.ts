import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Class} from '../../../Class';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  providers:[SearchService]
})
export class ClassComponent{
  id:string;
  term:string;
  classes:any;

  constructor(private _searchService: SearchService,
              private _route: ActivatedRoute){
}

  ngOnInit(){
    this._route.params
      .map(params=>params['course_id'])
      .subscribe((id)=>{
        this._searchService.getClass(id)
            .subscribe(classes=>{
              this.classes = classes;
              console.log(this.classes);
            })
      })
  }
}
