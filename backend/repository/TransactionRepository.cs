using dnt.DatabaseModel;
using Microsoft.EntityFrameworkCore;

namespace dnt;

//{"transactionId":1,"fullName":"Andrej Palovic","transactionType":0,"accountNumber":"46164646416","bankCode":"1100","issueDate":"2019-05-02T00:00:00","amount":10}
public class TransactionRepository : ITransactionRepository
{
    private List<Transaction> transactions;
    private readonly DatabaseModel.whiyes5oContext context;

    public TransactionRepository(DatabaseModel.whiyes5oContext context){
        this.context = context;
        transactions = new List<Transaction> { };
    }
    public List<Transaction> GetAllTransactions()
    {
        return this.context.Transactions.Include(p => p.User).Include(p => p.TransactionType).ToList();
    }

    public Transaction getTransaction(int id)
    {
       return this.context.Transactions.Include(p => p.User).Include(p => p.TransactionType).FirstOrDefault(p => p.Id == id);
    }
}

