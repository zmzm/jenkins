const Database = require('../database');

class ExchangeDAL {
  constructor() {
    this.database = new Database();
  }

  retrieveExchange = async (from, to) => {
    try {
      const exchange = this.database.findExchangePair({ from, to });

      return exchange;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = ExchangeDAL;
