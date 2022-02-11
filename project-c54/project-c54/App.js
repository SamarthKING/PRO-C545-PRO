import React, { Component } from 'react';
import { Button, View, Text,Audio } from 'react-native';
import { Alert } from 'react-native';
export default class App extends Component {
  displayAlert() {
    alert('Play Sound !!!');
  }

 
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'}, 
       {shouldPlay:true}
     );
  }

  render() {
    return (
        <View>
        <View 
          style={{ width:200 , height:100}}>
          <Button 
            title="sound1"  
            color = "red"
            onPress={() => Alert.alert('Play Sound 1')} />
        </View>
        <View
          style={{ width:200 , height:100, }}>
          <Button 
            title="sound2"  
            color = "blue"
            onPress={() => Alert.alert('Play Sound 2')} />
        </View>
        <View
          style={{ width:180 , height:100, marginTop:20}}>
          <Button 
            title="sound3"  
            color = "purple"
            onPress={() => Alert.alert('Play Sound 3')} />
        </View>
        <View 
          style={{ width:180 , height:100, marginTop:20}}>
          <Button 
            title="sound4"  
            color = "green"
            onPress={() => Alert.alert('Play Sound 4')} />
        </View>
      </View>
    );
  }
}
