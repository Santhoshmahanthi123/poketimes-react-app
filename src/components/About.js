import React from 'react';
import Rainbow from '../hoc/Rainbow'
//UI baseed component which is a function it is Home component
const About = () =>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi delectus autem quasi labore asperiores quod architecto, alias repudiandae illum, sint dolorem veritatis placeat vitae. Itaque est expedita eaque quae?</p>
        </div>
    )
}
export default Rainbow(About);