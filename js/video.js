var video= document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay=false;
	video.loop=false;
	
	;
	

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	console.log("The current volume is" + video.volume)
	document.querySelector("#volume").innerHTML= video.volume*100+"%";
	console.log("The current rate is" + video.playbackRate);
}); 


	document.querySelector("#pause").addEventListener("click", function() {console.log("Pause Video");
		
		video.pause()

});



document.querySelector("#slower").addEventListener("click", function() {
console.log("Current speed is " + video.playbackRate*100+"%");
video.playbackRate*=0.95;
console.log("New speed is " + video.playbackRate*100+"%");


	

});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate*100+"%");
	video.playbackRate/=0.95;
	console.log("New speed is " + video.playbackRate*100+"%");
	
	});

	document.querySelector("#mute").addEventListener("click", function() {
		// console.log("mute is" + video.muted)

			if (video.muted==false) {
				video.muted=true
				document.querySelector("#mute").innerHTML= "Unmute"
				
			}
			else{
				video.muted=false
				document.querySelector("#mute").innerHTML= "Mute"
			}
		});


document.querySelector("#slider").addEventListener("click", function()
{
	console.log(this.value)
	var val= this.value
	video.volume= val/100 
	console.log(video.volume)
	document.querySelector("#volume").innerHTML= video.volume*100+"%";
	


});


document.querySelector("#skip").addEventListener("click", function()
{
console.log(video.duration)
	console.log("Original location " + video.currentTime)
	video.currentTime+=15;
	console.log("New location " +video.currentTime)
	var update= video.currentTime

if (video.duration==update){
	video.currentTime=0;
}

// if (orig==update){
// video.currentTime=0
// video.play()
// }


});

document.querySelector("#vintage").addEventListener("click", function()
{
document.querySelector("#player1").classList.add('oldSchool');
console.log(this.value)


	
});

document.querySelector("#orig").addEventListener("click", function()
{
document.querySelector("#player1").classList.remove('oldSchool');


	
});