import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { TransactionsService } from 'src/app/_services/transactions.service';
import { Transaction } from 'src/app/_types/types';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','type','accountNumber','bankCode','issueDate','amount','fullDetail'];
  dataSource = new MatTableDataSource<Transaction>();

  constructor(private transService:TransactionsService,private router: Router) { }

  ngOnInit(): void {
    this.transService.getData().subscribe((data)=> {
      this.dataSource = new MatTableDataSource(data);
    }
    );
  }

  goTo(id:number) {
    this.router.navigate([`basic-accounts/details/${id}`]);
  }

}
