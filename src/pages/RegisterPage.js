import Search from "../components/Search"
import Register from "../components/Register";
import { useEffect, useState } from "react";
import $ from 'jquery'

const RegisterPage = () => {

  
  const [result, setResult] = useState({});

  return (
    <>
    <div className="container">
      <div className="search-box mb-20">
      <Search 
        result={result}
        setResult={setResult}
      />
      </div>
    
    {
      result.title ? (
        <>
          <Register 
            result={result}
            setResult={setResult}
          />
        </>
      ) : (
        <></>
      )
    }
      
    </div>

    </>
  )
}

export default RegisterPage