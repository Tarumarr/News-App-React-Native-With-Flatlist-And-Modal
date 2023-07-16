import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    logo: {
      width: "100%",
      height: 50,
      backgroundColor: 'tomato',
      alignItems: "center",
      justifyContent: "center"
    },
    logoText: {
      color: 'white',
      fontSize: 24,
    },
    imageView: {
      width: "94%",
      height: 200,
      marginHorizontal: "3%",
      marginTop: "5%",
    },
    image: {
      width: "100%",
      height: "100%",
  
      resizeMode: 'cover'
    },
    title: {
      margin: "3%",
      marginBottom: 20
    },
    titleText: {
      fontSize: 18,
    },
    line: {
      borderBottomColor: "black",
      borderBottomWidth: 0.3,
    },
    modaldescription: {
      margin: "3%"
    },
    modalcontent: {
      margin: "3%",
      fontSize:18
    },
  });
  export { styles }