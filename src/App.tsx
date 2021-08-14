import './App.css';
import { Cart } from './alpaki-ui/cart';

function App() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl flex items-center space-x-4">
      <Cart>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </Cart>
    </div>
  );
}

export default App;
