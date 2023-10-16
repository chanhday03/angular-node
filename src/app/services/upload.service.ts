import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type APIResponseUpload = {
  urls: {
    url: string;
    publicId: string;
  }[];
};
@Injectable({
  providedIn: 'root',
})
export class UploadService {
  API_URL: string = `http://localhost:8088/api/images/upload`;
  constructor(private http: HttpClient) {}
  uploadImage(file: File): Observable<APIResponseUpload> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<APIResponseUpload>(this.API_URL, formData);
  }
}
