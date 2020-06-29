var Testpythons;
Module.register("MMM-Testpython", {

    defaults: {
	             updateInterval: 0.5 * 60 * 1000,
    },
    start: function (){
        Testpythons = this;
        this.sendSocketNotification("TEST")
        var count = 0;
        if (this.config.url.length > 0 ) {
                setInterval( function () { 
                        Testpythons.sendSocketNotification("TEST") 
                        console.log('update' + count++) 
                }, this.config.updateInterval);
                this.updateDom()
        }
    },
    getStyles: function(){
      return ["Testpython.css"];
    },

  getDom: function() {
    
    var element = document.createElement("div")
    element.className = "myContent"
    element.id="divid1"
    element.font = 4
    var Temp = document.createElement("p")
    Temp.innerHTML = "온도 : "
    Temp.id = "clickid1"
    Temp.className = "showage"
    Temp.style.fontSize = "2em"
    element.appendChild(Temp)
    var Temp2 = document.createElement("p")
    Temp2.innerHTML = "습도 : "
    Temp2.id = "showage"
    Temp2.className = "showage"
    Temp2.style.fontSize = "2em"
    element.appendChild(Temp2)
    
    return element
    },
    
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "TH":
        console.log("notnotnotnot :  " + payload);   
        var payload3;
        payload3=payload.toString().split(",");
        console.log("Socket recevied 1: " + payload3);
        var elemk = document.getElementById("clickid1")
        var elemk2 = document.getElementById("showage");

	if (payload3[0] === "NAN"){

	}
	else {

        var temperature = payload3[1];
        console.log("Socket recevied 1: " + temperature);
        var humidity = payload3[0];
        console.log("Socket recevied 1: " + humidity);
<<<<<<< HEAD



        elemk.innerHTML = "온도 : " + temperature + "도";
        elemk2.innerHTML = "습도 : " + humidity + "%";

	}


        
          
=======

        elemk.innerHTML = "온도 : " + temperature + "도";
        elemk2.innerHTML = "습도 : " + humidity + "%";
	} 
>>>>>>> 7ffd4bc50511deeca3066d56c3eafafac2c0a55a
      break
    }
  }
})




