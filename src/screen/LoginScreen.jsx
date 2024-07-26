import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import {colors} from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const LoginScreen = () => {
    
    const navigation=useNavigation();
    const[visible,setvisible]=useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelGoBack=()=>{
        navigation.goBack();
    }

    // const handleLogin=()=>{
    //     navigation.navigate("VehicleInfoScreen")
        
    // }

    const handleLogin = async () => {
        try {
          const response = await axios.post('http://10.0.2.2:8080/api/login', {
            email: email,
            password: password,
          });
      
          if (response.status === 200) {
            alert('Login successful!');
            navigation.navigate("VehicleInfoScreen")
          } else {
            alert('Login failed: ' + response.data.message);
          }
        } catch (error) {
          alert('Error: ' + error.message);
        }
      };
      


    const handelSignup=()=>{
        navigation.navigate("SIGNUP")
    };

  return (
    <View>
        <TouchableOpacity style={styles.backButtonWrapper} onPress={handelGoBack}>
        <Ionicons name={"arrow-back-circle"} color="black"
         size={30}/>
        </TouchableOpacity>
        <View style={styles.textContainer}>
      <Text style={styles.headingText}>Hyy</Text>
      <Text style={styles.headingText}>Welcome</Text>
      <Text style={styles.headingText}>Back</Text>
      </View>

    <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
            <Ionicons name={"mail-outline"} size={30} color={colors.secondary}/>
            <TextInput 
            style={styles.textInput}
            placeholder='enter your email' 
            placeholderTextColor={colors.secondary}
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'/>
        </View>
        <View style={styles.inputContainer}>
            <SimpleLineIcons name={"lock"} size={30} color={colors.secondary}/>
            <TextInput 
            style={styles.textInput}
            placeholder='enter your password' 
            placeholderTextColor={colors.secondary}
            value={password}
            onChangeText={setPassword}
         
            secureTextEntry={visible}/>
            <TouchableOpacity onPress={()=>{setvisible((prev)=>!prev);}}>
            <SimpleLineIcons name={"eye"} size={20} color={colors.secondary}/>
            </TouchableOpacity>
           
        </View>


<View>

    <TouchableOpacity>
        <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>


<Text style={styles.continueText}>or continue with</Text>

<TouchableOpacity style={styles.googleContainer}>

    <Image source={require('../assets/logo.png')} style={styles.googleImage}/>
    <Text style={styles.googleText}>GOOGLE</Text>
</TouchableOpacity>


<View style={styles.footerContainer}>
    <Text style={styles.accountText}>dont have an account?</Text>
    <TouchableOpacity onPress={handelSignup}>
    <Text style={styles.signupText}>Signu up</Text>
    </TouchableOpacity>
</View>


</View>



    </View>



    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
    },

    backButtonWrapper:{
        height:50,
        width:50,
        backgroundColor:colors.gray,
        justifyContent:"center",
        borderRadius:25,
        alignItems:"center"
    },
    textContainer:{
        marginVertical:20,
    },
    headingText:{
        fontSize:32,
        color:"grey",

    },
    formContainer:{
        marginTop:20,
      
    },
    inputContainer:{
        borderWidth:1,
        borderColor:colors.secondary,
        borderRadius:100,
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center",
        padding:2,
        marginVertical:10,
    },
    textInput:{
        flex:1,
        paddingHorizontal:10,
        color:"black"
    },
    forgetPasswordText:{
        color:"black",
        textAlign:"right",

    },
    loginText:{
        fontSize:32,
        color:"white",
        textAlign:"center",
        padding:10
    },
    loginButtonWrapper:{
        marginTop:20,
        backgroundColor:"gray",
        borderRadius:100
       
    },
    continueText:{
        marginVertical:20,
        fontSize:12,
        color:"black",
        textAlign:"center",
    },
    googleContainer:{
        flexDirection:"row",
        borderWidth:2,
        borderColor:"gray",
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center"
        
    },
    googleImage:{
        height:20,
        width:20,
    },
    googleText:{
        fontSize:20,
        color:"black"
    },


   footerContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:20,
    gap:2

   },
 accountText:{
    color:colors.primary,


 },
   signupText:{
    color:"black",
    fontSize:18,
    fontStyle:"bold",

   }


})