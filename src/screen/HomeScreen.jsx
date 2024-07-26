import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation=useNavigation();

const handellogin=()=>{
  navigation.navigate("LOGIN");

};
const handelSignup =()=>{
  navigation.navigate("SIGNUP")
};

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image source={require('../assets/tree.png')} style={styles.tree} />

      <Text style={styles.title}>Lorem ipsum dolor sit, amet consectetu?</Text>
      <Text style={styles.subTitle}>ualala ulalala ulalaala ullala</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.buttonWrapper, styles.loginButtonWrapper]}
        onPress={handellogin}>
          <Text style={styles.loginbuttonText}>login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonWrapper, styles.signupButtonWrapper]} onPress={handelSignup}>
          <Text style={styles.signupbuttonText}>signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 20,
  },
  tree: {
    marginVertical: 30,
    height: 250,
    width: 231,
  },
  title: {
    color: "#000000",
    paddingHorizontal: 20,
    textAlign: "center",
    marginTop: 30,
  },
  subTitle: {
    fontSize: 20,
    color: "blue",
    textAlign: "center",
  },
  buttonContainer: {
    height: 60,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 100,
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    height:"100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 98,
  },
  loginButtonWrapper: {
    backgroundColor: "black",
  },
  signupButtonWrapper: {
    backgroundColor: "white",
  },
  loginbuttonText: {
    color: "white",
    fontSize: 18,
  },
  signupbuttonText: {
    color: "black",
    fontSize: 18,
  },
});
