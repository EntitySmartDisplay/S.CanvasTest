Module.register("Picture",{
		// Default module config.
		defaults: {
                                frameWidth: "1500",
				width:"100%",
                                updateInterval: 0.5 * 60 * 1000,
                                url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],
                                scrolling: "yes",
                },
        
        start: function () {
                Picture = this;
                this.sendSocketNotification("URL")
                var count = 0;
                if (this.config.url.length > 0 ) {
                        setInterval( function () { 
                        Picture.updateDom(5000);
                                Picture.sendSocketNotification("URL") 
                                console.log('update' + count++) 
                        }, this.config.updateInterval);
                }
        },
        socketNotificationReceived: function(notification, payload) {
                switch(notification) {
                case "RESULT URL":
                        console.log("payload what "+this.config.url)
                        console.log("payload what "+payload)
                        var payload1;
                        payload1 = payload.toString()
                        
                        if (this.config.url != payload1){
                                payload1=payload.toString();
                                console.log("payload what akdakd "+payload[0])
                                console.log("payload what akdakd "+this.config.url)
                        
                                
                                this.config.url=[payload1];
                                
                                console.log("payload what akdakd "+payload1)
                                console.log("payload what akdakd "+this.config.url)
                                
                        }
                        else if (payload1 === ""){
                                console.log("payload what akdakd "+payload[0])
                        }
                        else
                        console.log('의진이')
                }  
        },   
        

        
  getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  
resume: function() {
   console.log("Resuming");
   return this.getDom();
},
        getStyles: function() {
                return [
                        "Picture.css",
                ];
        },
        // Override dom generator.
	getDom: function() {
                var { width, height } = this.config;
                var wrapper = document.createElement("div");
                
                wrapper.className = "mmm-iframe"
                wrapper.style.width = `${this.config.frameWidth}px`;
                var html = `
                        <div class="mmm-iframe-wrapper" style="padding-top: ${100 / (width / height)}%;">
                                <iframe
                                        src="${this.config.url[this.getRandomInt(0, this.config.url.length)]}"
                                        width="${width}"
                                        height="${height}"
                                        scrolling="${this.config.scrolling}"
                                ></iframe>
                        </div>
                        
                `;



                wrapper.insertAdjacentHTML("afterbegin", html);

		return wrapper;
	}

});