import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAccountsRoutingModule } from './basic-accounts-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TransactionTypePipe } from '../_pipes/transaction-type.pipe';


@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionDetailComponent,
    TransactionTypePipe
  ],
  imports: [
    CommonModule,
    BasicAccountsRoutingModule,
    MatButtonModule,
    MatTableModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers:[]
})
export class BasicAccountsModule { }
