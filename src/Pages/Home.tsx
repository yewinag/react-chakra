import { Listing } from '../components/Listing';
import { SignupCard } from '../components/SignUp';
import { useAppDispatch, useAppSelector } from '../Redux';
import { selectApp } from '../Redux/Slices/app';
import {
  counterSlice,
  decrement,
  increment,
  selectCounter,
} from '../Redux/Slices/counter';

export const Home = () => {
  const { value } = useAppSelector(selectCounter);
  const { version } = useAppSelector(selectApp);
  const dispatch = useAppDispatch();

  return (
    <>
      <Listing />
      <p>{version}</p>
      <button onClick={() => dispatch(increment())}>pls</button>
      {value}
      <button onClick={() => dispatch(decrement())}>minuts</button>
      <SignupCard />
    </>
  );
};
