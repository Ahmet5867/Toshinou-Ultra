/*
Created by Freshek on 08.02.2018
An emergency filter for EventStream
BP Sucks
Lolis > BP
*/

let _hash = "85fdd8298d31bc3f0f6b2fad603abc00";

let blacklist = [
	"main-frame",
	"minimized",
	"movable",
	"window",
	"header",
	"tab",
	"minimize-btn",
	"content",
	"cnt_minimize_window",
	"ui-draggable",
	"ui-draggable-handle",
	"dompath="
]

chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		let result = false;
		if(details.url.indexOf("main.swf") != -1){
			if(details.url.indexOf(_hash) == -1){
				alert("BOT OFFLINE, GAME WILL NOT LOAD!!");
			}
		}
		blacklist.forEach(item => {
			if (details.url.indexOf(item) != -1){
				result = true;
			}
		});
		return {
			cancel: result
		};
	}, {
		urls: ["https://*.bigpoint.net/*", "https://darkorbit-22.bpsecure.com/spacemap/main.swf*"]
	}, ["blocking"]
);