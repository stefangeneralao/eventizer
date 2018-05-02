import React from 'react';
import Dropzone from 'react-dropzone'

// A form for exhibitators.
class RegisterCard extends React.Component {
  constructor() {
    super()
    this.state = {
      accepted: [],
      rejected: []
    }
  }

	getDateDropDown() {
		const dateDropDownOptions = this.props.store.dates.map((date, i) => {
			console.log(date.date);
			return (
				<option key={i} value={"Date_" + i}>{date.date}</option>
			);
		});

		return(
			<select>
				{dateDropDownOptions}
			</select>
		);
	}

	render() {
		return (
            <div>
                <form>
                    <fieldset>
                        <h2>Fyll i information här!</h2>
                            <fieldgroup className="RegisterTitel">
                                <input type="text" name="title" placeholder="Fyll i titel" required/>
                            </fieldgroup>

                            <fieldgroup className="RegisterDescription">
                                <input type="textarea" name="description" placeholder="Beskriv ditt projekt!" required/>
                            </fieldgroup>

                            <fieldgroup className="RegisterDate">
                                <p>Välj datum nedan:</p>
																{this.getDateDropDown()}
                            </fieldgroup>

                            <fieldgroup className="RegisterEvent">
                                <p>Välj event:</p>
                                <select>
                                    <option value="Event_1">IA-dagen</option>
                                    <option value="Event_2">Kåren informerar</option>
                                    <option value="Event_3">Sopplunch</option>
                                    <option value="Event_4">Mäklarmässa</option>
                                </select>
                            </fieldgroup>


                            <div className="RegisterUploadFiles">
                                <section>
                                    <div className="dropzone">
                                      <Dropzone
                                        accept="image/jpeg, image/png"
                                        onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}>
                                        <p>Klicka här för att ladda upp bilder!</p>
                                        <p>Endast bilder i formatet *.jpeg och *.png accepteras. </p>
                                      </Dropzone>
                                    </div>
                                    <aside>
                                      <h3>Filer som laddas upp:</h3>
                                      <ul>
                                        {
                                          this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                        }
                                      </ul>
                                      <h3>Filer som inte kommer att laddas upp:</h3>
                                      <ul>
                                        {
                                          this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                        }
                                      </ul>
                                    </aside>
                                </section>
                            </div>

                            <div className="RegisterSubmit">
                                <input type="button" value="Skicka!" onclick="alert('Tack! Vi har nu mottagit din registrering.')"/>
                            </div>
                    </fieldset>
                </form>
            </div>
        )
	};
}


export default RegisterCard;
