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

  searchClass(str:string, term:string){
    this.searchUrl = 'http://curriculum.ptg.csun.edu/api/terms/'+term+'/classes/'+str;
    return this._http.get(this.searchUrl)
        .map(res=>res.json());
  }

  getClass(id:string){
    this.classUrl = 'http://curriculum.ptg.csun.edu/api/courses/'+id;
    return this._http.get(this.classUrl)
        .map(res=>res.json());
  }

  searchInstructor(name:string, type='instructor')
  {
    var split = name.toLowerCase().split(" ", 2);
    this.instructorUrl = 'http://curriculum.ptg.csun.edu/api/classes?instructor='+split[0] +'.'+split[1]+"@csun.edu";
    return this._http.get(this.instructorUrl)
        .map(res=>res.json());
  }

}
