import React from 'react';
import './App.css';
import {MY_PAGE, POSTS_PAGE, SINGLE_POST_PAGE} from "./accets/contstants";
import {Redirect, Route, Switch} from "react-router-dom";
import MyPostContainer from "./ui/myPosts/myPostsContainer";
import PostTapeContainer from "./ui/postsTape/postsTapeContainer";
import ErrorPage from "./ui/errorPage/errorPage";
import SinglePostPageContainer from "./ui/postsTape/singlePostPage/singlePostPageContainer";

function App() {




    return (
        <div className="App">
            <Switch>
                <Route exact path={'/'} render={()=><Redirect to={MY_PAGE}/>}/>
                <Route exact path={MY_PAGE} component={MyPostContainer}/>
                <Route path={`${SINGLE_POST_PAGE}/:id?`} component={SinglePostPageContainer}/>
                <Route path={POSTS_PAGE} component={PostTapeContainer}/>
                <Route path={'*'} component={ErrorPage}/>
            </Switch>

            </div>
    );
}

export default App;
