console.log("start media hub")

browser.runtime.onMessage.addListener(getmessage)
function getmessage(message){
	console.log(message)
	if(message.msg === "play"){
		document.querySelector("video").play()
	}else if(message.msg === "pause"){
		document.querySelector("video").pause()
	}
	return Promise.resolve({msg: "hi"})
}

if(document.querySelector("video") !== null ){
	console.log("I have video element.")
	browser.runtime.sendMessage({msg: "subscribe"})
}else{
	console.log("I don't have video element.")
}
