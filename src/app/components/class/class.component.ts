import { Component, OnInit, Input} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Class} from '../../../Class';
import {Classes} from '../../../Classes';
import {ActivatedRoute} from '@angular/router';
import {SearchComponent} from '../search/search.component';

@Component({
  selector: 'class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  //directives:[SearchComponent],
  providers:[SearchService],
  inputs:['item']
})
export class ClassComponent{
  currentClass:Classes;
   showClass(item){
    this.currentClass = item;
    console.log(this.currentClass);
  }
}
