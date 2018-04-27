import React from 'react';

//KOMMENTAR KOMMER 
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
                                här ska vara en dropdown/ alt snyggt sätt att välja datum
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