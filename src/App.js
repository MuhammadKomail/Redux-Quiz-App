import './App.css';
// import { useSelector } from "react-redux"
import Quiz from './container/Quiz';

function App() {

  // const state = useSelector((e) => e);
  // console.log(state);

  return (
    <div className="App">

      {/* {
      state.map((item)=>{
        return(
        <h2>{item.question}</h2>
        )
      })
      } */}
      <Quiz />

    </div>
  );
}

export default App;
