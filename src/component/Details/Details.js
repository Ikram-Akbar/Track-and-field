import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Details = () => {
    const breakTime = [10, 20, 30, 40, 50, 60]
    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Col xl={12} >
                        <h4>Ikram Akbar</h4>
                        <p> <small>Cumilla Bangladesh</small> </p>
                    </Col>
                </Row>
                <Row className='bg-secondary rounded text-white my-2'>
                    <Col xl={4}>
                        <p><strong>Weight</strong></p>
                        <h4>80 KG</h4>
                    </Col>
                    <Col xl={4} >
                        <p><strong>Height</strong></p>
                        <h4>5.10</h4>
                    </Col>
                    <Col xl={4}>
                        <p><strong>Age</strong></p>
                        <h4>25 yrs</h4>
                    </Col>
                </Row>
                <h3>Add a Break</h3>
                <Row className='bg-secondary rounded p-3 my-3'>
                    {
                        breakTime.map(time => <Col xl={2}>
                            <a href='#' className='link-underline-secondary text-white'><strong>{time}s</strong></a>
                        </Col>)
                    }

                </Row>

                
            </Container>
        </>
    );
};

export default Details;