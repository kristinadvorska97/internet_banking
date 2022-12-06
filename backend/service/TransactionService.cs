using dnt.DatabaseModel;

namespace dnt;

//{"transactionId":1,"fullName":"Andrej Palovic","transactionType":0,"accountNumber":"46164646416","bankCode":"1100","issueDate":"2019-05-02T00:00:00","amount":10}
public class TransactionService : ITransactionService
{
    private readonly ITransactionRepository transactionRepository;

    public TransactionService(ITransactionRepository transactionRepository){
       this.transactionRepository = transactionRepository;
    }
    
    public List<TransactionViewModel> GetAllTransactions()
    {
        var transactionsViewModel = new List<TransactionViewModel>();
        var transactions = transactionRepository.GetAllTransactions();

        foreach(var transaction in transactions){
            var transactionViewModel = new TransactionViewModel{
                AccountNumber = transaction.AccountNumber,
                Amount = transaction.Amount,
                BankCode = transaction.BankCode,
                FullName = transaction.User.Name,
                IssueDate = transaction.IssueDate,
                TransactionType = transaction.TransactionType.Name
            };

            transactionsViewModel.Add(transactionViewModel);
        }

        return transactionsViewModel;
    }

    public TransactionViewModel getTransaction(int id)
    {
       var transaction = transactionRepository.getTransaction(id);
        var transactionViewModel = new TransactionViewModel{
                AccountNumber = transaction.AccountNumber,
                Amount = transaction.Amount,
                BankCode = transaction.BankCode,
                FullName = transaction.User.Name,
                IssueDate = transaction.IssueDate,
                TransactionType = transaction.TransactionType.Name
        };

       return transactionViewModel;
    }
}

