import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  rutaGlobal = 'http://localhost:8080/persona/'
  constructor(private http : HttpClient) { }
}
