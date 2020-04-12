﻿/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 9000,
	
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1","172.16.99.254", "::ffff:172.16.99.254", "::1","172.16.111.104", "::ffff:172.16.111.104", "::1","172.16.111.227", "::ffff:172.16.111.227", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "Picture",
			position: "top_left",	// This can be any of the regions.
			visible : "ture",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/img/cS-1.jpg"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "1000", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
					hidden : "false"
			}
		},
		{
			module: "clock",
			position: "bottom_left",
			config : {
				display:"none", 
			}
		},
	{
		module: "newsfeed",
		position: "bottom_center",
		config: {
		feeds: 
			[{
			title: "사회 , 경제  ",
			url: "http://media.daum.net/rss/part/primary/entertain/rss2.xml" 
			},
			{
			title: "스포츠  ",
			url: "http://media.daum.net/rss/today/primary/sports/rss2.xml" 
			},
			{
			title: "연예  ",
			url: "http://api.sbs.co.kr/xml/news/rss.jsp?pmDiv=entertainment" 
			},
			{
			title: "IT , 과학  ",
			url: "http://media.daum.net/rss/part/primary/digital/rss2.xml" 
			},
			],
			showSourceTitle: true,
			showPublishDate: false
			}
		},

		{
			module: "alert",
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module:"CHANGE_CLOCK"
		},
		{
			module:"CHANGE_WEATHER"
		},
		{
			module:"CHANGE_NEWSFEED"
		},
		
			
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}