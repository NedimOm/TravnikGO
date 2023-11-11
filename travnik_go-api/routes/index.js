var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../database/identifier.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  else{
    console.log('Connected to the TravnikGO database.');
  }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/proba', function(req, res, next) {
  res.send("Radi ko sat!");
});

router.get('/calendar', function(req, res, next) {
  const sql = `SELECT * FROM
               ACTIVITY INNER JOIN category_in_activity cia on activity.id = cia.id_activity 
                        INNER JOIN category c on c.id = cia.id_category`;
  db.all(sql,  (err, rows) => {
    if (err) {
      throw err;
    }
    const events = [];

    rows.forEach(row => {
      const eventId = row.id;
      let event = events.find(e => e.id === eventId)

      if (!event) {
        event = { id: eventId, title: row.title, date: row.starts, details: row.details, categories: []}
        events.push(event);
      }

      if (row.name) {
        event.categories.push(row.name);
      }

    })
    console.log(events);
    res.send({ events: rows });
  });
  //res.send("dada");
});

module.exports = router;
