import Invoice from "./component/invoice";
import './App.css';
import React, { useLayoutEffect, useState } from 'react'; 

function App() {

  const idElementPrint = (divName) => {
    var printContents = document.getElementById(divName).innerHTML;
    let ifram = document.createElement("iframe");
    ifram.style = "display:none";
    document.body.appendChild(ifram);
    let pri = ifram.contentWindow;
    pri.document.open();
    pri.document.write(printContents);
    pri.document.close();
    pri.focus();
    pri.print();
  }
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  const [width, height] = useWindowSize();
  console.log('test------>',width,height )
  return (
    <div className="App"     >
      <div id="App" >
        <Invoice  width={width} height={height}/>
      </div>
      <button type='submit' onClick={() => idElementPrint('App')}>Print Bill</button>
    </div>
  );
}

export default App;
