import React, { useEffect, useState } from "react";

function valuelist({bpi}) {
  const [value, setValue] = useState("USD");
  const [list, setList] = useState("");
  useEffect(() => {
    // console.log(value)
    if (value === "USD") {
      setList(
        <>
        <div className="sm:flex border border-collapse m-3 p-3 tracking-wider">
          <li className="">Bitcoin rate for : {bpi.USD.description}</li>
          <span className="">{bpi.USD.code}</span>
          <p className="">{bpi.USD.rate}</p></div>
        </>
      );
       } else if (value === "EUR") {
      setList(
     <>
         <div className="border border-collapse m-3 p-3 flex tracking-tighter ">
          <li className="hover:">Bitcoin rate for : {bpi.EUR.description}</li>
          <span className=""> {bpi.EUR.code}</span>
          <p>{bpi.EUR.rate}</p>
          </div>
        </>
      );
    } else if (value === "GBP") {
      setList(
        <>
        <div className="border border-collapse m-3 p-3 flex tracking-wide ">
          <li className="tracking-tighter ">Bitcoin rate for : {bpi.GBP.description}</li>
          <span className="tracking-tighter">{bpi.GBP.code}</span>
          <p className="tracking-tighter "> {bpi.GBP.rate}</p>
          </div>
        </>
      );
    }
  },[value]);
  return (
    <>
    <div className="flex border border-collapse m-3 p-3 tracking-wider">
      <ul className="font-bold tracking-wider ">{list}</ul>
      </div>
    <div className=" border border-collapse  m-3 ">
  <select onChange={(e)=>setValue(e.target.value)} className={" border border-blue-600 h-12 font-semibold  m-3 drop-shadow-xl min-w-full"}>
      
        <option className="font-semibold " value={"USD"}>USD</option>
        <option className="font-semibold  " value={"GBP"}>GBP</option>
        <option className="font-semibold  " value={"EUR"}>EUR</option>
      </select>
    </div>

      </>
     
  );
}

export default valuelist;
   {/* <select onChange={(e)=>setValue(e.target.value)}>
        <option value={"USD"}>USD</option>
        <option value={"GBP"}>GBP</option>
        <option value={"EUR"}>EUR</option>
      </select> */}