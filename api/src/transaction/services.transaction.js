const trasaction = require("./model.transaction")
const transactionService = {}


transactionService.createTransaction = async ({ heading, name, category, link})=>{
     const trans = await trasaction.create({ heading,name, category, link})
    //  console.log(trans, "trans")
     return trans
}
// /////////////////////////////
// Get all transactions
// transactionService.getAllTransactions = async (id) => {
//         return await trasaction.find({id});
// };

// -------------------------------------------------------------------//
transactionService.getAllTransactions = async ({ startDate, endDate, page = 1, limit = 10 }) => {
    const skip = (page - 1) * limit;
    const query = {};

    if (startDate || endDate) {
        query.date = {};
        if (startDate) query.date.$gte = new Date(startDate);
        if (endDate) query.date.$lte = new Date(endDate);
    }

    const transactions = await trasaction.find(query).sort({ date: -1 }).skip(skip).limit(limit);
    const total = await trasaction.countDocuments(query); // Get total count of transactions based on the query

    return { transactions, total };
};
// -------------------------------------------------------------------//
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

