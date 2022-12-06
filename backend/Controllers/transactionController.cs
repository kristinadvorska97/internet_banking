using dnt.DatabaseModel;
using Microsoft.AspNetCore.Mvc;

namespace dnt.Controllers;

[ApiController]
[Route("api/transaction")]
public class TransactionController : ControllerBase
{
   

    private readonly ILogger<TransactionController> _logger;
    private readonly ITransactionService _service;
    public TransactionController(ILogger<TransactionController> logger, ITransactionService service)
    {
        _logger = logger;
        _service = service;
    }

    [HttpGet(Name = "Get")]
    public String Get()
    {
        return "First Controller.";
    }

    [HttpGet("GetAllTransactions")]
    public List<TransactionViewModel> GetAllTransactions() {
        return this._service.GetAllTransactions();
    }

    [HttpGet("{id}")]
    public TransactionViewModel getTransaction(int id){
        return this._service.getTransaction(id);
     }
}
