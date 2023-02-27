/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface Props {}

const Counter: React.FC<Props> = (props) => {

  const dispath = useDispatch()
  const countValue = useSelector(getCounterValue)

  const decrement = () => {
    dispath(counterActions.increment())
  }
  
  const increment = () => {
    dispath(counterActions.decrement())
  }

  return (
    <div>
      <h1>
        value: 
        {countValue}
      </h1>
      <button onClick={increment}>
        +
      </button>
      <button onClick={decrement}>
        -
      </button>
    </div>
  )
};

export default Counter