import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

import { Notice } from './notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private noticesUrl = 'api/notices';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getNotices(id: number): Observable<Notice[]> {
    const url = `${this.noticesUrl}/?owner_id=${id}`;
    return this.http.get<Notice[]>(url);
  } 
}
