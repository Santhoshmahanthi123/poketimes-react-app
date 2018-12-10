import React,{Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
//UI baseed component which is a function it is Home component
//convert fun to class since we use axios to make it a life cycle hook
class Home extends Component{
    state = {
        posts : []
    }
    //method to use axios
    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res);
            this.setState({
                //for adding first 10 data items to state posts
                posts : res.data.slice(0,10)
            })
        })
    }
   render(){
       const {posts} = this.state;
       //to cycle through each post
       const postList = posts.length ? (
           posts.map(post =>{
               return (
                   <div className="post card" key={post.id}>
                       <div className="card-content">
                           <Link to={'/' +post.id }>
                           <span className="card-title">{post.title}</span>
                           </Link>
                           <p>{post.body}</p>
                       </div>
                   </div>
               )

           })
       ) : (
           <div className="center">No posts yet!</div>
       )
    return(
        <div className="container">
            <h4 className="center">Home</h4>
            {postList}
        </div>
    )
   }
}
export default Home;