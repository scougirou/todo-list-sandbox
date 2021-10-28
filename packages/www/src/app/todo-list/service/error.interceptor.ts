import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor( private readonly snackBar: MatSnackBar ) {
  }

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    return next.handle( request )
      .pipe(
        catchError( ( error: HttpErrorResponse ) => {
          let errorMsg = '';
          if ( error.error instanceof ErrorEvent ) {
            errorMsg = `Error: ${ error.error.message }`;
          } else {
            console.log( 'this is server side error' );
            errorMsg = `Error Code: ${ error.status },  Message: ${ error.message }`;
          }
          console.log( errorMsg );
          this.snackBar.open(errorMsg, 'x', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })
          return throwError( errorMsg );
        } )
      )
  }
}
