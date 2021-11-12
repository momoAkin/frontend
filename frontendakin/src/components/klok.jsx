import React, { useEffect, useState } from "react";

function Klok() {
  const [klokState, setKlokState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setKlokState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="min-h-screen flex justify-center items-center flex-col">
    <div className="border-4 border-gray-800 bg-green-300">
      <h1 className="font-mono font-bold text-5xl	">{klokState}</h1> 
    </div>
  
  </div>;
}


export default Klok;

