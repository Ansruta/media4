import * as React from 'react';
import TabNavigator from './TabNavigator';
import Post from './PostCard';
import {createStackNavigation} from '@react-navigation/stack';

const Stack=createStackNavigation();
const StackNavigator=()=>{
return(
    <Stack.TabNavigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name={"Home"} component={TabNavigator}/>
        <Stack.Screen name={"Post"} component={Post}/>
    </Stack.TabNavigator>
)
}
export default StackNavigator;
