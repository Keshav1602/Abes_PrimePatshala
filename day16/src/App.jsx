import React from "react";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "kuch to bhar da bhai!!!",
  });

  const [flag, setFlag] = useState(false);

  const handleChange = (e)=>{
    const {name , value} = e.target;
    const temp = {...user};
    temp[name] = value;

    setUser({
      ...temp,
    })
  }
  //   const handleSubmit = ()=>{
  //     if(user.name && user.email){
  //       setFlag(true);
  //   }
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const temp ={};
    formData.forEach((value,key)=>{
      console.log(key,value);
      temp[key] = value;
    })
    setUser(temp);

    setFlag(true);
  };
  console.log(user);
  return (
    <>
      {!flag ? (

        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input name="name" type="text"  placeholder="Type here ...." value={user.name} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Type here ...." value={user.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phone">phone</label>
            <input type="text" name="phone" placeholder="Type here ...." value={user.phone} onChange={handleChange} />
          </div>

          <button>Submit</button>
        </form>
      ) : (
        <section>
          {/* <h2>name :{user.name}</h2>
          <h4>email :{user.email}</h4> */}
          {
            Object.entries(user).map(([key, value]) => {
              return (
                <div key={key}>
                  <h2>
                    {key} : {value}
                  </h2>
                </div>
              );
            })
          }
        </section>
      )}
    </>
  );
};

export default App;
