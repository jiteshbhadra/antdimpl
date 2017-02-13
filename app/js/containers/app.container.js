import React from 'react';


import Header from '../components//header.component';
import AntControls from  '../components/antcontrols.component';

class AppContainer extends React.Component
{
    render()
    {
        return (
            <div>
            <Header />
            <AntControls/>
            </div>
        )
    }
}

export default AppContainer