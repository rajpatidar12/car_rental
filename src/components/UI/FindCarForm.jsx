import React, { useState } from "react";
import { Form, FormGroup } from "reactstrap";
import "../../styles/find-car-form.css";

const FindCarForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fromAddress: "",
    toAddress: "",
    journeyDate: "",
    journeyTime: "",
    carType: "ac",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    // Add your logic here, e.g., sending data to a backend or navigating to another page
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            name="fromAddress"
            placeholder="From Address"
            required
            value={formData.fromAddress}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            name="toAddress"
            placeholder="To Address"
            required
            value={formData.toAddress}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            name="journeyDate"
            required
            value={formData.journeyDate}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="time"
            name="journeyTime"
            placeholder="Journey Time"
            value={formData.journeyTime}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select
            name="carType"
            value={formData.carType}
            onChange={handleChange}
          >
            <option value="ac">AC Car</option>
            <option value="non-ac">Non-AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button type="submit" className="btn find__car-btn">
            Find Car
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
