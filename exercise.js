function getItemById(items, id) {
    return items.filter(items => items.id === id)
}


function buildTransactions(sales, items) {
    function getItemByIdAgain(items, id) {
        return items.find(items => items.id === id)
    }
    return sales.map(sale => {
        const itemId = sale.itemId
        const item = getItemByIdAgain(items, itemId)

        return {
            ...sale,
            description: item.description,
            price: item.price,
        }
    })
}

function getTransactionsByItemDescription(targetTrans, description) {
    return targetTrans.filter(targetTrans => targetTrans.description === description)
}



module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}