const mysql = require('mysql');

const connection = mysql.createConnection({
    host        : 'ec2-3-112-243-194.ap-northeast-1.compute.amazonaws.com',
    user        : 'user1',
    password    : 'tkdlek12',
    database    : 'pri1',
});

connection.connect();

connection.query('SELECT * FROM scanvasdb', function(err, rows, fields) {
    if(err) {
        console.log('err', err);
    } else {
        console.log('rows', rows);
    }
});
connection.end();