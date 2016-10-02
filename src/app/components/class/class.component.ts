import { Component, OnInit, Input} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Class} from '../../../Class';
import {ActivatedRoute} from '@angular/router';
import {SearchComponent} from '../search/search.component';

@Component({
  selector: 'class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  //directives:[SearchComponent],
  providers:[SearchService]
})
export class ClassComponent{
  id:string;
  term:string;
  @Input() classes:any;

  constructor(private _searchService: SearchService,
              private _route: ActivatedRoute){
}

  ngOnInit(){
    return this._route.params
      .map(params=>params['course_id'])
      .subscribe((id)=>{
       this._searchService.getClass(id)
            .subscribe(classes=>{
              this.classes = classes;

           })
      })
  }
}
