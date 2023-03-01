/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface Props {}

const Counter: React.FC<Props> = (props) => {

  const dispath = useDispatch()
  const countValue = useSelector(getCounterValue)

  const decrement = () => {
    dispath(counterActions.decrement())
  }
  
  const increment = () => {
    dispath(counterActions.increment())
  }

  return (
    <div>
      <h1 data-testid={'value'}>
        value: 
        {countValue}
      </h1>
      <button onClick={increment} data-testid={'increment'}>
        +
      </button>
      <button onClick={decrement} data-testid={'decrement'}>
        -
      </button>
    </div>
  )
};

export default Counter