const service = require('../services/tenderService');
module.exports = {
  home: (req,res) => res.render('index'),
  active: async (req,res) => {
    const tenders = await service.listActive();
    res.render('tenders',{tenders, selected:null});
  },
  ended: async (req,res) => {
    const tenders = await service.listEnded();
    res.render('ended_tenders',{tenders});
  },
  details: async (req,res) => {
    const id = req.params.id;
    const tender = await service.find(id);
    const offers = await service.listOffers(id);
    res.render('details',{tender, offers});
  },
  addForm: (req,res) => res.render('add_tender'),
  add: async (req,res) => {
    await service.create(req.body);
    res.redirect('/tenders');
  },
  offerForm: async (req,res) => {
    const tender = await service.find(req.params.id);
    res.render('add_offer',{tender});
  },
  offer: async (req,res) => {
    await service.submitOffer(req.params.id, req.body);
    res.redirect('/tenders/'+req.params.id);
  }
};