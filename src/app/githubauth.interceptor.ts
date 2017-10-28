import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/observable';

@Injectable()
export class GithubAuthInterceptor implements HttpInterceptor {
    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: req.headers.set('Authorization', 'token a5804439495fdc8971dbdf08f79a011650b96b64')
        })

        return next.handle(authReq);
    }
}