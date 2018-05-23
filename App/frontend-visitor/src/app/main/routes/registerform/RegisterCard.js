import React from 'react';
import axios from 'axios';

// A form for exhibitators.
class RegisterCard extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedDate: null,
      titleField: '',
      descField: '',
      date: null,
      event: null,
      selectedFile: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Fetches events for a chosen date
  dateDropDownChangeHandler(event) {
    this.setState({ selectedDate: event.target.value });
  }

  componentDidMount() {
    this.setState({ selectedDate: this.refs.dateDropDown.value });
  }

  // A function that returns a drop-down with dates from the database-driver.
  getDateDropDown() {
    const dateDropDownOptions = this.props.store.dates.map((date, i) => {
      return (
        <option
          key={i}
          value={date.date}>
          {date.date}
        </option>
      );
    });

    return (
      <select
        name="date"
        onChange={(e) =>
          {this.dateDropDownChangeHandler(e)}
        }
        ref="dateDropDown"
        required
      >
        <option value="" />
        {dateDropDownOptions}
      </select>
    );
  }

  // A function that returns a  drop-down with events based on the choosed date before, from the database-driver.
  getEventDropDown() {
    const events = [];
    this.props.store.dates.forEach(date => {
      if(date.date === this.state.selectedDate) {
        date.events.forEach(event => {
          events.push(event.label);
        });
      }
    });

    const eventDropDownOptions = events.map((event, i) => {
      return (
        <option
          key={i}
          value={event}
        >
          {event}
        </option>
      );
    });

    return (
      <select name="event" required>
        <option value="" />
        {eventDropDownOptions}
      </select>
    );
  }


/* Handles the input-data and makes in to an object fd (formdata), which contains all of the
information in the form and is sent to the server ("http://localhost:3001/exhibitor_form_request")
handleSubmit(event). Config enables that the exhibitor can upload files (img:s) */

handleSubmit(event){
    event.preventDefault();
    var fd = new FormData();
    fd.append('title', event.target.titleField.value);
    fd.append('description', event.target.descField.value);
    fd.append('date', event.target.date.value);
    fd.append('event', event.target.event.value);
    fd.append('selectedFile', event.target.fileUpload.files[0]);

    const config = { headers: { 'Content-Type': 'multipart/form-data' } };

    var formElement = event.target;
    var componentThis = this;

    /*When the information is submitted, the formElement resets,
    and the states gets the value "" and null (setState).
    FormElement and componentThis is because
    this.blablalba refers back to axios.*/
    axios.post('http://35.176.156.147:3001/exhibitor_form_request', fd , config)
      .then(function() {
        alert('Tack för din registrering! Ert projekt granskas just nu och kommer finnas tillgängligt på sidan på utställningsdagen.');
        formElement.reset();
        componentThis.setState({
          selectedDate: null,
          titleField: '',
          descField: '',
          date: null,
          event: null,
          selectedFile: null,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // Identifies filename the attatched file the exhibitor upload.
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className= "FormWrapper">
          <h2>Registrera en utställning</h2>

          <div className="RegisterTitel">
            <input
              type="text"
              name="titleField"
              placeholder="Projektnamn"
              required="required"
              onChange={event => {
                this.setState({"titleField": event.target.value})
              }}
            />
          </div>

          <div className="RegisterDescription">
            <textarea
              cols="50" rows="8"
              name="descField"
              placeholder="Beskriv kortfattat din utställning"
              required="required"
              onChange={
                event => {
                  this.setState({"descField": event.target.value})
                }
              }>
            </textarea>
          </div>

          <div className="RegisterDate">
            <label
              className="RegisterFormLabel">
              Välj datum för event nedan:
            </label>
            <div>
              {this.getDateDropDown()}
            </div>
          </div>

          <div className="RegisterEvent">
            <label
              className="RegisterFormLabel">
              Välj event:
            </label>
            <div>
              {this.getEventDropDown()}
            </div>
          </div>

          <div className="RegisterUploadFiles">
            <section>
              <label
                className="RegisterFormLabel">
                Lägg till en bild:
              </label>
              <div>
                <input
                  type="file"
                  name="fileUpload"
                  required="required"
                  accept=".jpg, .jpeg, .png"
                  onChange={this.fileSelectedHandler}
                />
              </div>
            </section>
          </div>

          <div className="RegisterSubmit">
            <button>Skicka!</button>
          </div>
        </div>
      </form>
    )
  };
}

export default RegisterCard;
