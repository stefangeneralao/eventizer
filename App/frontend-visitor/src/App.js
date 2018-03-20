import React, {Component} from 'react'
import logo from './images/mau-logo.png'
import './App.css'

class ProjectCard extends Component {
  render() {
		let title = this.props.title || "Ingen titel"
		let description = this.props.description || "Ingen beskrivning"

    return (
			<div className="ProjectCard">
	      <h3>{title}</h3>
	      <p>{description}</p>
				<img
					src="https://www.sydsvenskan.se/images/NfjgUZvTfUWT51yWQTk2gR8eUdA.jpg"
					alt={title}
				/>
    	</div>
		)
  }
}

class App extends Component {
  render() {
    return (
			<div className="App">
	      <header className="App-header">
	        <img src={logo} className="App-logo" alt="logo"/>
	        <h1 className="App-title">Eventizer</h1>
	      </header>
	      <main>
	        <div className="Card-wrapper">
		          <ProjectCard
								title="Exempelprojekt 1"
								description="Kort beskrivning om projekt 1"
							/>
		          <ProjectCard
								title="Exempelprojekt 2"
								description="Kort beskrivning om projekt 2"
							/>
		          <ProjectCard title="Exempelprojekt 3"/>
		          <ProjectCard title="Exempelprojekt 4"/>
		          <ProjectCard title="Exempelprojekt 5"/>
							<ProjectCard title="Exempelprojekt 6"/>
							<ProjectCard title="Exempelprojekt 7"/>
							<ProjectCard title="Exempelprojekt 8"/>
							<ProjectCard />
		          <ProjectCard />
		          <ProjectCard />
		          <ProjectCard />
	        </div>
	      </main>
    	</div>
		)
  }
}

export default App
