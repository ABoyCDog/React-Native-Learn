import React from 'react'
import {
  Text,
  TextInput,
  View,
  StyleSheet
} from 'react-native'

export default function Cat(props) {
  return (
    <View>
      <Text style={style.cat}>Hello, I am {props.name}</Text>
    </View>
  )
}
const style = StyleSheet.create({
  cat: {
    top: 10,
    left: 24,
    fontSize: 24,
  }
})