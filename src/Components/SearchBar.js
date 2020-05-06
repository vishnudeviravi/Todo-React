import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {input: null}
    }

    onInputChange = (e) => {
        this.setState({input: e.target.value});
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.input);
    }

    render () {
        return (
            <form onSubmit onSubmit= {this.onFormSubmit}>
            <input type="text" onChange ={this.onInputChange}/>
            </form>
        )
    }
}

export default SearchBar;