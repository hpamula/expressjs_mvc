const Tender = require('../models/tender');
module.exports = {
  listActive: () => new Promise((res, rej) => Tender.getActive((e,r)=>e?rej(e):res(r))),
  listEnded: () => new Promise((res, rej) => Tender.getEnded((e,r)=>e?rej(e):res(r))),
  find: id => new Promise((res, rej) => Tender.getById(id,(e,r)=>e?rej(e):res(r))),
  create: data => new Promise((res, rej) => Tender.add(data,(e)=>e?rej(e):res())),
  submitOffer: (id, offer) => new Promise((res, rej) => Tender.addOffer(id, offer, e=>e?rej(e):res())),
  listOffers: id => new Promise((res, rej) => Tender.getOffers(id,(e,r)=>e?rej(e):res(r)))
};