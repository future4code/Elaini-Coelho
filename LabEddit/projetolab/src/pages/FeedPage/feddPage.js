import React from 'react';
import useProtectedPage from '../../hooks/useProtectPage';
const FeedPage = () => {
    useProtectedPage()
    return(
        <div>
            Feed!!
        </div>
    )
}

export default FeedPage;