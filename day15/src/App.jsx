import React, { useEffect, useState } from 'react'
import Card from './Card';

const App = () => {
  // const getData = async() =>{
  //       const pr1 = fetch('https://dummyjson.com/carts');
  //       pr1.then((res)=>{
  //         console.log("res",res);
  //         const pr2 = res.json();
  //         pr2.then((data)=>{
  //           console.log(data);
  //         })
  //       })
  //       .catch((err)=>{
  //         console.log(err);
  //       })
  //   };
  
    // const getData = async() =>{
    //     const pr1 = fetch('https://dummyjson.com/carts');
    //     pr1.then((res)=> res.json())
    //     .catch((err)=>{
    //       console.log(err);
    //     })
    //     .then((data)=>{
    //       console.log(data);
    //     })
    // };

    
    const [data,setData] = useState({});
    const [skip , setSkip] = useState(0);
    
    const getData = async() =>{
      try{
        console.log("data start");
        const res = await fetch('https://dummyjson.com/products?limit=10&skip='+skip);
        const data1 = await res.json();
        setData(data1);
      }
      catch(err){
        console.log(err);
      }
      finally{
        console.log("Finally");
      }
    }
  // if(data.length === 0)
  // getData();

  useEffect(()=>{
    getData();
  },[skip]);

  const totalPages = Math.ceil(data.total/data.limit);
  const pages = [];
  for(let i=1;i<=totalPages;i++){
    pages.push(i);
  }
  console.log(data);
  return (
    
    <>
    <h1>Hello</h1>
    {/* <p>gkjndf</p> */}

    {/* <ul style={{listStyleType : 'none'}}>
      
      {data.carts?.map((item,idx)=>{
        return <li style={{border : 'red 1px solid'}} key = {idx}>{item.products?.[0]?.title ?? "No"}</li>
      })}
    </ul> */}
    <select name="" id="" onChange={(e)=>{
      setSkip(e.target.value);
      // getData();

    }}>
      {
        pages.map((item)=>{
          return <option key={item}>{item}</option>
        })
      }
    </select>

    {
      data.products?.map((item)=>{
        return((
          Card({data : item})
        ))
      })
    }




    {/* {optional chaining} */}
    {/* {conditional rendering} */}
    {/* {nullish coalescing} */}
    </>
  )
}

export default App