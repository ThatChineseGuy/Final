import { Button, Card } from "react-bootstrap";

const Personal = (props ) =>{
    return (

        <Card>
            <Card.Img variant="top" src={props.data.photo} style={{width:'100px',height:'100px'}}></Card.Img>
            <Card.Body>
                <Card.Title>{props.data.name}</Card.Title>
                <Card.Subtitle>ID:{props.data.id} -- {props.data.startDate}</Card.Subtitle>
                <Card.Text>Role: {props.data.role} from {props.data.department} department</Card.Text>
                <Button onClick={props.resetState}>Back to List</Button>
            </Card.Body>
        </Card>
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