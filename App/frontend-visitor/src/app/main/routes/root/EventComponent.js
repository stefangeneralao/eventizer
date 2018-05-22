import React from 'react';
import { Link } from 'react-router-dom';
import arrow from './icons/arrow.svg';

// Component that renders EventCards with links to events
class EventComponent extends React.Component {
	constructor() {
		super();

		this.state = { descriptionOpen: false };
}

	getTitle() {
		return (
			<div className="EventComponent__event-label">
				{this.props.title}
			</div>
		);
	}

	getLocation() {
		return (
			<div className="EventComponent__event-location">
				{this.props.location}
			</div>
		);
	}

	getTime() {
		let className = 'EventComponent__event-time';
		className += this.state.descriptionOpen ? '' : ' hidden';

		return (
			<div className={className}>
				{this.props.time}
			</div>
		);
	}

	getDescription() {
		let className = 'EventComponent__event-description';
		className += this.state.descriptionOpen ? '' : ' hidden';

		return (
			<div className={className}>
				{this.props.description}
			</div>
		);
	}

	getLink() {
		if (this.props.exhibitors && this.props.exhibitors.length === 1){
			return '/exhibitor/' + this.props.exhibitors[0].exhibitionID;
		} else {
			return '/event/' + this.props.title;
		}
	}

	onMoreBtnClick() {
		this.setState({ descriptionOpen: !this.state.descriptionOpen });
	}

	getMoreBtn() {
		let className = 'EventComponent__moreBtn';
		className += this.state.descriptionOpen ? ' open' : ' closed';

		return (
				<img
					src={arrow}
					alt="show more"
					className={className}
					onClick={() => {this.onMoreBtnClick()}}
				/>
		);
	}

	render() {
		const title = this.getTitle();
		const location = this.getLocation();
		const time = this.getTime();
		const description = this.getDescription();
		const onClickLink = this.getLink();
		const moreBtn = this.getMoreBtn();

		return (
			<div className="EventComponent">
				<Link to={onClickLink}>
					{title}
				</Link>

				<div>
					{location}
				</div>

				<div>
					{moreBtn}
				</div>

				<div>
					{description}
				</div>

				<div>
					{time}
				</div>

			</div>
		);
	}
}
export default EventComponent;
