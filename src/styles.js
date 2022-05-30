import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "vertical",
      justifyContent: "space-around",
      alignItems: "center",
      height: "100%",
      textAlign: "center"
    },
    bkgimg: { 
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: "white",
      fontSize: 24,
      lineHeight: 48,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#4682b4",
      margin: 5,
      padding: 5,
    
    },
    input: {
      color: "#66cdaa",
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: "center",
      fontStyle: "italic",
      margin: 12,
      padding: 10,
      backgroundColor: "#add8e6",
    }
  });
  