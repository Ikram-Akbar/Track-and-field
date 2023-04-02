import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';


const SingleCategories = (props) => {
    const { name, age, description, picture, time } = props.data;
    return (
        <div >
            <Card className='text-start p-2 ' >
                <Card.Img className='img-custom-size' style={{ height: "100px" }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title> <span className="badge bg-danger">{name} </span></Card.Title>
                    <Card.Text >{description.slice(0, 60)}</Card.Text>
                    <ListGroup.Item className='fw-semibold' >For Age : <span className="badge bg-secondary  rounded-pill">{age} </span> years </ListGroup.Item>
                    <ListGroup.Item className='fw-semibold' >Time require : <span className="badge  rounded-pill bg-secondary"> {time} </span> seconds </ListGroup.Item>
                    <Button className='mt-2' variant="outline-secondary">Add to list</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default SingleCategories;