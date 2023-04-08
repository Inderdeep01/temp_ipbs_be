const Web3 = require('web3')
const web3 = new Web3('HTTP://blockchain.interplanetarybank.org')
const express = require('express')
const router = express.Router()
const account = web3.eth.accounts.privateKeyToAccount('8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63')
//function to send 1 ETH to the desired account
function transact(account,addr){
    console.log(account)
    const transactionObject = {
        from:account.address,
        to: addr,
        value: 1000000000000000000,
        //gasPrice:'0x0',
        gas:'21000'
    }
    return new Promise(async (resolve,reject)=> {
        console.log("Signing Txn")
        const signedTx = await web3.eth.accounts.signTransaction(transactionObject,account.privateKey)
        console.log("Sending Txn .......")
        const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        console.log(txReceipt)
        if(!txReceipt)
            reject(txReceipt)
        else
            resolve(txReceipt)
    })
}

router.get('/:addr',(req,res)=>{
    const addr = req.params.addr
    transact(account,addr).then(res.status(200).json({msg:"Account refueled!"}))
        .catch(res.sendStatus(500))
})