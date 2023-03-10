import "./Data.css"
import 'bootstrap/dist/css/bootstrap.css';

const Data = (props) =>{
    
    const updateInfo = (infoid) =>{
        props.setselectedData(infoid)
    }

    return (
        <div className="filler">
           <h1>List of Employees</h1>   
           {
            props.data.map(info => {
                return <p className="mt-5" key={info.id}  
                    onClick={() => {updateInfo(info.id) }} role="button" style={{cursor:"pointer"}}>
                    ID: {info.id} -- {info.name} in {info.department}   
                    </p>;
            })
           }
        </div>
    );
}

export default Data;