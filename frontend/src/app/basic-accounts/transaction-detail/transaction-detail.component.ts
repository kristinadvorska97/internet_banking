import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { TransactionsService } from 'src/app/_services/transactions.service';
import { Transaction } from 'src/app/_types/types';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {
  transaction!: Transaction;
  form: FormGroup = this.fb.group({
    accountNumber: new FormControl(''),
    amount: new FormControl(''),
    issueDate: new FormControl('')
  });

  constructor(private transService:TransactionsService,private activeRoute: ActivatedRoute,private fb: FormBuilder) { }

  ngOnInit(): void {
    let id:string = "";
    this.activeRoute.params.pipe(map(p => p['id'])).subscribe(s => id=s);
    this.transService.getDataById(Number(id)).subscribe((data)=> {
      this.transaction = data;
      this.form.patchValue(this.transaction) 
    } );
  }   

}
