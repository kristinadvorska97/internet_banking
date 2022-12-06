import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionType'
})
export class TransactionTypePipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Incoming': return 'INCOMING';
      case 'Outgoing': return 'OUTGOING';
      default: return '--';
    }
  }

}
