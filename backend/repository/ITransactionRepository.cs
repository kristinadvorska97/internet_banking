using dnt.DatabaseModel;

namespace dnt;

//{"transactionId":1,"fullName":"Andrej Palovic","transactionType":0,"accountNumber":"46164646416","bankCode":"1100","issueDate":"2019-05-02T00:00:00","amount":10}
public interface ITransactionRepository
{
  List<Transaction> GetAllTransactions();

  Transaction getTransaction(int id);
}
