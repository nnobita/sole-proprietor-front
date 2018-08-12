import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Notice } from './notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(
    private http: HttpClient
  ) { }

  getOwner(id: number): Observable<Notice> {
    const url = `${this.ownersUrl}/${id}`;
    return this.http.get<Notice>(url).pipe(
      tap(_ => this.log(`fetched owner id=${id}`)),
      catchError(this.handleError<Notice>(`getOwner id=${id}`))
    );
  } 
}
