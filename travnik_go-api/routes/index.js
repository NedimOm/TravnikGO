var express = require('express');
var router = express.Router();
var {db} = require('../databaseConnection');
var weather = require('weather-js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/proba', function(req, res, next) {
  res.send("Radi ko sat!");
});

router.get(`/admin/getLocation/:key`, function(req, res, next) {

  db.all(`SELECT adress,
                  details,
                  latitude, longitude
            FROM location
            WHERE id = ?
            ORDER BY adress`,[req.params.key],  (err, rows) => {
    if (err) {
      throw err;
    }
    //console.log(`${row.firstName} ${row.lastName} - ${row.email}`);
    //res.json({ location: rows });
    res.send({ location: rows });
  });
});

router.get('/admin/getLocations', function(req, res, next) {
  let sql = `SELECT id, adress,
                  details,
                  latitude, longitude
            FROM location
            ORDER BY adress`;

  db.all(sql,  (err, rows) => {
    if (err) {
      throw err;
    }
    //console.log(`${row.firstName} ${row.lastName} - ${row.email}`);
    res.json({ locations: rows });
  });
});

router.post('/admin/addlocation', function(req, res, next) {
  if(req.body.address !== "" && req.body.details !== "" && req.body.latitude !== "" && req.body.longitude !== "") {
    db.serialize(() => {
      // Queries scheduled here will be serialized.
      db.run(`INSERT INTO location(id_admin, adress, details, latitude, longitude)
          VALUES(1,?,?,?,?)`, [req.body.address, req.body.details, req.body.latitude, req.body.longitude], function (err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        //console.log(`A row has been inserted with row id ${this.lastID}`);
      });
    });
  }
});

router.put('/admin/updatelocation/:key', function(req, res, next) {
  if(req.body.address !== "" && req.body.details !== "" && req.body.latitude !== "" && req.body.longitude !== "") {
    db.serialize(() => {
      db.run(`UPDATE location
                    SET adress = ?, details = ?, latitude = ?, longitude = ? 
                        WHERE id = ?;`, [req.body.address, req.body.details, req.body.latitude, req.body.longitude, req.params.key], function (err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        //console.log(`A row has been inserted with row id ${this.lastID}`);
      });
    });
  }
});

router.delete('/admin/deletelocation/:key', function(req, res, next) {
  if(req.body.address !== "" && req.body.details !== "" && req.body.latitude !== "" && req.body.longitude !== "") {
    db.serialize(() => {
      db.run(`DELETE FROM location WHERE id=?;`, [req.params.key], function (err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        //console.log(`A row has been inserted with row id ${this.lastID}`);
      });
    });
  }
});

module.exports = router;
