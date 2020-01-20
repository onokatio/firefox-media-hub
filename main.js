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
