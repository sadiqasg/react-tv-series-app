import React, {Component} from 'react';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            .then(json => this.setState({ show: json }))
    }

    render() {
        const { show } = this.state;
        return (
            <div>
                {show === null && <Loader />}
                {
                    show !== null
                    &&
                    <div>
                        <p>
                            <Link to={'/'} className="Home-link">
                            Return Home
                            </Link>
                        </p>
                        <p>
                            <img
                                alt="Show banner"
                                src={show.image.medium}
                            />
                        </p>
                        <h3>{show.name}</h3>
                        <hr width="50" />
                        <p>Premiered - {show.premiered}</p>
                        <p>Language - {show.language}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show._embedded.episodes.length}</p>
                        <p>Status - {show.status}</p>
                    </div>
                }
            </div>
        )
    }
}

export default SingleSeries;