import { BtnLanguaje } from "./components/atoms/BtnLanguaje";
import { BtnMode } from "./components/atoms/BtnMode";

export const App = () => {

  return (
    <div className='h-screen flex flex-col justify-center items-center '>
      <BtnMode/>
      <BtnLanguaje/>
    </div>
  );
}


