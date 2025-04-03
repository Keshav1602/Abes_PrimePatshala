import React from "react";
import P from 'papaparse';
import Card from "./Component/Card.jsx";
const App = () => {



  const [customerData, setCustomerData] = React.useState(null);
  const handleFileUpload = (e) => {
    P.parse(e.target.files[0], {
      header: true,
      complete: (result, err) => {
        if (err.length > 0) {
          console.log("ERROR");
        } else {
          console.log(result.data);
          setCustomerData(result.data);
        }
      },
    });
  };


  return (
    <div>
      <div>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
      </div>
      <div>
        {customerData?.map((item) =>{
          return <Card data={item}></Card>;
        })}
      </div>
    </div>
  );
};

export default App;
