import "./App.css";
import Temperature from "./compoents/Temperature";

function App() {
  return (
    <>
      <div className="flex bg-[#1F213A] h-screen justify-center align-top">
        <div className=" mt-40 w-1/5 h-1/3">
          <Temperature />
        </div>
        <div className="mt-40 bg-red-400 w-1/3 h-1/3 p-8">
          <h2 className="text-slate-200 text-2xl">Today's Highlights</h2>
        </div>
      </div>
      
    </>
  );
}

export default App;
