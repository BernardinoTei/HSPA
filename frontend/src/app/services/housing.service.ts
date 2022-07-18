import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProprety } from '../proprety/IProprety.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllPropreties(): Observable<IProprety[]> {
    return this.http.get('data/propreties.json').pipe(
      map(data => {
        const propretiesArray: Array<IProprety> = [];

        for (const id in Object.keys(data)) {
          if (data.hasOwnProperty(id)) {
            propretiesArray.push(Object.values(data)[id]);
          }
        }
        return propretiesArray;
      })
    );
  }
}
