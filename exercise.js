function getItemById(items, id) {
  return items.find(item => item.id == id)
}

function dropId(object) {
  delete object.id;
  return object;
}

function buildTransactions(sales, items) {
  return sales.map(sale => {
    return {...sale, ...getItemById(items, sale.itemId)}
  }).map(dropId);
}

function getTransactionsByItemDescription(transactions, description){
  return transactions.filter(transaction => transaction.description === description);
}

module.exports = {
  // Uncomment these as you write them
  getItemById,
  buildTransactions,
  getTransactionsByItemDescription
}
