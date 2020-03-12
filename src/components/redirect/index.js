import React, {useState, useEffect} from 'react';
import axois from "axios";

const  Redirect = ({match, history}) => {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const {id} = match.params;
    console.log(id)
    const url=`${process.env.REACT_APP_BASE_API_URL}/${id}`;
    axois.get(url,{
      "Content-Type":"application/json"
    })
    .then(r => console.log(r))
    .catch(err => history.push('/error'))

    return () => {
      // cleanup
    }
  }, [history, match.params])

  return (
    <div>
      <h1>loading</h1>
    </div>
  )
}

export default Redirect
