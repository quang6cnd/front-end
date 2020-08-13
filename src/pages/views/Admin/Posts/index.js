import React from 'react'
import PropTypes from 'prop-types'

const Posts = ({posts,onRemovePost })=> {
    const removePost = (id) =>{
        onRemovePost(id);
    }
    return (
        <div className="main-panel">
        
    </div>
    )
}

Posts.propTypes = {

}

export default Posts
