import Alphabet from 'components/Alphabet';
import WordCard from 'components/WordCard';

function App() {
  return (
    <div className="container-fluid">
    <div className="container-fluid text-center bg-dark text-white">
      <h1 className="display-1">spell me :)</h1>
    </div>
      <Alphabet />
      <div className="row">
      
        <div className="col">
        </div>
        <div className="col">
          <WordCard />
        </div>        
        <div className="col">
        </div>
      </div>
      
    </div>

  )
}
export default App;
