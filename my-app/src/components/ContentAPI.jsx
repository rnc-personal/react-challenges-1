import React, { Component } from 'react';
import css from './css/Content.module.css';
import PostItemAPI from './PostItemAPI';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secrets.js'

export default class Content extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            savedPosts: [],
            posts: []
        }
    }

    componentDidMount() {
        this.fetchImages();
    }

    async fetchImages() {
        await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`)
            .then(res => {
                const fetchedPosts = res.data.hits;
                this.setState({
                    isLoaded: true,
                    savedPosts: fetchedPosts,
                    posts: fetchedPosts
                })
                console.log(fetchedPosts)
            }).catch(err => {
                console.log(err)
            });
    }


    handleChange = (e) => {
        const name = e.target.value.toLowerCase()
        const filteredPosts = this.state.savedPosts.filter((post) => {
            return post.user.toLowerCase().includes(name)
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
                            <PostItemAPI savedPosts={this.state.posts} />
                            :
                            <Loader />
                    }
                </div>
            </div>
        )
    }
}
