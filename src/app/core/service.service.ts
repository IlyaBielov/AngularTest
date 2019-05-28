import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  get(): Observable<string> {
    return this.http.get<string>(this.baseUrl);
  }
}
