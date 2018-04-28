import React from 'react';

// A form for exhibitators.  
class RegisterCard extends React.Component {
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
                                Det vore snyggare med en kalender eller annan lösnig här. Undersöker det!
                            </div>
            
                            <div className="RegisterEvent">
                                Välj event!
                                <select>
                                    <option value="Event_1">IA-dagen</option>
                                    <option value="Event_2">Kåren informerar</option>
                                    <option value="Event_3">Sopplunch</option>
                                    <option value="Event_4">Mäklarmässa</option>
                                </select>
                                Bättre lösning kommer. Undersöker möjligheter.
                            </div>
            
                            <div className="RegisterUploadFiles">
                                här ska vi ha react-dropzone istället. I will fix!
                                <input type="file" name="upload" /> 
                            </div>
            
                            <div className="RegisterSubmit">
                                <input type="button" value="Skicka!" onclick="alert('Din information är skickad!')"/>
                            </div>
                            
                            <div>
                                <i>
                                    Du kommer att få ett bekräftelsemeddelande när informationen är godkänd och publicerad.
                                </i>
                            </div>
                    </fieldset>
                </form>
            </div>
        ) 
	};
}

export default RegisterCard;