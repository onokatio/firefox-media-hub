browser.runtime.onMessage.addListener(getmessage)
function getmessage(message){
	console.log(message)
	return Promise.resolve({msg: "hi"})
}
