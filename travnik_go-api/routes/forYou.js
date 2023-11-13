var express = require('express');
var router = express.Router();
var {db} = require('../databaseConnection');
const queryString = require("querystring");
const net = require("./machineLearning");

function helpTrainArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

router.get(`/getActivites`, function(req, res, next) {
    let sql = `SELECT a.id, a.id_location, a.title, a.description, a.starts, a.ends, l.address, l.details AS location_details, l.latitude, l.longitude, GROUP_CONCAT(c.name, ', ') AS categories, GROUP_CONCAT(c.color, ', ') as categories_color
                FROM activity AS a
                JOIN location AS l ON a.id_location = l.id
                JOIN category_in_activity AS ca ON ca.id_activity = a.id
                JOIN category AS c ON c.id = ca.id_category
                WHERE strftime('%s', 'now') < a.ends OR a.ends IS NULL
                GROUP BY a.id;`
    db.all(sql,  (err, rows) => {
        if (err) {
            throw err;
        }
        res.send({ activities: rows });
    });
});

router.get(`/getSpecialActivities/:data`, function(req, res, next) {
    let data = queryString.parse(req.params.data)
    let sql = `SELECT a.id, a.id_location, a.title, a.description, a.starts, a.ends, l.address, l.details AS location_details, l.latitude, l.longitude, GROUP_CONCAT(c.name, ', ') AS categories, GROUP_CONCAT(c.color, ', ') as categories_colors
                FROM activity AS a
                JOIN location AS l ON a.id_location = l.id
                JOIN category_in_activity AS ca ON ca.id_activity = a.id
                JOIN category AS c ON c.id = ca.id_category
                WHERE ($2 > a.ends AND a.starts < $1) OR a.starts IS NULL
                GROUP BY a.id;`
    db.all(sql,[data.starts, data.ends],  (err, rows) => {
        if (err) {
            throw err;
        }
        let temp = data.categories;
        if(temp === undefined){
            res.send({activites: rows})
            net.run(rows[0].id, data.age)
        }
        else{
            let filteredData = rows.filter(item => {
                if (item.categories) {
                    const categoriesArray = item.categories.split(',').map(category => category.trim());
                    return categoriesArray.some(category => temp.includes(category));
                }
                return false;
            });
            filteredData=helpTrainArray(filteredData)
            res.send({ activities: filteredData });
        }
    })
});

router.get(`/getCategories`, function(req, res, next) {
    db.all(`SELECT * from category`,  (err, rows) => {
        if (err) {
            throw err;
        }
        res.send({ categories: rows });
    });
});

router.post(`/add_training`, function(req, res, next) {
    let data = req.body.data
})

module.exports = router;
