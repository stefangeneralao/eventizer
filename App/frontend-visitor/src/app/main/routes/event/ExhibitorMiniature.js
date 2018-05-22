import React from 'react';
import { Link } from 'react-router-dom';

// Component that display exhibitor miniatures
class ExhibitorMiniature extends React.Component {
  render() {
    const onClickLink = '/exhibitor/' + this.props.id;

<<<<<<< HEAD
		return (
			<div className="ExhibitorMiniature">
				<p>
					<Link to={onClickLink}>
						<img
							className="ExhibitorMiniatureImage"
							src={'http://35.176.156.147:3001/get_image?imageurl=' + this.props.image}
							alt={this.props.label}
						/>
					</Link>
				</p>
				<p>
					<Link to={onClickLink}>{this.props.label}</Link>
				</p>
			</div>
		);
	}
=======
    return (
      <div className="ExhibitorMiniature">
        <p>
          <Link to={onClickLink}>
            <img
              className="ExhibitorMiniatureImage"
              src={'http://localhost:3001/get_image?imageurl=' + this.props.image}
              alt={this.props.label}
            />
          </Link>
        </p>
        <p>
          <Link to={onClickLink}>{this.props.label}</Link>
        </p>
      </div>
    );
  }
>>>>>>> 65a0b0d5cdedab0c709bf4f6b33f3f9a2fca8e4f
}

export default ExhibitorMiniature;
