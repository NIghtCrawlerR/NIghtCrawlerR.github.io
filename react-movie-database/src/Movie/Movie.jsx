import React from 'react';
import classNames from 'classnames';
import like from './like.png';
import dislike from './dislike.png';
import './Movie.css';

class Movie extends React.Component {
    constructor(){
        super();
        this.state = {
            isLiked: false,
            isDisliked: false
        }
    }
    clickHandlerLike = () => {
        this.setState({
            isLiked: true,
            isDisliked: false
        })
    }
    clickHandlerDislike = () => {
        this.setState({
            isLiked: false,
            isDisliked: true
        })
    }
    
    delete = () => {
       
        this.props.onDeleteClick(this.props.id)
    }

    render() {
        const {title, year, description, genre} = this.props;
       // const genreItem = genre.map(x => <span key={Math.random()} className={"Movie__genre Movie__genre__"+x}>{x}</span>);
       const genreList = genre.split(',')
       const genreItem = genreList.map(x => <span key={Math.random()} className={"Movie__genre Movie__genre__"+(x.replace(/\s/g, '')).toLowerCase()}>{x}</span>);
     
        
        const postCls = classNames({
            'Movie': true,
            'Movie--liked': this.state.isLiked,
            'Movie--disliked': this.state.isDisliked
        })

        return (
            <div className={postCls}>
                <h3 className="Movie__title">{title}</h3>
                <p className="Movie__year">Release year: {year}</p>
                <p className="Movie__description">{description}</p>
                <p className="Movie__genres_list">{genreItem}</p>
                <input className="Movie__rating_button" type="image" src={like} alt="like" onClick={this.clickHandlerLike}/>
                <input className="Movie__rating_button" type="image" src={dislike} alt="dislike" onClick={this.clickHandlerDislike}/>
                <button className="Movie__delete" onClick = {this.delete}>✕</button>
            </div>
        );
    }
}

export default Movie;