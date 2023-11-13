var brain = require("brain.js");

const net = new brain.NeuralNetwork();

var {db} = require('../databaseConnection');
function train(){
    db.all(`SELECT a.id, dt.age, count(dt.date_now) as number_of_clicks
                from activity as a
                left join data_for_training as dt on dt.id_activity = a.id
                group by a.id`,  (err, rows) => {
        if (err) {
            throw err;
        }
        let trening_list = [];
        rows.data.map((el)=>{
            trening_list.append({Input:[el.id, el.age], Output:{count: el.number_of_clicks}})
        })

        net.train(trening_list)
    });


}

module.exports = net;