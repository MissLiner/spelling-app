import Alphabet from 'components/Alphabet';
import Board from 'components/Board';

function App() {

  return (
    <div className="container-fluid">
      <div className="container-fluid text-center bg-dark text-white">
        <h1 className="display-1">spell me :)</h1>
      </div>
      <Alphabet />
      <Board /> 
    </div>

  )
}
export default App;
