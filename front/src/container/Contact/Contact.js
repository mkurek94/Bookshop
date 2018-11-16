import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
    state= {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Imię'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            surname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Nazwisko'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            phoneNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Numer telefonu'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 9,
                    maxLength: 9
                },
                valid: false,
                touched: false
            },
            mail: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Ulica'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            apartment: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Numer budynku/mieszkanie'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Miejscowosc'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Kod pocztowy'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
        }
    }
    render() {
        const column = {
            display: 'flex',
            flexDirection: 'column'
        }

        const style = {
            display: 'flex',
            justifyContent: 'space-around'
        }

        return(
            <div style={column}>
                <form style={style}>
                    <div style={column}>
                        <span>Dane kontaktowe</span>
                        <span>Imię</span>
                        <input type='text' placeholder='name' />
                    </div>
                    <div style={column}>
                        <span>Adres</span>
                        <span>Ulica</span>
                        <input type='text' placeholder='street' />
                    </div>
                </form>
                <div style={style}>
                    <button type='button'><Link to='/basket'>Cofnij</Link></button>
                    <button type='button'>Zamawiam i place</button>
                </div>
            </div>
        );
    }
}

export default Contact;