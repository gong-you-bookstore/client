import Search from "../components/Search"
import Nav from "../components/Nav";
import Register from "../components/Register";
import { useEffect, useState } from "react";


const RegisterPage = () => {
  const [result, setResult] = useState({});

  return (
    <>
    {
        result.title ? (
          <>
            <Register 
              result={result}
              setResult={setResult}
            />
          </>
        ) : (
          <>
            <Search 
              result={result}
              setResult={setResult}
            />
          </>
        )
      }
    </>
  )
}

export default RegisterPage