import React from 'react';

// A form for exhibitators.
class RegisterCard extends React.Component {
	constructor() {
		super()
		this.state = {
			//accepted: [],
			//rejected: [],
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
                </option>);
		});

		return (
			<select
				name="date"
				onChange={(e) => {this.dateDropDownChangeHandler(e)}}
				ref="dateDropDown" required>
                <option value="">
                </option>
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
                <option value="">
                </option>
				{eventDropDownOptions}
			</select>
		);
	}

	handleSubmit(event) {
        
        
		event.preventDefault();
		console.log(event.target.titleField.value);
        console.log(event.target.descField.value);
        console.log(event.target.date.value);
        console.log(event.target.event.value);
        
		//method="POST"
        //action="http://localhost:3001/exhibitor_form_request"
	}
    
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    
	render() {
		console.log(this.state);
		return (
			<form onSubmit={this.handleSubmit}>
				<div className= "FormWrapper">
					<h2>Fyll i information här!</h2>
            
					<fieldgroup className="RegisterTitel">
						<input type="text" name="titleField" placeholder="Fyll i titel" required="required" onChange={ event => {
                            this.setState({
                                "titleField": event.target.value
                            })
                        }}/>
					</fieldgroup>

					<fieldgroup className="RegisterDescription">
						<input type="textarea" name="descField" placeholder="Beskriv ditt projekt!" required="required" onChange={ event => {
                            this.setState({
                                "descField": event.target.value
                            })
                        }}/>
					</fieldgroup>

					<fieldgroup className="RegisterDate">
						<p>Välj datum nedan:
                        </p>
						{this.getDateDropDown()}
					</fieldgroup>

					<fieldgroup className="RegisterEvent">
						<p>Välj event:
                        </p>
						{this.getEventDropDown()}
					</fieldgroup>

					<div className="RegisterUploadFiles">
						<section>
                            <input type="file" name="fileUpload" required="required" onChange={this.fileSelectedHandler}/> 
                        </section>
                    </div>
                        {/*
                        <div className="dropzone">
								<Dropzone name="dropzone" accept="image/jpeg, image/png" onDrop={(accepted, rejected) => {
				                    this.setState({accepted, rejected})
                                    }}>
                                        
									<p>Klicka här för att ladda upp bilder!
                                    </p>
									<p>Endast bilder i formatet *.jpeg och *.png accepteras.
									</p>
								</Dropzone>
                        </div>
							<aside>
								<h4>Filer som laddas upp:</h4>
								    <ul>
									{
										this.state.accepted.map(f => <li key={f.name}>{f.name}
											- {f.size}
								        bytes</li>)
									}
								    </ul>
								<h4>Filer som inte kommer att laddas upp:</h4>
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
                       */}

                    <div className="RegisterSubmit">
						<input type="submit" value="Skicka!" />
					</div>
                </div>
			</form>
		)
	};
}

export default RegisterCard;
