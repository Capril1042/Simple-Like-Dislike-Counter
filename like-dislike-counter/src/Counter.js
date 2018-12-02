import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            liked: false,
            disliked: false,
            likeCount:100,
            dislikeCount: 25,
        }
    };

    handleLike = () => {
   if (!this.state.liked && !this.state.disliked){
        this.setState(({ likeCount, liked }) => ({
         likeCount: likeCount +1,
         liked: true,
     })) 
    }
    else if (this.state.liked && !this.state.disliked) {
       this.setState(({ likeCount, liked }) => ({
         likeCount: likeCount -1,
         liked: false
     }))
    }
    else if (!this.state.liked && this.state.disliked) {
         this.setState(({ likeCount, liked, disliked, dislikeCount }) => ({
         likeCount: likeCount + 1,
         liked: true,
         disliked : false,
         dislikeCount: dislikeCount -1
     }))
    }
    };

      handleDislike = () => {
   if (!this.state.disliked && !this.state.liked){
        this.setState(({ dislikeCount, disliked }) => ({
         dislikeCount: dislikeCount +1,
         disliked: true,
     })) 
    }
    else if (this.state.disliked && !this.state.liked) {
       this.setState(({ dislikeCount, disliked }) => ({
         dislikeCount: dislikeCount -1,
         disliked: false
     }))
    }
    else if (!this.state.disliked && this.state.liked) {
         this.setState(({ dislikeCount, disliked, liked, likeCount }) => ({
         dislikeCount: dislikeCount + 1,
         disliked: true,
         liked : false,
         likeCount: likeCount -1
     }))
    }
    };

   
    render(){
        let like =this.state.liked ? 'like like-button' : 'like-button';
        let dislike =this.state.disked ? 'dislike dislike-button' :'dislike-button';
        return(
            <div>
            <button onClick={this.handleLike} className={like}> Like | <span>{this.state.likeCount}</span></button>
            <button onClick={this.handleDislike} className={dislike} >Dislke | <span> {this.state.dislikeCount} </span> </button>
            </div>
        );
    }
}
export default Counter;