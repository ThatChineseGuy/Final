import "./Loading.css"
import 'bootstrap/dist/css/bootstrap.css';

const Loading = () =>{
    return (
        <div className="vh-100 bg-danger text-white">
            <h1>Loading</h1>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loading;