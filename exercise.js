const items = [{
    id: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29
}, {
    id: 2,
    description: "Mint Wafers",
    price: 1.09
}, {
    id: 3,
    description: "Peppermint Poppers",
    price: 2.38
}];

function getItemById(items, id) {
    return items.filter(items => items.id === id)
}


const sales = [{
    itemId: 1,
    quantity: 2
}, {
    itemId: 2,
    quantity: 2
}, {
    itemId: 1,
    quantity: 2
}, {
    itemId: 3,
    quantity: 3
}];

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




const targetTrans = [{
    itemId: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29,
    quantity: 2
}, {
    itemId: 2,
    description: "Mint Wafers",
    price: 1.09,
    quantity: 2
}, {
    itemId: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29,
    quantity: 2
}, {
    itemId: 3,
    description: "Peppermint Poppers",
    price: 2.38,
    quantity: 3
}];

function getTransactionsByItemDescription(targetTrans, description) {
    return targetTrans.filter(targetTrans => targetTrans.description === description)
}



module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}