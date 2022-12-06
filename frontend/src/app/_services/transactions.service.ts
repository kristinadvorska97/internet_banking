import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../_types/types';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient:HttpClient) { }

  public getData() : Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>('api/transaction/GetAllTransactions');
  }

  public getDataById(id: number): Observable<Transaction> {
    return this.httpClient.get<Transaction>(`api/transaction/${id}`);
  }
}
