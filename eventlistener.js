Coin.Sent().watch({}, '', function(error, result) {
    if (!error) {
        console.log("Coin transfer: " + result.args.amount + " conis were sent from " + result.args.from + " to " + result.args.to + ".");

        console.log("Balance is now:\n" + "Sender: " + Coin.balances.call(result.args.from) + "Receiver: " + Coin.balances.call(result.args.to));
    }
})