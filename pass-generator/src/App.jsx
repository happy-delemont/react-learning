import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNumber) str += "0123456789";
    if (allowChar) str += "@!#$%^&*[]+=_`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, allowNumber, allowChar, setPassword]);
  const CopyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);
  useEffect(() => {
    PasswordGenerator();
  }, [length, allowNumber, allowChar, PasswordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto my-8 px-4 py-3 text-orange-500 rounded-lg bg-gray-800">
        <h1 className="text-white text-center my-3">password generator</h1>
        <div className="flex rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="px-3 py-0.5 outline-none bg-blue-700 text-white"
            onClick={CopyPasswordToClipBoard}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              className="cursor-pointer"
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowNumber}
              onChange={() => setAllowNumber((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowChar}
              onChange={() => setAllowChar((prev) => !prev)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
