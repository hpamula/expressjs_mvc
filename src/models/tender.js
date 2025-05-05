const db = require('../config/db');
module.exports = {
  getActive: cb => db.all("SELECT * FROM tenders WHERE end_datetime > datetime('now')", cb),
  getEnded: cb => db.all("SELECT * FROM tenders WHERE end_datetime <= datetime('now')", cb),
  getById: (id, cb) => db.get("SELECT * FROM tenders WHERE id = ?", id, cb),
  add: (data, cb) => db.run(
    `INSERT INTO tenders(title,institution,description,start_datetime,end_datetime,max_budget)
     VALUES(?,?,?,?,?,?)`,
    [data.title,data.institution,data.description,data.start,data.end,data.budget], cb
  ),
  addOffer: (tender_id, offer, cb) => db.run(
    `INSERT INTO offers(tender_id,name,amount,submitted_at) VALUES(?,?,?,datetime('now'))`,
    [tender_id, offer.name, offer.amount], cb
  ),
  getOffers: (tender_id, cb) => db.all(
    `SELECT * FROM offers WHERE tender_id = ? ORDER BY amount ASC`, tender_id, cb
  )
};