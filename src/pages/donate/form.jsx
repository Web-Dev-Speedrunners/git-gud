import React from 'react';
import { Button, Form, Col, Row, InputGroup, } from 'react-bootstrap';
import range from '../../util/range'

const CURR_YEAR = new Date().getFullYear();

const DonateForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit")
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
  
      <Row>
        <Form.Group as={Col}>
          <Form.Label>First Name</Form.Label>
          <Form.Control size="sm" type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Last Name" />
        </Form.Group>
      </Row>

      <Form.Group className="mt-3">
        <Form.Label>Email</Form.Label>
        <Form.Control size="sm" type="email" placeholder="example@test.com" />
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Donation Amount</Form.Label>

        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control type="number" aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

      </Form.Group>

      <Form.Group>
        <Form.Check.Label>Donation Frequency</Form.Check.Label>
        <Form.Check 
          defaultChecked
          type="radio"
          id="radioOne"
          label="One-time"
          name="formFrequency"
        />
        <Form.Check 
          type="radio"
          id="radioSemi"
          label="Semi-Annually"
          name="formFrequency"
        />
      </Form.Group>

      <Row className="mt-3">
        <Form.Group as={Col}>
          <Form.Label>Credit Card</Form.Label>
          <Form.Control size="sm" type="number" placeholder="Credit Card Number" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Security Code</Form.Label>
          <Form.Control size="sm" type="number" placeholder="123" />
        </Form.Group>        
      </Row>


      {/* TODO: Get these two rows on the same row */}
      <Form.Group className="mt-3">
        <Form.Label>Expiration Date</Form.Label>
        <Form.Row>
          <Form.Control
            size="sm"
            as="select"
            className="my-1 mr-sm-2"
            custom
          >
            {
              range(1, 12, 1).map((item, i) => 
                <option key={item} value={item}>{item.toString().length < 2? "0" + item.toString(): item.toString()}</option>
              )
            }
          </Form.Control>

          <Form.Control
            size="sm"
            as="select"
            className="my-1 mr-sm-2"
            custom
          >
            {
              range(CURR_YEAR, CURR_YEAR + 6, 1).map((year, i) => 
                <option key={year} value={year}>{year.toString()}</option>
              )
            }

          </Form.Control>
        </Form.Row>
      </Form.Group>
      
      <Button className="mt-3" variant="success" type="submit" >
        Donate
      </Button>
    </Form>
  );
}

export default DonateForm