function sendPause(){
	sendAll({msg: "pause"})
}
function sendPlay(){
	sendAll({msg: "play"})
}

function sendAll(obj){
	browser.tabs.query({})
		.then( tabs => {
			tabs.forEach( (tab) => {
				console.log("sending message to tabid:" + tab.id)
				browser.tabs.sendMessage(tab.id, obj).then( response => {
					console.log(response)
				})
			})
		})
};

document.getElementById("play-button").addEventListener("click",sendPlay)
document.getElementById("pause-button").addEventListener("click",sendPause)

sendPause();
