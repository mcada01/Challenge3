import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ServJokesService {

  constructor(private http: Http) { }
  
  jokes(){
    return IntervalObservable.create(6000)
                              .startWith(1)
                              .flatMap( (i) => this.http.get("https://api.icndb.com/jokes/random") )
                             .map( res => {
                               return res.json().value;
                             });
  }

}
