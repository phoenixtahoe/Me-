import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';


export default class cal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			calendar: null
		};

		this.getCalendar = this.getCalendar.bind(this);
	}

	componentDidMount() {
		this.getCalendar();
	}

	getCalendar() {
		fetch(`https://moli.rocks:774/graph/phoenixtahoe`)
			.then((res) => res.text())
			.then((calendar) => {
				this.setState({
					calendar
				});
			});
	}
    render(){
        return(  
            <div ref={d=>this.cal=d} dangerouslySetInnerHTML={{ __html: this.state.calendar }} />
        )
    }

}