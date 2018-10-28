import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { environment } from '../environments/environment';

import { Notice } from './notice';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private noticesUrl = environment.rootUrl + '/notices';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getNotices(owner_id: number): Observable<Notice[]> {
    //'ownerId' instead of 'owner_id' is needed for prod env. 
    const url = `${this.noticesUrl}/?owner_id=${owner_id}`;
    return this.http.get<Notice[]>(url);
  } 

  addNotice(notice: Notice): Observable<Notice> {
    return this.http.post<Notice>(this.noticesUrl, notice, httpOptions);
  }
}
