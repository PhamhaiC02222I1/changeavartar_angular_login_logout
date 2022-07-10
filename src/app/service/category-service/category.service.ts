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
  private API_CATEGORY_LIST=environment.API_LOCAL+'categories/list-category'
  private API_CATEGORY_CREATE=environment.API_LOCAL+'categories/create-category'
  private API_CATEGORY_SEARCH=environment.API_LOCAL+'categories/search?name=';
  // private API_DELETE_CATEGORY=environment.API_LOCAL+'categories/delete-category/'
  constructor(private http:HttpClient) { }
  createCategory(category:Category):Observable<Category>{
    return this.http.post<Category>(this.API_CATEGORY_CREATE,category);
  }
  pageCategory(request){
    const params=request;
    return this.http.get(this.API_CATEGORY_LIST,{params})
  }
  // deleteCategory(category:Category):Observable<Category>{
  //   return this.http.delete<Category>(this.API_DELETE_CATEGORY,category);
  // }
  searchCategoryName(request,search){
    const params=request;
    const name=search;
    return this.http.get(this.API_CATEGORY_SEARCH+name,{params});
  }
}
