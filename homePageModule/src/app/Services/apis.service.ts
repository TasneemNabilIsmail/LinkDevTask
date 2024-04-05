import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  constructor(private http: HttpClient) {}

  getBanner() {
    return this.http.get('https://api.npoint.io/fee177346e7875554413');
  }

  getNewsList() {
    return this.http.get(`https://api.npoint.io/d275425a434e02acf2f7`).pipe(map((obj:any) => obj.News));
  }

  getNewsItemById(id: string) {
    return this.http.get(
      `https://api.npoint.io/d275425a434e02acf2f7/News/${id}`
    );
  }

  getNewsCategories() {
    return this.http
      .get(`https://api.npoint.io/91298d970c27e9a06518`)
      .pipe(map((obj:any) => obj.newsCategory));
  }

  getCategoryById(id:string) {
    return this.http.get(
      `https://api.npoint.io/91298d970c27e9a06518/newsCategory/${id}`
    );
  }
}
