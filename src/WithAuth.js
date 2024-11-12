import React from 'react'

function WithAuth(WrappedComponent) {
  return function(props){
    const isAuthenticated = true;
    if(!isAuthenticated){
      return <p>Access Denied. Please log in to view this content.</p>;
    }
    return <WrappedComponent {...props} />
  }
}

export default WithAuth