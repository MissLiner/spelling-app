import Alphabet from './Alphabet';
import WordCard from './WordCard';

function App() {
  return (
    <div className="container-fluid">
    <div className="container-fluid text-center bg-dark text-white">
      <h1 className="display-1">spell this!</h1>
    </div>
      <Alphabet />
      <WordCard />
    </div>

  )
}
export default App;
