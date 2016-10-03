import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Class} from '../../../Class';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {Instructor} from '../../../Instructor';

// Decorator:
@Component({
  // Attributes:
  selector: 'search', //CSS selector for a host HTML element.  
  templateUrl: './search.component.html', // Specifies HTML to be inserted into the DOM when the component's view is rendered.
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})

export class SearchComponent{
  searchStr:string;
  term:any;
  searchRes:Class[];

courseTitles = ['AAS','ACCT','AE','AFRS','AIS',
    'AM','ANTH','ARAB','ARMN','ART','ASTR','ATHL','ATHS','BIOL','BLAW',
    'BUS','CADV','CAS','CD','CE','CECS','CHEM','CHIN','CHS','CIT','CLAS',
    'CM','CMT','COMP','COMS','CTVA','DEAF','ECE','ECON','EDUC','EED','ELPS',
    'ENGL','EOH','EPC','FCCA','FCFC','FCHC','FCS','FCSB','FCUD','FIN','FLIT',
    'FREN','GBUS','GEOG','GEOL','GWS','HEBR','HHD','HIST','HSCI','HUM','HUMA',
    'IS','ITAL','JAPN','JOUR','JS','KIN','KOR','LING','LRS','MATH','MCOM','ME',
    'MGT','MKT','MPA','MSE','MUS','NURS','PERS','PHIL','PHSC','PHYS','POLS',
    'PSY','PT','QS','RS','RTM','RUSS','SBS','SCI','SCM','SED','SOC','SOM','SPAN',
    'SPED','SUST','SWRK','TH','UDFC','UNIV','URBS','URBSFal'];

  terms = ['Fall-2016', 'Summer-2016', 'Spring-2016', 'Fall-2015', 'Summer-2015', 'Spring-2015', 'Fall-2014', 'Summer-2014', 'Spring-2014', 'Fall-2013', 'Summer-2013', 'Spring-2013'];
  model = new Class(this.terms[0]);

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
