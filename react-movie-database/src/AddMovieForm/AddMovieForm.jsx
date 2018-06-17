import React from 'react';
import v4 from 'uuid/v4';
import './AddMovieForm.css';

class AddMovieForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: v4(),
            title: '',
            year: '',
            genre: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            id: v4()
        });
        this.props.onFormSubmit(this.state)
    }

    render() {

        return (
            <form className={this.props.isOpen ? 'Form__open' : 'Form__close'} onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" className="Form__input" name="title" placeholder="Title" />
                <input onChange={this.handleChange} type="text" className="Form__input" name="year" placeholder="Year" />
                <input onChange={this.handleChange} type="text" className="Form__input" name="genre" placeholder="Enter genres separated by comma" />
                <input className="Form__submit_btn" type="submit" value="submit" />
                <textarea onChange={this.handleChange} type="text" className="Form__textarea" name="description" placeholder="Description"/>
            </form>
        );
    }
}

export default AddMovieForm;