import './CreditCard.css'
import CreditCardPicture from './6.jpeg';
import Chip from './chip.png'
import Visa from './visa.png'
import React from 'react';


class CreditCard extends React.Component {
    constructor(props) {
        super(props);
    }


    starify(number) {
        let stars = "";
        for (let i = 0; i < number.length; i++) {
            stars.concat("*");
        }
        return "*".repeat(number.length);
    }

    formatExpiration(month, year) {
        const lead = parseInt(month,10) < 10 ? "0": "";
        return lead + month + " / " + year.slice(2,4);
    }

    render() {
        return (
            <div className='creditCard'>
                <img className='ccBackground' src={CreditCardPicture}></img>
                <img className='ccChip' src={Chip}></img>
                <img className='ccVisa' src={Visa}></img>
                <div className='ccNumber'>
                    <table>
                        <tbody>
                            <tr className="ccRow">
                                <td>
                                    {this.props.cardNumber.slice(0,4)}     
                                </td>
                                <td>
                                    {this.starify(this.props.cardNumber.slice(4,8))}     
                                </td>
                                <td>
                                    {this.starify(this.props.cardNumber.slice(8,12))}     
                                </td>
                                <td>
                                    {this.props.cardNumber.slice(12,16)}     
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className='ccNameLabel'>
                                    Cardholder Name
                                </div>
                                <div className='ccName'>
                                    {this.props.cardName.toUpperCase().slice(0, 15)}
                                </div>
                            </td>
                            <td>
                                <div className='ccExpLabel'>
                                    Expiration
                                </div>
                                <div className='ccExp'>
                                    {this.formatExpiration(this.props.expMonth, this.props.expYear)}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CreditCard