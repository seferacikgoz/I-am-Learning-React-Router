import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom"
import NotFound from "./NotFound";

const PersonDetail =  () => {
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(id);

  /* const {state: person} = useLocation();
  console.log(person) */

  const [person, setPerson] = useState("");
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
       if (!res.ok){
        setError(true)
        setLoading(false)
        throw new Error("Something Went Wrong")
      }
      return res.json();
    })
      .then((data) => {
        setLoading(false)
        setPerson(data.data)
      })
      .catch((err) => console.log(err));
  
  }, []);

  console.log(person)

  if (error){
    return <NotFound/>
  }
  
  if (loading){
      return(
        <div className="text-center">
          Data Loading
        </div>
      )
    
  }
  if(!error && !loading){
    return (
      <div className="container text-center">
        <h3>{person?.first_name}{person?.last_name}</h3>
        <img className="rounded" src={person?.avatar} alt="" />
        <p>{person?.email}</p>
        <div>
          <button onClick={() => navigate("/")} className="btn btn-success me-2">Go 
            Home
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            Go Back
          </button>
        </div>
  
      </div>
    )
  }

  
}

export default PersonDetail