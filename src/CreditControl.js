import React from 'react'
import CreditBox from './CreditBox';
import CreditCard from './CreditCard';
import './CreditControl.css';
class CreditControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expMonth: "1",
            expYear: "2024",
            cvv: "",
            cardNumber: "",
            cardName: "",
        };
    }

    handleCardNumber(e) {
        const val = e.target.value;
        if (!isNaN(val) && val.length <= 16) {
            this.setState({
                cardNumber: val,
            });
        }
    }

    handleCardName(e) {
        const val = e.target.value;
        if (val.length <= 50) {
            this.setState({
                cardName: val,
            });
        }

    }

    handleExpMonth(e) {
        this.setState({
            expMonth: e.target.value
        });
    }

    handleExpYear(e) {
        this.setState({
            expYear: e.target.value
        });
    }

    handleCvv(e) {
        const val = e.target.value;
        if (!isNaN(val) && val.length <= 3) {
            this.setState({
                cvv: val,
            });
        }
    }

    handleSubmit() {
        const cName =  this.state.cardName;
        const cNum = this.state.cardNumber;
        const expMonth = this.state.expMonth;
        const expYear = this.state.expYear;
        const cvv = this.state.cvv;
        const month = new Date().getMonth();
        const year = new Date().getFullYear();
        const stateMonth = parseInt(expMonth, 10);
        const stateYear = parseInt(expYear, 10);
        const cardExpired = stateYear < year || (stateYear === year && stateMonth <= month);
        if (
            cNum.length != 16 ||
            cvv.length != 3 ||
            cName.length < 3 ||
            cardExpired
            ) {
            return;
        }
        const payload = {
            "cardName": this.state.cardName,
            "cardNumber": this.state.cardNumber,
            "expMonth": this.state.expMonth,
            "expYear": this.state.expYear,
            "cvv": this.state.cvv,
        }
        console.log("state: " + JSON.stringify(this.state));
        console.log("payload: " + JSON.stringify(payload));
    }

    // renderCreditBox() {
    //     return (
    //     );
    // }

    render() {
        return (
            <div className="control">
                <CreditCard 
                    cardNumber={this.state.cardNumber} 
                    cardName={this.state.cardName} 
                    expMonth={this.state.expMonth}
                    expYear={this.state.expYear}
                />
                <CreditBox 
                    cardNumber={this.state.cardNumber} 
                    cardName={this.state.cardName} 
                    expMonth={this.state.expMonth}
                    expYear={this.state.expYear}
                    cvv={this.state.cvv}
                    handleCardNumber={(e) => this.handleCardNumber(e)}
                    handleCardName={(e) => this.handleCardName(e)}
                    handleExpMonth={(e) => this.handleExpMonth(e)}
                    handleExpYear={(e) => this.handleExpYear(e)}
                    handleCvv={(e) => this.handleCvv(e)}
                    handleSubmit={() => this.handleSubmit()}
                />
            </div>
        );
    }
}

export default CreditControl