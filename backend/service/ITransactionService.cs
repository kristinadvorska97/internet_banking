using dnt.DatabaseModel;

namespace dnt;

public interface ITransactionService
{
  List<TransactionViewModel> GetAllTransactions();

  TransactionViewModel getTransaction(int id);
}
