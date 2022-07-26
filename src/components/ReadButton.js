import hearIcon from "images/hear.png";
import { useSpeechSynthesis } from 'react-speech-kit';
import { detectBrowser } from "data/helpers";

const ReadButton = ({word}) => {
  const { speak, voices } = useSpeechSynthesis();
  const readWord = () => { 
    let voiceChoice;
    const browser = detectBrowser();
    switch(browser) {
      case "chrome":
        voiceChoice = 41;
        break;
      default:
        voiceChoice = 0;
    }
    speak({text: word, voice: voices[voiceChoice]});
    }
  return(
    <button 
      type="button" 
      className="btn h-100 w-100 p-0" 
      onClick={readWord}>
      <img 
        className="image h-100" 
        src={hearIcon} 
        alt="hear word" />
    </button>
  )
}
export default ReadButton;