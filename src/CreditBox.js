import './CreditBox.css'
import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

class CreditBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // expMonth: this.props.expMonth,
            cardNumber: this.props.cardNumber,
            handleCardNumber: this.props.handleCardNumber,
        };
    }

    render() {
        return (
            <div className="formDiv">
                <Form className="formBox">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control className="center" value={this.props.cardNumber} onChange={this.props.handleCardNumber}/>
                    <Form.Label>Card Name</Form.Label>
                    <Form.Control className="center" value={this.props.cardName} onChange={this.props.handleCardName}/>
                    <table >
                        <tbody className="expiration">
                            <tr>
                                <td>
                                    <Form.Label>Expiration Date</Form.Label>
                                </td>
                                <td></td>
                                <td className="cvv">
                                    <Form.Label>CVV</Form.Label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Select value={this.props.expMonth} onChange={this.props.handleExpMonth}>
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>
                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Select value={this.props.expYear} onChange={this.props.handleExpYear}>
                                        {/* TODO: I had to look it up directly, so I won't use it in code
                                            but I would rather define years outside the CreditBox (in CreditControl)
                                            to be the next 10 or 15 years automatically so you don't
                                            have to update your code every year. I would then map them to 
                                            options with a for loop or similar structure.
                                        */}
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                        <option value="2031">2031</option>
                                        <option value="2032">2032</option>
                                    </Form.Select>

                                </td>
                                <td className="cvv">
                                    <Form.Control className="center" value={this.props.cvv} onChange={this.props.handleCvv}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Button className="submitButton" onClick={this.props.handleSubmit}>Submit</Button>
                </Form>
            </div>
        );
    }


}

export default CreditBox