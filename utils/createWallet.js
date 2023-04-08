const Web3 = require('web3')
const web3 = new Web3('HTTP://blockchain.interplanetarybank.org')
function createWallet(pass){
    const wallet = web3.eth.accounts.wallet.create(1)
    const encrypted = wallet.encrypt(pass)
    wallet.clear()
    return encrypted
}
module.exports = createWallet