import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Cats } from './model/Cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  baseUrl = 'https://freetestapi.com/api/v1/cats'
  
  constructor(private http: HttpClient) { }
  
  getCats(): Observable<Cats> {
    return this.http .get<Cats>(this.baseUrl)
    .pipe(retry(1), catchError(this.errorHandl));

  }

  errorHandl(error:any){
    let errorMessage = ''
    // o erro está vindo do front
    if (error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      // erro que veio da API
      errorMessage = `Error code: ${error.status} \n Message: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage
    })
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
  }),
  }


}
