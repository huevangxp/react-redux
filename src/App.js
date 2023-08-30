
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './reducers/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const title = useSelector((state) => state.counter.title)
  const btn1 = useSelector((state) => state.counter.btn1)
  const btn2 = useSelector((state) => state.counter.btn2)
  const dispatch = useDispatch()
  return (
    <div className="App container mt-5 text-center">
      <h2 className="mb-3">{ title }</h2>
    <p className="h1">{count}</p>
    <button
      onClick={() => {
        dispatch(increment())
      }}
      className="me-2 btn btn-primary"
    >
      {btn1}
    </button>
    <button
      onClick={() => {
        dispatch(decrement())
      }}
      className="me-2 btn btn-danger"
    >
      {btn2}
    </button>
  </div>
  );
}

export default App;
