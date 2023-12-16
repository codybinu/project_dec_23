import { useState, useCallback,useEffect,useRef } from "react";

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  

  // useref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numberAllowed) {
        str += "0123456789"
      }
      if (charAllowed) {
        str += "!@#$%^&*(){}[]|"
      }
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    },
    [length, numberAllowed, charAllowed, setPassword],
  )

  const copyPasswordToClipBoard = useCallback(()=>{
    navigator.clipboard.writeText(password).then(()=>window.screen('copied to clipboard'));
    //below line will select the chars which are being copied
    passwordRef.current?.select();
    //below line can set limit char to select and copy
    passwordRef.current?.setSelectionRange(0,24);
    // window.navigator.clipboard.writeText(password)
  },[password]);

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>

      <div className="w-full text-center max-w-xl mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-4xl text-center text-white">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-2 mx-1">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-1 py-1 "
            placeholder="passWord"
            readOnly
            ref={passwordRef}

          />
          <button 
          className="rounded-sm bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-10">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={8}
            max={24}
            value={length} 
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className="cursor-pointer"
            onChange={()=>{setNumberAllowed((prev) => !prev)}}
            />
            <label >Number Allowed</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            className="cursor-pointer"
            onChange={()=>{setCharAllowed((prev) => !prev)}}
            />
            <label >Character Allowed</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
