import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-ststus-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div `
    margin: 0 auto;
    max-width: 800px;
`


const App = () => {

    const data = [
        
        {label: "Go to learn React", important: true, id: 'krgg'},
        {label: "That is so good", important: false, id: 'kojo'},
        {label: "I need a breack...", important: false, id: 'tgyuhi'}
    ]

    return(
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;