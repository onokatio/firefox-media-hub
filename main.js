console.log("start media hub")
browser.tabs.getCurrent().then( (tab) => {
	console.log("tabid:" + tab.id)
}, (error) => {
	console.log("error": + error)
})

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
	browser.runtime.sendMessage({msg: "subscribe false"})
}
