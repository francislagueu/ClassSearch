import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService{
  private searchUrl: string;
  private classUrl: string;
  private classesUrl: string;
  private instructorUrl: string;

  constructor(private _http: Http){

  }

  searchClass(str:string, type='classes'){
    this.searchUrl = 'http://curriculum.ptg.csun.edu/api/courses/'+str;
    return this._http.get(this.searchUrl)
        .map(res=>res.json());
  }

  getClass(id:string){
    this.classUrl = 'http://curriculum.ptg.csun.edu/api/courses/'+id;
    return this._http.get(this.classUrl)
        .map(res=>res.json());
  }

}
