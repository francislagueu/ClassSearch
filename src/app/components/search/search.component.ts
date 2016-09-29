import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Class} from '../../../CLass';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[SearchService]
})
export class SearchComponent{
  searchStr:string;
  term:any;
  searchRes:Class[];

  constructor(private _searchService: SearchService, private _routerParams:ActivatedRoute){

  }

  ngOnInit(){
    this.term = new FormGroup({
      'term' : new FormControl('')
    });
  }

  searchClass(){
    this._searchService.searchClass(this.searchStr, this.term)
        .subscribe(res=>{
          this.searchRes = res.classes;
          console.log(this.searchRes);
        })
  }
}
