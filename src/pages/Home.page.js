import React from 'react';
import CompanyData from '../containers/companyData/CompanyData.container';
import FeedBackForm from '../containers/feedBackForm/FeedBackForm.container';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function HomePage() {
  return (
    <Container>
      <Row>
        <Col sm={5} md={4} lg={4}>
          <CompanyData />
        </Col>
        <Col sm={7} md={8} lg={8}>
          <FeedBackForm />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
