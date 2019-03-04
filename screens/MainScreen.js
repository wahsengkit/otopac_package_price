import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {getData} from '../reducers/general';
class MainScreen extends React.Component{
    static navigationOptions = {
        title: 'Home',
    };

    componentDidMount(){
        //load data
        this.props.getData();
    }

    render(){
        return <View/>
    }
}

export default connect((state)=>{
    return {core:state.core}
}, {getData})(MainScreen)