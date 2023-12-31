const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../database/identifier.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    else{
        console.log('Connected to the TravnikGO database.');
    }
});

module.exports = {
    db
}