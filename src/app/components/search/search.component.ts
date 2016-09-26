import { Component } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Class} from '../../../CLass';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[SearchService]
})
export class SearchComponent {
  searchStr:string;
  searchRes:Class[];

  constructor(private _searchService: SearchService){

  }

  searchClass(){
    this._searchService.searchClass(this.searchStr)
        .subscribe(res=>{
          this.searchRes = res.courses;
          console.log(this.searchRes);
        })
  }
}
