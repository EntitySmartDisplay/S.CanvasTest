var NodeHelper = require("node_helper");
var {PythonShell} = require('python-shell');
var socketTestpython;
module.exports = NodeHelper.create({
  start: function() {
    socketTestpython=this;
    console.log(this.name+"node_helper started")
  },
  
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "TEST":
        console.log("notification : " + notification)
	    PythonShell.run('C:/S.CanvasTest/modules/MMM-Testpython/send.py', null, function (err, result) {
            if (err) throw err;
            console.log("TH:" + result);          
            socketTestpython.sendSocketNotification("TH",result);
          });
	       
        break
    }
  }
}) 
