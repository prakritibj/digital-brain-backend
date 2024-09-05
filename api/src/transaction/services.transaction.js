const trasaction = require("./model.transaction")
const transactionService = {}


transactionService.createTransaction = async ({ heading, category, link})=>{
     const trans = await trasaction.create({heading, category, link})
    //  console.log(trans, "trans")
     return trans
}
// /////////////////////////////
// Get all transactions
transactionService.getAllTransactions = async (id) => {
        return await trasaction.find({id});
};

// Get a transaction by ID
transactionService.getTransactionById = async (id) => {
    return await trasaction.findById(id)
        
}

// Update a transaction by ID
transactionService.updateTransaction = async (id, updates) => {
    return await trasaction.findByIdAndUpdate(id, updates, { new: true });
}

// Delete a transaction by ID
transactionService.deleteTransaction = async (id) => {
        return await trasaction.findByIdAndDelete(id)
};

module.exports = transactionService

