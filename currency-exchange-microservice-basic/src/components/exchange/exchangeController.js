const ExchangeService = require('./exchangeService');

class ExchangeController {
  constructor() {
    this.exchangeService = new ExchangeService();
  }

  getExchange = async (req, res) => {
    const { from, to } = req.params;
    const result = await this.exchangeService.getExchange(from, to);

    res.status(200).json(result);
  };
}

module.exports = ExchangeController;
