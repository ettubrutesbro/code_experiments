//shoddily crafted adaptation of google's webkit voice api demo...no interim text or accent support but it'll get your text
//for seseme master controller

var final_transcript = '';
var recognition = new webkitSpeechRecognition(), //master variable with built-ins

recognizing = false; //boolean state for if we're listening

recognition.continuous = true;

recognition.onstart = function() {
	console.log("it's listening");
	recognizing = true;
}

recognition.onend = function() {
	recognizing = false;
}

recognition.onresult = function(evt) {
    if (typeof(evt.results) == 'undefined') {
      recognition.onend = null;
      recognition.stop();
      return;
    }
    for (var i = evt.resultIndex; i < evt.results.length; ++i) {
      if (evt.results[i].isFinal) {
        final_transcript += evt.results[i][0].transcript;
      } 
    }
    //final_transcript = final_transcript.replace(/\s/g, ''); //removes spaces from speech
    voiceCommand();
    //speechDiv.innerHTML = final_transcript; //this is for inserting the text into some kind of html element, DIV, etc.
  };

function beginRecording(evt){ //call this event onclick etc. 
	console.log('what');
	if(recognizing){
		console.log('stopped');
		recognition.stop();
		return;
	}
	  final_transcript = '';
	  recognition.start();
	  speech.innerHTML = '';
	
}

function voiceCommand(){
    console.log("you said: " + final_transcript);

   //conditional table for matching 

   if(final_transcript.match(/jack/i)){ //if anywhere in the string there's a "jack"
      console.log('somebody said my name');
      //jack's favorite color
    }
    if(final_transcript.match(/justin/i)){
      console.log('somebody said that other dudes name');
      //justin's favorite color
    })
}

