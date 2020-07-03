import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Init from './src/Init';
import Trivial from './src/Trivia';

function InitScreen({ navigation }){
  return (
    <View style={{ margin:20}}>
    <Init/>
    <Button 
      title="begin"
      style={{ width: 20, justifyContent: 'space-between', margin:20}}
      onPress={() => navigation.navigate('Trivial')}
    />
    </View>
     );
}

function TrivialScreen() {
  return (
    <Trivial/>
     );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Init" component={InitScreen} />
        <Stack.Screen name="Trivial" component={TrivialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;