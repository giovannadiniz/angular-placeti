import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from '@domain/cidade';
import { Observable, from } from 'rxjs';
import {environment} from "../app/environments/environment";

@Injectable()
export class ProjetoService {
    private apiURL = "http://localhost:8080/placeti/cidades";

    constructor(private http: HttpClient) {}

    //------------------------------------------------
    /** Recupera a lista de cidades */
    //------------------------------------------------
    pesquisarCidades(): Observable<Cidade[]> {
      return this.http.get<Cidade[]>(this.apiURL);
    }

    //------------------------------------------------
    /** Exclui a cidade informada */
    //------------------------------------------------
    excluir(cidade: Cidade): Observable<any> {
      return this.http.delete(this.apiURL + '/' + cidade.id);
    }

    //------------------------------------------------
    /** Salva a cidade informada */
    //------------------------------------------------
    salvar(cidade: Cidade): Observable<any> {
      if (cidade.id != null) {
        return this.http.put(this.apiURL, cidade);
      } else {
        return this.http.post(this.apiURL, cidade);
      }
    }

}
