// import React from 'react'

// const App = () => {
//   const [moniter , setMoniter] = React.useState('HJSJISJ')
//   console.log("re-rendered", moniter);
//   const handleChange = (e) =>{
//     // console.log(e);
//     // e.target.
//     setTimeout(() => {
//       setMoniter(e.target.value.toUpperCase());
//       console.log(e);
//     }, 20);
//     // setMoniter(e.target.value.toUpperCase());

//     console.log(moniter);
//   }
//   return (
//     <div>
//       <p>Name</p>
//       <input placeholder='enter your name' type="text" onChange={handleChange} value={moniter} />
//       <p>Hello {moniter}</p>
//     </div>
//   )
// }

// export default App

import React from 'react';

const Idcard = ({ name }) => {
  if (name.length === 0) {
    return null;
  }
  return <p>Name: {name}</p>;
};

const App = () => {
  const [name, setName] = React.useState('');
  const [submittedName, setSubmittedName] = React.useState('');
  const [isFormVisible, setIsFormVisible] = React.useState(true);

  const handleChange = (e) => {
    setName(e.target.value.toUpperCase());
  };

  const handleSubmit = () => {
    setSubmittedName(name);
    setIsFormVisible(false); 
  };

  return (
    <div>
      {isFormVisible ? (
        <div>
          <p>Name</p>
          <input
            placeholder="Enter your name"
            type="text"
            onChange={handleChange}
            value={name}
          />
          <p>Hello {name}</p>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <Idcard name={submittedName} />
      )}
    </div>
  );
};

export default App;

