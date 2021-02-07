import React, { useEffect, useState } from "react";
export default function Test() {
 const [count, setCount] = useState(0);
 const [anothercount, setAnothercount] = useState(0);
 return (
   <>
     <ParentFn count={count} anothercount={anothercount} />
     <button onClick={() => setAnothercount(anothercount + 1)}>clickme</button>
   </>
 );
}

function ParentFn(props) {
 console.log("render.Parent...");
 useEffect(() => {
   console.log("useEffect.Parent...");
   return () => {
     console.log("cleanup.Parent");
   };
 });
 return <Child1 {...props} />;
}
function Child1(props) {
 console.log("render.Child1...");
 useEffect(() => {
   console.log("useEffect.Child1...");
   return () => {
     console.log("cleanup.Child1");
   };
 });
 return <Child2 />;
}
function Child2() {
 console.log("render.Child2...");
 useEffect(() => {
   console.log("useEffect.Child2...");
   return () => {
     console.log("cleanup.Child2");
   };
 });
 return null;
}