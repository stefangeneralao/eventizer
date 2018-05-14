import React from 'react';
import axios from 'axios';

// A form for exhibitators.
class RegisterCard extends React.Component {
	constructor() {
		super()
		this.state = {
			selectedDate: null,
			titleField: "",
			descField: "",
			date: null,
			event: null,
			selectedFile: null
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	dateDropDownChangeHandler(event) {
		this.setState({selectedDate: event.target.value});
	}

	componentDidMount() {
		this.setState({selectedDate: this.refs.dateDropDown.value});
	}

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
				onChange={(e) => {this.dateDropDownChangeHandler(e)}}
				ref="dateDropDown" required>
				<option value=""></option>
				{dateDropDownOptions}
			</select>
		);
	}

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
				<option key={i} value={event}>{event}</option>
			);
		});

		return (
			<select
				name="event" required>
				<option value=""></option>
				{eventDropDownOptions}
			</select>
		);
	}


	handleSubmit(event){
        /* When the information is sent to the server ("http://localhost:3001/exhibitor_form_request") it contains fd (formdata), an object which contains all of the information in the form. Config enables that the exhibitor can upload files (img:s) and then logs "It worked"*/

		event.preventDefault();
		console.log(event.target.titleField.value);
        console.log(event.target.descField.value);
        console.log(event.target.date.value);
        console.log(event.target.event.value);
        console.log(event.target.fileUpload.files[0]);

        var fd = new FormData();
        fd.append("title", event.target.titleField.value);
        fd.append("description", event.target.descField.value);
        fd.append("date", event.target.date.value);
        fd.append("event", event.target.event.value);
        fd.append("selectedFile", event.target.fileUpload.files[0]);

        const config = { headers: { 'Content-Type': 'multipart/form-data' } };

        var formElement = event.target;
        var componentThis = this;

        axios.post("http://localhost:3001/exhibitor_form_request", fd , config).then(function() {
            console.log("It wo();rked!");
            alert("Tack! Vi har nu mottagit din information.");
            /*When the information is submitted, the formElement resets, and the states gets the value "" and null (setState). formElement and componentThis is because this.blablalba refers back to axios.*/
            formElement.reset();
            componentThis.setState({
                selectedDate: null,
                titleField: "",
                descField: "",
                date: null,
                event: null,
                selectedFile: null
            });
        });
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

	render() {
        console.log("Rerender");
		console.log(this.state);
		return (
			<form onSubmit={this.handleSubmit}>
				<div className= "FormWrapper">
					<h2>Registrera en utställning</h2>

					<fieldgroup className="RegisterTitel">
						<input
							type="text"
							name="titleField"
							placeholder="Titel"
							required="required"
							onChange={
								event => {
									this.setState({"titleField": event.target.value})
								}
							}
						/>
					</fieldgroup>

					<div className="RegisterDescription">
						<fieldgroup>
							<textarea cols="50" rows="8"
								name="descField"
								placeholder="Beskriv din utställning" required="required"
								onChange={
									event => {
										this.setState({"descField": event.target.value})
									}
								}
							></textarea>
						</fieldgroup>
					</div>

					<fieldgroup className="RegisterDate">
						<label className="RegisterFormLabel">Välj datum nedan:</label>
						<div>
							{this.getDateDropDown()}
						</div>
					</fieldgroup>

					<fieldgroup className="RegisterEvent">
						<label className="RegisterFormLabel">Välj event:</label>
						<div>
							{this.getEventDropDown()}
						</div>
					</fieldgroup>

					<div className="RegisterUploadFiles">
						<section>
							<label className="RegisterFormLabel">Lägg till en omslagsbild:</label>
							<div>
              	<input type="file" name="fileUpload" required="required" onChange={this.fileSelectedHandler}/>
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
