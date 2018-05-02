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
	render() {
		return (
            <div>
                <form>
                    <fieldset>
                        <legend>Fyll i information här!</legend>
                            <div className="RegisterTitel">
                                <input type="text" name="title" placeholder="Fyll i titel" required/>
                            </div>

                            <div className="RegisterDescription">
                                <input type="text" name="description" placeholder="Beskriv ditt projekt!" required/>
                            </div>

                            <div className="RegisterDate">
                                Välj datum nedan
                                <select>
                                    <option value="Date_1">2018-04-18</option>
                                    <option value="Date_2">2018-04-20</option>
                                    <option value="Date_3">2018-05-24</option>
                                </select>
                            </div>

                            <div className="RegisterEvent">
                                Välj event!
                                <select>
                                    <option value="Event_1">IA-dagen</option>
                                    <option value="Event_2">Kåren informerar</option>
                                    <option value="Event_3">Sopplunch</option>
                                    <option value="Event_4">Mäklarmässa</option>
                                </select>
                            </div>

            
                            <div className="RegisterUploadFiles">
                                <section>
                                    <div className="dropzone">
                                      <Dropzone
                                        accept="image/jpeg, image/png"
                                        onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
                                      >
                                        <p>Klicka här för att ladda upp bilder!</p>
                                        <p>Endast bilder i formatet *.jpeg och *.png accepteras. </p>
                                      </Dropzone>
                                    </div>
                                    <aside>
                                      <h2>Filer som laddas upp:</h2>
                                      <ul>
                                        {
                                          this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                        }
                                      </ul>
                                      <h2>Filer som inte kommer att laddas upp:</h2>
                                      <ul>
                                        {
                                          this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                        }
                                      </ul>
                                    </aside>
                                </section>
                            </div>

                            <div className="RegisterSubmit">
                                <input type="button" value="Skicka!" onclick="alert('Tack! Vi har nu mottagit din anmälan.')"/>
                            </div>
                    </fieldset>
                </form>
            </div>
        )
	};
}


export default RegisterCard;
