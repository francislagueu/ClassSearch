import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Class} from '../../../CLass';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';

// Decorator:
@Component({
  // Attributes:
  selector: 'search', //CSS selector for a host HTML element.  
  templateUrl: './search.component.html', // Specifies HTML to be inserted into the DOM when the component's view is rendered.
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
  //declarations:[AutoGrow]
})
export class SearchComponent{
  searchStr:string;
  term:any;
  searchRes:Class[];

  terms = ['Fall-2016', 'Summer-2016', 'Spring-2016', 'Fall-2015', 'Summer-2015', 'Spring-2015', 'Fall-2014', 'Summer-2014', 'Spring-2014', 'Fall-2013', 'Summer-2013', 'Spring-2013'];
  model = new Class(this.terms[0]);

  //searchResInstructor:Instructor[];
  //instructor;

  constructor(private _searchService: SearchService){
    //this.instructor = SearchService.searchInstructor();
  }

  ngOnInit(){
    this.term = new FormGroup({
      'term' : new FormControl('')
    });
  }

  searchClass(){
    this._searchService.searchClass(this.searchStr, this.model.term)
        .subscribe(res=>{
          this.searchRes = res.classes;
          console.log(this.searchRes);
        })
  }

/*  searchInstructor(){
    this._searchService.searchInstructor(this.searchStr)
      .subscribe(res=>{
      this.searchRes = res.instructors;
      console.log(this.searchRes);
    })
  }
  */
}
