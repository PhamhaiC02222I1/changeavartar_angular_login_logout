import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../model/Category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
//API_LOCAL
  private API_CATEGORY=environment.API_LOCAL+'categories'
  constructor(private http:HttpClient) { }
  createCategory(category:Category):Observable<Category>{
    return this.http.post<Category>(this.API_CATEGORY,category);
  }
}
