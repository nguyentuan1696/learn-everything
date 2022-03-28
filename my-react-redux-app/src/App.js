import { useSelector, useDispatch } from 'react-redux'
import {
  increaseCounter,
  decreaseCounter,
} from './redux/Counter/counter.actions'

import './App.css'

function App()
{
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)

  const handleIncrement = () => {
    dispatch(increaseCounter())
  }

  const handleDecrement = () => {
    dispatch(decreaseCounter())
  }
  return (
    <div className='App'>
      <div>Count: {count}</div>

      <button onClick={handleIncrement}>Increase Count</button>

      <button onClick={handleDecrement}>Decrease Count</button>
  
    </div>
  )
}

export default App
