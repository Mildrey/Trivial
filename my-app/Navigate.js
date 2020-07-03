import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Test from './Test.js'

const AppNavigate = createStackNavigator({
	Test : {
		screen: Test	
	}
});

export default createAppcontainer(AppNavigate)