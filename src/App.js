import logo from './logo.svg';
import './App.css';
import Loading from './component/Loading';
import Error from './component/Error';
import Data from './component/Data';
import Personal from './component/Personal';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [loading,setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedData,setselectedData] = useState (null);
  const [error,setError] = useState(false);

  const resetState = () =>{
    setData([]);
    setselectedData(null);
    setLoading(true);
    setError(false);
    getData();
  }

  const getData = (id=null) =>{
    setLoading(true);
    let actualId = '';

    if(!!id && parseInt(id,10) > 0){
      actualId =parseInt(id,10);
    }

    axios.get(`https://api.matgargano.com/employees/${actualId}`).then(Response => {
      setData(Response.data);
      setLoading(false)
    }).catch((error)=>{
      setError(error.message || "No Error Given");
    })
  }


  useEffect(()=>{
    getData();
  }, []);

  useEffect(()=>{
    if(!!selectedData){
      getData(selectedData);
    }
  },[selectedData]);

  return (
    <div className="App">
      {!!error && <Error resetState={resetState} message={error}/>}
      {!error &&  <>
        {!!loading &&  <Loading />}
          {
            !loading && <div>
            
            {
              !selectedData && <Data setselectedData={setselectedData} data={data}/>
            }
            {
              !!selectedData && <Personal resetState={resetState} data={data}/>
            }
            </div>
          } 
          </>
      }

    </div>
  );
}

export default App;
