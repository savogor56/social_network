
import React, { Suspense } from 'react';

export const withSuspense = (Component) => {
    return (props) => (
        <Suspense fallback={<div>Loading...</div>}>
            
                <Component {...props} />
        </Suspense>
    )
}