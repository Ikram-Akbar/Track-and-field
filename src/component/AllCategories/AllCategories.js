import React, { useEffect, useState } from 'react';
import Header from '../Common/Header';
import { Container, Col, Row } from 'react-bootstrap';
import SingleCategories from '../SingleCategories/SingleCategories';

const AllCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("fakeDb.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col><Header /></Col>
                </Row>

                <Row>
                    <Col lg={8} sm={6} xl={9}>
                        <Container fluid className='my-5'>
                            <Row>

                                {
                                    categories.map(data => <Col xl={4} className='gy-3'><SingleCategories key={data._id} data={data} /></Col>)
                                }

                            </Row>
                        </Container>
                    </Col>
                    <Col lg={4} sm={6} xl={3} className='bg-secondary'>
                        <h1>another colum for details</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AllCategories;