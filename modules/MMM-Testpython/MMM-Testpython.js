var Testpythons;
Module.register("MMM-Testpython", {

    defaults: {},
    start: function (){
        Testpythons = this;
        this.sendSocketNotification("TEST")
        var count = 0;
        if (this.config.url.length > 0 ) {
                setInterval( function () { 
                Picture.updateDom(100);
                        Picture.sendSocketNotification("TEST") 
                        console.log('update' + count++) 
                }, this.config.updateInterval);
                this.updateDom()
        }
    },
    getStyles: function(){
      return ["Testpython.css"];
    },

  getDom: function() {
    
    var Temp = document.createElement("div")
    Temp.className = "myContent"
    Temp.id="divid1"
    Temp.font = 4
    var Temp2 = document.createElement("p")
    Temp.innerHTML = "온도 : "
    Temp.id = "clickid1"
    Temp.className = "click"
    Temp.style.fontSize = "2em"
    Temp.appendChild(Temp)
    var Temp2 = document.createElement("p")
    Temp2.innerHTML = "습도 : "
    Temp2.id = "showage"
    Temp2.className = "showage"
    Temp2.style.fontSize = "2em"
    element.appendChild(Temp2)
    
    return Temp
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
        var temperature = payload3[0];
        console.log("Socket recevied 1: " + temperature);
        var humidity = payload3[1];
        console.log("Socket recevied 1: " + humidity);
        
        elemk.innerHTML = "온도 : " + temperature
        elemk2.innerHTML = "습도 : " + humidity

        
          
      break
    }
  }
})

