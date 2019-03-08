import React from 'react';
import { Alert, Button, StyleSheet, Text, Image, View } from 'react-native';

export default class App extends React.Component {
  pressed() {
    console.log('Pressed')
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.firstTxt}>Open up App.js to start working on your app!</Text>
        <Text style={styles.secondTxt}>Whatever we want</Text>
        <Image 
          style={ { width: 200, height: 200 } }
          source={ require('./assets/pic_200x200.jpg') } />
        <Image 
          style={ { width: 200, height: 200 } }
          source={ {uri: 'https://picsum.photos/300/100'} }  />
        <Button title="Click me" onPress={this.pressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstTxt: {
    textAlign: 'center',
    fontSize: 25
  },
  secondTxt: {
    fontSize: 20
  }
});
