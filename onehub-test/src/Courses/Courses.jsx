import React, { Component } from 'react';
import v4 from 'uuid/v4';
import Course from './Course';
import Select from '../Filter/Select';
import Sort from '../Filter/Sort';
import courses from '../courses.js';
import filter from '../filter.js';
import './Courses.css';



class Courses extends Component {
    constructor() {
        super();
        this.state = {
            courses: courses,
            filter: filter,
            activeFilters: {},
            isDrpdwnShow: false,
            displayList: false
        }
    }

    changeDisplayMode = () => {
        this.setState({
            displayList: !this.state.displayList
        })
    }

    changeHandler = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let key = value;
        key = key.replace(/\s+/g, '');
        let filter = this.state.activeFilters;

        if (filter[key] !== undefined) {
            if (filter[key].indexOf(name) == -1) {
                filter[key].push(name)
            }
            else {
                let index = filter[key].indexOf(name)
                filter[key].splice(index, 1);
                if (filter[key].length == 0) {
                    delete filter[key]
                }

            }
        }
        else {
            filter[key] = [name]
        }

        this.filter()

    }

    filter = () => {
        let arrayToFilter = courses
        function multiFilter(array, filters) {
            const filterKeys = Object.keys(filters);

            return array.filter((item) => {
                return filterKeys.every(key => !!~filters[key].indexOf(item[key]));
            });
        }

        var filtered = multiFilter(arrayToFilter, this.state.activeFilters);

        this.setState({
            courses: filtered
        }, ()=> {
            if(document.querySelectorAll('.Course').length < 4){
                document.querySelector('.Courses').classList.add('preventStrech')
            }
            else{
                document.querySelector('.Courses').classList.remove('preventStrech')
            }
            console.log(  )
        })
        

    }

    removeParam = (param) => {
        let objKey = Object.keys(this.state.activeFilters).find(key => this.state.activeFilters[key].indexOf(param) !== -1)
        let paramIndex = this.state.activeFilters[objKey].indexOf(param)
        this.state.activeFilters[objKey].splice(paramIndex, 1);
        if (this.state.activeFilters[objKey].length == 0) {
            delete this.state.activeFilters[objKey]
        }

        document.getElementById(param).checked = false

        this.filter()
    }

    resetFilter = () => {
        this.setState({
            activeFilters: {},
            filtersToDisplay: [],
            courses: courses
        })
        document.querySelector('.Courses').classList.remove('preventStrech')
        document.querySelectorAll('.checkbox').forEach((input) => {
            input.checked = false
        })
    }

    sortCourses = (event) => {
        const target = event.target;
        const value = target.value;

        let sorted;
        if (value == 'price') {
            sorted = this.state.courses.sort((a, b) => a[value] - b[value]);
        }
        else if (value == 'rating') {
            sorted = this.state.courses.sort((a, b) => b[value] - a[value]);
        }
        else {
            sorted = courses
        }
        this.setState({
            courses: sorted
        })
    }


    render() {
        let filterParams = Object.values(this.state.activeFilters)
        let params = filterParams.filter((param) => {
            return param
        })
        let flattenParams = [].concat.apply([], params)
        return (
            <div className="Mainarea">
                <div className="ActiveFilters">
                <div className="ActiveFilters__header">
                    <h4>Active filters</h4>
                    <div className="ActiveFilters__result">Result: <span>{this.state.courses.length} matches</span></div>
                </div>
                    
                    <div className="ActiveFilters__list">
                        <button onClick={this.resetFilter}>Default</button>
                            {flattenParams.map((param) => {
                                return <span key={v4()} className="ActiveFilters__list__item"><span className="remove-param" onClick={() => this.removeParam(param)}>✖</span>{param}</span>
                            })}
                    </div>
                </div>
                <div className="Filter">
                    <div className="Filter__wrap">
                        {this.state.filter.map(param => <Select {...param} key={param.id} addFilter={this.changeHandler} uncheck={this.state.uncheck}/>)}

                    </div>
                </div>
                <Sort changeDisplayMode={this.changeDisplayMode} activeMode={this.state.displayList} sortCourses={this.sortCourses} />
                <div className={this.state.displayList ? 'Courses Courses--list' : 'Courses'}>
                    {this.state.courses.map((course) => {
                        return (
                            <Course {...course} key={course.id}
                                addToCart={this.props.addToCart}
                                addToWishlist={this.props.addToWishlist}
                                removeFromCart={this.props.removeFromCart}
                                removeFromWishList={this.props.removeFromWishList}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Courses;