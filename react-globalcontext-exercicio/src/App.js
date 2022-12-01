import { GlobalContext } from "./Context/GlobalContext"
import axios from "axios";
import { useEffect, useState } from "react";
import { Router } from "./Routers/Router";
import { Card } from "./Pages/Card";

function App() {

  const [ usuarios, setUsuarios ] = useState([])



  useEffect(()=>{
    catchUsers()
  },[])

  const catchUsers = async () => {
    try {
      const headers = {
        headers: {
          Authorization: "felipe-leal-ammal"
        }
      }
      const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`, headers)
      console.log(response.data)
      setUsuarios(response.data)
    } catch (error){
      console.log(error)
    }
  }

  const context = {
    usuarios: usuarios
  }

  return (
    <>
      <GlobalContext.Provider value={context}>
        <Card/>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
