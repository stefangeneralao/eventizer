import React from 'react';

class RegisterCard extends React.Component {
	render() {
		return (
            <div>
                <form>
                    <fieldset>
                        <legend>Fyll i information här!</legend>
                            <p>
                                Titel:
                                <input type="text" name="title" />
                            </p>
                            <p>
                                Beskrivning:
                                <input type="text" name="description" />
                            </p>
                            <p>
                                Bifoga filer:
                                <input type="text" name="upload" />
                            </p>
            
                            <p>
                                <input type="submit" value="Skicka!" />
                            </p>
                            
            //Dropdown - event
                    </fieldset>
                </form>
            </div>
        ) 
	};
}

export default RegisterCard;