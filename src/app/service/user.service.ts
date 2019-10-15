import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
  
})
export class UserService {
//  apiUrl = "https://api.backendless.com/53BFD26B-E3AE-111C-FF80-831079B0AA00/9BC4860F-823D-0174-FF20-039172293000/data/Users";
baseUrl= 'http://localhost:54277/api';
// baseUrl ='https://google.com';
apiUrl="";  
constructor( private http: HttpClient) { }
  // getData(){
  //   return this.http.get<User[]>(this.api);
  //   this.http.post(this.api , User);
  //   console.log(this.api);
  

  // }
  getUser(id): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched User id=${id}`)),
      // catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }
  
  addUser (xyz): Observable<User> {
    console.log(xyz);
    // return this.http.post<User>(this.baseUrl + '/ApplicationUser/Register', xyz);
    let apiUrl = `${this.baseUrl}ApplicationUser/Register`;
    return this.http.post<User>(apiUrl, xyz);
  }
  // handleError<T>(arg0: string): (err: any, caught: Observable<User>) => never {
  //   throw new Error("Method not implemented.");
  // }
  
  updateUser (email, User): Observable<any> {
    const url = `${this.apiUrl}/${email}`;
    return this.http.put(url, User, httpOptions).pipe(
      tap(_ => console.log(`updated User email=${email}`)),
      // catchError(this.handleError<any>('updateUser'))
    );
  }
  
  deleteUser (email): Observable<User> {
    const url = `${this.apiUrl}/${email}`;
  
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted User email=${email}`)),
      // catchError(this.handleError<User>('deleteUser'))
    );
  }
}

