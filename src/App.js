import React from 'react'

class App extends React.Component{

    render(){
        return <span></span>
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
    }
}

export default App;