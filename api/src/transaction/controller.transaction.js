
const transactionService = require("./services.transaction");

const transactionController = {};

// Create a newtransaction
transactionController.createTransaction = async (req, res) => {
    const { heading, category, link } = req.body;
    if (!heading || !category || !link) {

        return res.send({
            status: "Err", msg: "heading, category, and link are required", data: null
        });
    }
    try {
        const newtransaction= await transactionService.createTransaction({ heading, category, link });
        // console.log(newtransaction,"newtransaction")
       
        return res.send({status:"Ok",msg: " transaction created successfully",data: newtransaction
        });
    } catch (error) {
        console.error('Create transaction error:', error);
        return res.send({ status: "Err",msg: "Error creating transaction",data: null
        })

}
}

// get all transaction
transactionController.getAllTransactions = async (req, res) => {
    try {
        const getAlltransaction = await transactionService.getAllTransactions()
        // console.log(getAlltransaction ,"hii")
        if (getAlltransaction.length) {
            return res.send({ status: "OK", data: getAlltransaction })
        }
        return res.send({ msg: "transaction not found", data: null, status: false })
    } catch (err) {
        console.log(err)
        return res.send({ status: "ERR", data: [], error: err })
    }
}

// Update a transaction
transactionController.updateTransaction = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    if (!id) {
        return res.send({
            status: "Err",
            msg: "Transaction ID is required",
            data: null
        });
    }
    try {
        const updatedTransaction = await transactionService.updateTransaction(id, updateData);
        if (!updatedTransaction) {
            return res.send({
                status: "Err",
                msg: "Transaction not found",
                data: null
            });
        }
        return res.send({
            status: "Success",
            msg: "Transaction updated successfully",
            data: updatedTransaction
        });
    } catch (error) {
        console.error('Update transaction error:', error);
        return res.send({
            status: "Err",
            msg: "Error updating transaction",
            data: null
        });
    }
};

// Delete a transaction
transactionController.deleteTransaction = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.send({
            status: "Err",
            msg: "Transaction ID is required",
            data: null
        });
    }
    try {
        const deletedTransaction = await transactionService.deleteTransaction(id);
        if (!deletedTransaction) {
            return res.send({
                status: "Err",
                msg: "Transaction not found",
                data: null
            });
        }
        return res.send({
            status: "OK",
            msg: "Transaction deleted successfully",
            data: deletedTransaction
        });
    } catch (error) {
        console.error('Delete transaction error:', error);
        return res.send({
            status: "Err",
            msg: "Error deleting transaction",
            data: null
        });
    }
};


module.exports = transactionController;
