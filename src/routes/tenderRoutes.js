const express = require('express');
const ctrl = require('../controllers/tenderController');
const router = express.Router();

router.get('/', ctrl.home);
router.get('/tenders', ctrl.active);
router.get('/tenders/ended', ctrl.ended);
router.get('/tenders/add', ctrl.addForm);
router.post('/tenders/add', ctrl.add);
router.get('/tenders/:id', ctrl.details);
router.get('/tenders/:id/offer', ctrl.offerForm);
router.post('/tenders/:id/offer', ctrl.offer);

module.exports = router;