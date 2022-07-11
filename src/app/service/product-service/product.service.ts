import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {Product} from '../../model/Product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private API_PRODUCT=environment.API_LOCAL+'product';
  constructor(private http:HttpClient) { }
  createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.API_PRODUCT,product);
  }
  pageProduct(request){
    const params=request;
    return this.http.get(this.API_PRODUCT,{params})
  }
  searchNameProduct(request,search){
    const params=request;
    const nameProduct=search;
    return this.http.get(this.API_PRODUCT+'/search?nameProduct='+nameProduct,{params});
  }
}
