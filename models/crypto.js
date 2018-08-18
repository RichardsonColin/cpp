class Crypto {
  constructor(fullName, tickerName) {
    this.fullName = fullName;
    this.tickerName = tickerName;
  }

  getFullName() {
    return this.fullName;
  }

  getTickerName() {
    return this.tickerName;
  }
  
  getHistDate(data) {
    if (!data.hasOwnProperty('time'))
      throw new Error("data is missing the time property.");

    return new Date(data.time * 1000);
  }

  getOpenPrice(data) {
    if (!data.hasOwnProperty('open'))
      throw new Error("data is missing the open property.");

    return Number(data.open);
  }

  getClosePrice(data) {
    if (!data.hasOwnProperty('close'))
      throw new Error("data is missing the close property.");

    return Number(data.close);
  }

  getHighPrice(data) {
    if (!data.hasOwnProperty('high'))
      throw new Error("data is missing the high property.");

    return Number(data.high);
  }

  getLowPrice(data) {
    if (!data.hasOwnProperty('low'))
      throw new Error("data is missing the low property.");

    return Number(data.low);
  }

  getVolumeInCrypto(data) {
    if (!data.hasOwnProperty('volumefrom'))
      throw new Error("data is missing the volumefrom property.");

    return Number(data.volumefrom);
  }

  getVolumeInFiat(data) {
    if (!data.hasOwnProperty('volumeto'))
      throw new Error("data is missing the volumeto property.");

    return Number(data.volumeto);
  }
}
