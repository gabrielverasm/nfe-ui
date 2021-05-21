import { NotaFiscal } from './notafiscal/notafiscal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotafiscalService {

  constructor( private http: HttpClient) { }

  save( nfe: NotaFiscal) : Observable<NotaFiscal> {
    return this.http.post<NotaFiscal>('http://localhost:8080/notasfiscais', nfe)
  }

  update( nfe: NotaFiscal) : Observable<any> {
    return this.http.put<any>(`http://localhost:8080/notasfiscais/${nfe.id}`, nfe)
  }

  getNotasFiscais() : Observable<NotaFiscal []> {
    return this.http.get<NotaFiscal []>('http://localhost:8080/notasfiscais');
  }

  getNotaFiscalById(id: number) : Observable<any> {
    return this.http.get<any>(`http://localhost:8080/notasfiscais/${id}`);
  }
  delete( nfe: NotaFiscal) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/notasfiscais/${nfe.id}`)
  }
}
