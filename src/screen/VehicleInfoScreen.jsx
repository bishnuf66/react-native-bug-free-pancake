import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'

const VehicleInfoScreen = () => {
    

  return (
    <View>
        <View>
      <Text>Your Vehicles</Text>
    </View>
      <View style={styles.inputContainer}>
      <TextInput 
      style={styles.textInput}
      placeholder='enter your password' 
      placeholderTextColor={colors.secondary}
      />
      <TouchableOpacity >
   <Text> Register Vehile</Text>
      </TouchableOpacity>
     
  </View>
  </View>
  )
}

export default VehicleInfoScreen

const styles = StyleSheet.create({
    textInput:{
        color:"black"
    }
})