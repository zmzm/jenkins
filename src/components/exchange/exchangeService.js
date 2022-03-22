const ExchangeDAL = require('./exchangeDAL');

class ExchangeService {
  constructor() {
    this.exchangeDAL = new ExchangeDAL();
  }

  getExchange = async (from, to) => {
    const exchange = this.exchangeDAL.retrieveExchange(from, to);

    return exchange;
  };
}

module.exports = ExchangeService;
