import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/UI/Input/Input';

class Contact extends Component {
  state = {
    personalData: {
        inputs: {
            name: {
              elementType: "input",
              elementConfig: {
                type: "text",
                placeholder: "Imię"
              },
              value: "",
              label: "Imię",
              validation: {
                required: true
              },
              valid: false,
              touched: false
            },
            surname: {
              elementType: "input",
              elementConfig: {
                type: "text",
                placeholder: "Nazwisko"
              },
              value: "",
              label: "Nazwisko",
              validation: {
                required: true
              },
              valid: false,
              touched: false
            },
            phoneNumber: {
              elementType: "input",
              elementConfig: {
                type: "number",
                placeholder: "Numer telefonu"
              },
              value: "",
              label: "Numer telefonu",
              validation: {
                required: true,
                minLength: 9,
                maxLength: 9
              },
              valid: false,
              touched: false
            },
            mail: {
              elementType: "input",
              elementConfig: {
                type: "email",
                placeholder: "E-Mail"
              },
              value: "",
              label: "E-Mail",
              validation: {
                required: true
              },
              valid: false,
              touched: false
            }
        },
        personValid: false
    },
    addressData: {
        inputs: {
            street: {
                elementType: "input",
                elementConfig: {
                type: "text",
                placeholder: "Ulica"
                },
                value: "",
                label: "Ulica",
                validation: {
                required: true
                },
                valid: true,
                touched: true
            },
            apartment: {
                elementType: "input",
                elementConfig: {
                type: "text",
                placeholder: "Numer budynku / mieszkanie"
                },
                value: "",
                label: "Numer budynku / mieszkanie",
                validation: {
                required: true
                },
                valid: true,
                touched: true
            },
            city: {
                elementType: "input",
                elementConfig: {
                type: "text",
                placeholder: "Miejscowosc"
                },
                value: "",
                label: "Miejscowosc",
                validation: {
                required: true
                },
                valid: true,
                touched: true
            },
            zipCode: {
                elementType: "input",
                elementConfig: {
                type: "text",
                placeholder: "Kod pocztowy"
                },
                value: "",
                label: "Kod pocztowy",
                validation: {
                required: true,
                minLength: 5,
                maxLength: 5
                },
                valid: true,
                touched: true
            }
        },
        addressValid: false
    },
    formIsValid: false
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  };

  inputPersonalChangedHandler = (event, inputIdentifier) => {
    const updatedPersonalState = {
        ...this.state.personalData
    };

    const updatedPersonalDataFormElement = {
        ...updatedPersonalState.inputs[inputIdentifier]
    };
    updatedPersonalDataFormElement.value = event.target.value;
    updatedPersonalDataFormElement.valid = this.checkValidity(
      updatedPersonalDataFormElement.value,
      updatedPersonalDataFormElement.validation
    );
    updatedPersonalDataFormElement.touched = true;
    updatedPersonalState.inputs[inputIdentifier] = updatedPersonalDataFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedPersonalState.inputs) {
      formIsValid = updatedPersonalState.inputs[inputIdentifier].valid && formIsValid;
    }
    updatedPersonalState.personValid = formIsValid;

    this.setState({
      personalData: updatedPersonalState
    });

    if (updatedPersonalState.personValid && this.state.addressData.addressValid) {
        this.setState({
            formIsValid: true
        })
    } else {
        this.setState({
            formIsValid: false
        })
    }
  };

  inputAddressChangedHandler = (event, inputIdentifier) => {
      const updatedAddressState = {
          ...this.state.addressData
      };

      const updatedAddressDataFormElement = {
          ...updatedAddressState.inputs[inputIdentifier]
      };
      updatedAddressDataFormElement.value = event.target.value;
      updatedAddressDataFormElement.valid = this.checkValidity(
          updatedAddressDataFormElement.value,
          updatedAddressDataFormElement.validation
      );
      updatedAddressDataFormElement.touched = true;
      updatedAddressState.inputs[inputIdentifier] = updatedAddressDataFormElement;

      let formIsValid = true;
      for (let inputIdentifier in updatedAddressState.inputs) {
          formIsValid = updatedAddressState.inputs[inputIdentifier].valid && formIsValid;
      }
      updatedAddressState.addressValid = formIsValid;

      this.setState({
          addressData: updatedAddressState
      });
      if (updatedAddressState.addressValid && this.state.personalData.personValid) {
        this.setState({
            formIsValid: true
        })
      } else {
          this.setState({
              formIsValid: false
          })
      }
  };

  render() {
    const column = {
      display: "flex",
      flexDirection: "column"
    };

    const style = {
      display: "flex",
      justifyContent: "space-around"
    };

    const contactElementsArray = [];
    const addressElementsArray = [];

    for (let key in this.state.personalData.inputs) {
      contactElementsArray.push({
        id: key,
        config: this.state.personalData.inputs[key]
      });
    }

    for (let key in this.state.addressData.inputs) {
      addressElementsArray.push({
        id: key,
        config: this.state.addressData.inputs[key]
      });
    }

    let contactInput = contactElementsArray.map(el => {
      return (
        <Input
          key={el.id}
          elementType={el.config.elementType}
          elementConfig={el.config.elementConfig}
          label={el.config.label}
          invalid={!el.config.valid}
          shouldValidate={el.config.validation}
          touched={el.config.touched}
          changed={event => this.inputPersonalChangedHandler(event, el.id)}
        />
      );
    });

    let addressInput = addressElementsArray.map(el => {
      return (
        <Input
          key={el.id}
          elementType={el.config.elementType}
          elementConfig={el.config.elementConfig}
          label={el.config.label}
          invalid={!el.config.valid}
          shouldValidate={el.config.validation}
          touched={el.config.touched}
          changed={event => this.inputAddressChangedHandler(event, el.id)}
        />
      );
    });

    return (
      <div style={column}>
        <form style={style}>
          <div style={column}>{contactInput}</div>
          <div style={column}>{addressInput}</div>
        </form>
        <div style={style}>
          <button type="button">
            <Link to="/basket">Cofnij</Link>
          </button>
          <button type="button" disabled={!this.state.formIsValid}>
            Zamawiam i place
          </button>
        </div>
      </div>
    );
  }
}

export default Contact;