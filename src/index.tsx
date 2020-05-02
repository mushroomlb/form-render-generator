import React from 'react';


interface SecurityLayoutProps {
    loading?: boolean;
}

interface SecurityLayoutState {
    isReady: boolean;
}
  
export default class SecurityLayout extends React.Component<SecurityLayoutProps, SecurityLayoutState> {
    state: SecurityLayoutState = {
      isReady: false,
    };

    render(){
        return(
            123
        )
    }

  
}