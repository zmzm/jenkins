class Database {
  #EXCHANGE_DATABASE = {
    USD: {
      BYN: 0.25,
    },
    BYN: {
      USD: 2.5,
    },
  };

  #handler = {
    get(target, prop) {
      if (prop in target) {
        const objectProp = Reflect.get(target, prop);

        if (typeof objectProp === 'object' && objectProp !== null) {
          return new Proxy(objectProp, this);
        }
        return objectProp;
      }
      return {};
    },
  };

  #DATABASE_PROXY = new Proxy(this.#EXCHANGE_DATABASE, this.#handler);

  findExchangePair = async ({ from, to }) => {
    const conversionFrom = this.#DATABASE_PROXY[`${from}`];
    const conversionTo = conversionFrom[`${to}`];

    return {
      from,
      to,
      conversionMultiple: conversionTo,
    };
  };
}

module.exports = Database;
