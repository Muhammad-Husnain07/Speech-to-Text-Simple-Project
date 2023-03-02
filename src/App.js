import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./App.css";

function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return console.log("Browser Does Not Support Speech Recognition");
  }
  if (!isMicrophoneAvailable) {
    return alert("Microphone is Not Available");
  }
  console.log(listening);
  console.log(transcript);
  return (
    <div className="App">
      <p>{listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
}

export default App;
