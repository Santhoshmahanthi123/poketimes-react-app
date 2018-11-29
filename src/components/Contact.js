import React from 'react';
//UI baseed component which is a function it is Contact component
//router alreadyb adds props and using this we can render to other page using setTimeout function
const Contact = (props) =>{
//   console.log(props);
    setTimeout(() =>{
        props.history.push('/')
    },2000);
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi delectus autem quasi labore asperiores quod architecto, alias repudiandae illum, sint dolorem veritatis placeat vitae. Itaque est expedita eaque quae?</p>
        </div>
    )
}
export default Contact;