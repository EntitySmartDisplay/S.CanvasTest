var NodeHelper = require("node_helper");
var {PythonShell} = require('python-shell');
var socketPicture;
module.exports = NodeHelper.create({
  start: function() {
    socketPicture=this;
    console.log(this.name+"node_helper started")
  },
  
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "URL":
        console.log("notification : " + notification)
	    PythonShell.run('C:/S.CanvasTest/modules/Picture/scanvasdb.py', null, function (err, result) {
            if (err) throw err;
            console.log("imgurl " + result);          
            socketPicture.sendSocketNotification("RESULT URL",result);
          });
	       
        break
    }
  }
}) 
