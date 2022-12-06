public partial class TransactionViewModel
    {
        public decimal TransactionId { get; set; }
        public string FullName { get; set; }
        public string TransactionType { get; set; }
        public string AccountNumber { get; set; } = null!;
        public string BankCode { get; set; } = null!;
        public DateTime IssueDate { get; set; }
        public decimal Amount { get; set; }

    }