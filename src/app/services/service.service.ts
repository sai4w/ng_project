import { Injectable } from '@angular/core';
import { Skin } from '../model/skin.model';
import { Category } from '../model/quality.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  apiURL: string = 'http://localhost:3000';

  skins: Skin[];

  currentSkin: Skin;

  constructor(private router: Router, private http: HttpClient) {
    this.getSkins().subscribe((skins) => {
      this.skins = skins;
    });
   
  }

  getSkins(): Observable<Skin[]> {
    return this.http.get<Skin[]>(this.apiURL + '/skin');
  }

  addSkin(skin: Skin): Observable<Skin> {
    return this.http.post<Skin>(this.apiURL + '/skin', skin, httpOptions);
  }

  deleteSkin(id: number) {
    console.log()
    const url = `${this.apiURL + '/skin'}/${id}`;
    console.log(url)
    return this.http.delete(url, httpOptions);
  }

  updateSkin(skin: Skin): Observable<Skin> {
    const url = this.apiURL + "/skin/"+skin.id
    console.log(url)
    return this.http.put<Skin>(url, skin, httpOptions);
  }

  getSkin(id: number): Observable<Skin> {
    const url = `${this.apiURL + '/skin'}/${id}`;
    return this.http.get<Skin>(url, httpOptions);
  }
  findCategory(id: number): Observable<Category> {
    const url = `${this.apiURL + '/category'}/${id}`;
    return this.http.get<Category>(url, httpOptions);
  }

  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiURL + '/category');
  }
}
