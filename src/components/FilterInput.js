import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filter';

export class FilterInput extends React.Component {
    
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    };

    render() {
        return (
            <div className="header__input">
                <input 
                    type="text"
                    className="text-input" 
                    placeholder="Search movies..."
                    onChange={ this.onTextChange }
                >
                </input>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterInput);




