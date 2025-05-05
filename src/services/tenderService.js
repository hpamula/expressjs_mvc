const Tender = require('../models/tender');
const pad = n => n.toString().padStart(2, '0');
const toSQLiteFormat = input => {
  const date = new Date(input);
  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate())
  ].join('-') + ' ' + [
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds())
  ].join(':');
};
module.exports = {
  listActive: () => new Promise((res, rej) => Tender.getActive((e,r)=>e?rej(e):res(r))),
  listEnded: () => new Promise((res, rej) => Tender.getEnded((e,r)=>e?rej(e):res(r))),
  find: id => new Promise((res, rej) => Tender.getById(id,(e,r)=>e?rej(e):res(r))),
  create: data => new Promise((res, rej) => Tender.add(data,(e)=>e?rej(e):res())),
  create: data => new Promise((res, rej) => {
    const formattedData = {
      ...data,
      start: toSQLiteFormat(data.start),
      end: toSQLiteFormat(data.end)
    };
    Tender.add(formattedData, e => e ? rej(e) : res());
  }),
  submitOffer: (id, offer) => new Promise((res, rej) => Tender.addOffer(id, offer, e=>e?rej(e):res())),
  listOffers: id => new Promise((res, rej) => Tender.getOffers(id,(e,r)=>e?rej(e):res(r)))
};