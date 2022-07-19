//-----------------------initial-when-file-is-created-------------------------------
// import { Injectable } from '@angular/core';


// @Injectable({
//   providedIn: 'root'
// })
// export class EmpService {

//   constructor() { }
// }

//----------------------------------------------------------------------------
//-----------------------display-the-emp-data-directly-from-local-------------
//-----------------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { DATA } from '../emp-data';
import { Format } from '../emp-format';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
// }


@Injectable({
  providedIn: 'root'
})

export class EmpService {
  
  constructor() { }

  getEmp():Observable<Format[]>{
    const fo = of(DATA);
    return fo;
  }



}




