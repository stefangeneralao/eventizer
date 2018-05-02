import React from 'react';
import Dropzone from 'react-dropzone'

// A form for exhibitators.
class RegisterCard extends React.Component {
	constructor() {
		super()
		this.state = {
			accepted: [],
			rejected: [],
			selectedDate: null
		}
	}

	dateDropDownChangeHandler(event) {
		this.setState({selectedDate: event.target.value});
	}

	componentDidMount() {
		this.setState({selectedDate: this.refs.dateDropDown.value});
	}

	getDateDropDown() {
		const dateDropDownOptions = this.props.store.dates.map((date, i) => {
			return (<option key={i} value={date.date}>{date.date}</option>);
		});

		return (
			<select
				name="date"
				onChange={(e) => {this.dateDropDownChangeHandler(e)}}
				ref="dateDropDown"
			>
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
<<<<<<< HEAD
			<select name="event">
				{eventDropDownOptions}
			</select>
		);
	}

	render() {
		return (<div>
			<form action="http://localhost:3001/exhibitor_form_request" method="GET">
				<fieldset>
					<h2>Fyll i information här!</h2>
					<fieldgroup className="RegisterTitel">
						<input type="text" name="title" placeholder="Fyll i titel" required="required"/>
					</fieldgroup>

					<fieldgroup className="RegisterDescription">
						<input type="textarea" name="description" placeholder="Beskriv ditt projekt!" required="required"/>
					</fieldgroup>

					<fieldgroup className="RegisterDate">
						<p>Välj datum nedan:</p>
						{this.getDateDropDown()}
					</fieldgroup>
=======
            <div>
                <form>
                    <fieldset>
                        <h2>Fyll i information här!</h2>
                            <fieldGroup className="RegisterTitel">
                                <input type="text" name="title" placeholder="Fyll i titel" required/>
                            </fieldGroup>

                            <fieldGroup className="RegisterDescription">
                                <input type="textarea" name="description" placeholder="Beskriv ditt projekt!" required/>
                            </fieldGroup>

                            <fieldGroup className="RegisterDate">
                                <p>Välj datum nedan:</p>
								{this.getDateDropDown()}
                            </fieldGroup>

                            <fieldGroup className="RegisterEvent">
                                <p>Välj event:</p>
                                {this.getEventDropDown()}
                            </fieldGroup>
>>>>>>> 9e5da2e292aa32c00d9e9e81193424d280068388

					<fieldgroup className="RegisterEvent">
						<p>Välj event:</p>
						{this.getEventDropDown()}
					</fieldgroup>

					<div className="RegisterUploadFiles">
						<section>
							<div className="dropzone">
								<Dropzone accept="image/jpeg, image/png" onDrop={(accepted, rejected) => {
										this.setState({accepted, rejected});
									}}>
									<p>Klicka här för att ladda upp bilder!</p>
									<p>Endast bilder i formatet *.jpeg och *.png accepteras.
									</p>
								</Dropzone>
							</div>
							<aside>
								<h3>Filer som laddas upp:</h3>
								<ul>
									{
										this.state.accepted.map(f => <li key={f.name}>{f.name}
											- {f.size}
											bytes</li>)
									}
								</ul>
								<h3>Filer som inte kommer att laddas upp:</h3>
								<ul>
									{
										this.state.rejected.map(f => <li key={f.name}>{f.name}
											- {f.size}
											bytes</li>)
									}
								</ul>
							</aside>
						</section>
					</div>

<<<<<<< HEAD
					<div className="RegisterSubmit">
						<input type="submit" value="Skicka!" />
					</div>
				</fieldset>
			</form>
		</div>)
=======
                            <div className="RegisterSubmit">
                                <input type="button" value="Skicka!" onClick="alert('Tack! Vi har nu mottagit din registrering.')"/>
                            </div>
                    </fieldset>
                </form>
            </div>
        )
>>>>>>> 9e5da2e292aa32c00d9e9e81193424d280068388
	};
}

export default RegisterCard;
