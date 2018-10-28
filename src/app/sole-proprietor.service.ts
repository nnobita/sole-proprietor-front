import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { SoleProprietor } from './sole-proprietor'
import { MessageService } from './message.service';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SoleProprietorService {

  private ownersUrl = environment.rootUrl;
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** POST: add a new hero to the server */
  addOwner (owner: SoleProprietor): Observable<SoleProprietor> {
    return this.http.post<SoleProprietor>(this.ownersUrl, owner, httpOptions).pipe(
      tap((owner: SoleProprietor) => this.log(`added owner w/ id=${owner.id}`)),
      catchError(this.handleError<SoleProprietor>('addOwner'))
    );
  }

  getOwners(): Observable<SoleProprietor[]> {
    return this.http.get<SoleProprietor[]>(this.ownersUrl)
      .pipe(
        tap(heroes => this.log('fetched owners')),
        catchError(this.handleError('getOwners', []))
      );
  }

  getOwner(id: number): Observable<SoleProprietor> {
    const url = `${this.ownersUrl}/${id}`;
    return this.http.get<SoleProprietor>(url).pipe(
      tap(_ => this.log(`fetched owner id=${id}`)),
      catchError(this.handleError<SoleProprietor>(`getOwner id=${id}`))
    );
  } 

  /** PUT: update the hero on the server */
  updateOwner (owner: SoleProprietor): Observable<any> {
    return this.http.put(this.ownersUrl, owner, httpOptions).pipe(
      tap(_ => this.log(`updated owner id=${owner.id}`)),
      catchError(this.handleError<any>('updateOwner'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteOwner (owner: SoleProprietor | number): Observable<SoleProprietor> {
    const id = typeof owner === 'number' ? owner : owner.id;
    const url = `${this.ownersUrl}/${id}`;

    return this.http.delete<SoleProprietor>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted owner id=${id}`)),
      catchError(this.handleError<SoleProprietor>('deleteOwner'))
    );
  }

  filterOwners(registered: boolean): Observable<SoleProprietor[]> {
    var path = '';
    if (registered) {
      path = '/registered';
    } else {
      path = '/unregistered';
    }
    return this.http.get<SoleProprietor[]>(`${this.ownersUrl}${path}`).pipe(
      tap(_ => this.log(`found owners with registration = "${registered}"`)),
      catchError(this.handleError<SoleProprietor[]>('filterOwners', []))
    );
  }

  /* GET heroes whose name contains search term */
  searchOwners(term: string): Observable<SoleProprietor[]> {
    if (!term.trim()) {
      // if not search term, return empty owner array.
      return of([]);
    }
    return this.http.get<SoleProprietor[]>(`${this.ownersUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found owners matching "${term}"`)),
      catchError(this.handleError<SoleProprietor[]>('searchOwners', []))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`SoleProprietorService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
