import React from 'react';
import useProtectedPage from '../../hooks/useProtectPage';

const PostPage = () => {
    useProtectedPage()
    return(
        <div>
            post
        </div>
    )
}

export default PostPage;