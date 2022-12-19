import { Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./Personal.css"

const Personal = (props ) =>{
    return (
        <div className="cardbg">
            <Card className="border shadow" style={{width:'400px',height:'400px', margin:'20px'}}>
                <Card.Body>
                    <Card.Subtitle>ID:{props.data.id}</Card.Subtitle> 
                    <Card.Img variant="top" className="mx-auto" src={props.data.photo} style={{width:'100px',height:'100px', marginTop:'30px'}}></Card.Img>
                    <Card.Title className="m-3">{props.data.name}</Card.Title>
                    <Card.Subtitle  className="m-3" >{props.data.startDate}</Card.Subtitle>
                    <Card.Text  className="m-3" >Role: {props.data.role} from {props.data.department} department</Card.Text>
                    <Button onClick={props.resetState}>Back to List</Button>
                </Card.Body>
            </Card>
        </div>
           /*
                {props.data.startDate} <br/>
                {props.data.id} -- {props.data.name} <br/>
                {props.data.role}, {props.data.department} <br/>
                <img src={props.data.photo} alt="from api"></img> <br/>
                <button onClick={props.resetState}>Back to List</button>
            */
    );
}

export default Personal;