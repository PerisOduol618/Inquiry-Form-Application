import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  private apiUrl = 'http://localhost:8000/api/inquiry';

  constructor(private http: HttpClient) { }

  sendInquiry(inquiryData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, inquiryData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('username:password') // Add basic auth if required
      })
    });
  }
}
