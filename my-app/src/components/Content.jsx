import React, { Component } from 'react';
import css from './css/Content.module.css';
import {savedPosts} from './posts.json';
import PostItem from './PostItem';
import Loader from './Loader';

export default class Content extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: []
        }
    }
    
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }

    
    handleChange = (e) => {
        const name = e.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name)
        })

        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form >
                    <label htmlFor="searchInput"></label>
                    <input
                    type="search"
                    id="searchInput"
                    onChange={(e) => this.handleChange(e)}
                    />
                    <h4>Posts Found: {this.state.posts.length}</h4>
                    </form>
                </div>

                <div className={css.SearchResults}>
                {
                    this.state.isLoaded ? 
                        <PostItem savedPosts={this.state.posts} />
                        :
                        <Loader />
                    }
                </div>
            </div>
        )
    }
}
