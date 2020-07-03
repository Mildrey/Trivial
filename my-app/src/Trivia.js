import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, FlatList, Modal, Alert} from 'react-native'
import { Card } from 'react-native-elements'
import {createStackNavigator, createAppcontainer} from 'react-navigation'


class Trivia extends Component{

  state:{
    cont: int,
  }
  
  constructor (props){
    super(props)

    this.state = {
      trivia: null,
      isFetch: true,
      cont: 0,
    }
  }
  
  componentDidMount = () =>{
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then(response => response.json())
    .then(triviaJson => this.setState({trivia: triviaJson.results, isFetch:false, triviaJson}))
  }

  true = () =>{
    var respTrue = this.state.trivia[0].correct_answer
    if (respTrue  == "True") {
      console.log('correcto')
    }
    else if(respTrue  == "False"){
      console.log('incorrecto')
    }
    if (this.state.cont < this.state.trivia.length - 1) {
      console.log('todo bien')
      console.log(this.state.trivia.length)
      console.log(this.state.cont)
    } else{
      console.log('fianlizo')
    }
    this.setState({ cont: this.state.cont + 1 })
  }

  false = () => {
    var respFalse = this.state.trivia[0].correct_answer
    if (respFalse == "False") {
      console.log('incorrecto')
    }
    else if(respFalse == "True"){
      console.log('correcto')
    }
    if (this.state.cont < this.state.trivia.length - 1) {
      console.log('todo bien')
      console.log(this.state.trivia.length)
      console.log(this.state.cont)
    } else{
      console.log('fianlizo')
    }
    this.setState({ cont: this.state.cont + 1 })
  }


  render(){
    if (this.state.isFetch){
      return 'loading'
    }
    const category = this.state.trivia[this.state.cont].category
    const question = this.state.trivia[this.state.cont].question
 

    return(
      <View style={styles.container}> 
        <View style={styles.scategory}>
          <Text style={{ fontSize: 33, fontWeight: 'bold' }}>{category}</Text> 
        </View>
        <Card>
          <View style={styles.spregunta}>
            <Text style={{ fontSize: 15 }}>{question}</Text> 
          </View>
            <Button title="true"  onPress={this.true}></Button>
             <hr/>
            <Button title="false"  onPress={this.false}></Button>
        </Card> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
  },
  scategory : {
    marginTop:20,
    height: 80,
    justifyContent : 'center',
    alignItems : 'center',
    padding: 20,
    margin: 10
  },
  spregunta: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    padding: 20,
    margin:10,
  },
  CardView:{
    borderRadius: 10
  },
  Vbutton:{
    margin: 30
  },
  Button : {
    width: 20,
    justifyContent: 'space-between',
    color:'#7fff00'
  }

})
export default Trivia