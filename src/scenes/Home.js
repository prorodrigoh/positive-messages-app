import { useEffect, useState, useContext } from "react";
import { ScrollView, ActivityIndicator, TouchableOpacity, View, Text, Button } from "react-native";
import { NewVibeContext } from "../../App";
import { styles } from '../styles'
// import { ImageBackground } from 'react-native';
// import bkgimg from './assets/good-vibes-bkg.jpeg'


export default function Home ( {navigation} ) {
    // put restaurants in decrescent rating order
    const [allVibes, setAllVibes] = useState()

    const {vibesUpdated} = useContext(NewVibeContext)

    useEffect (() => {
        fetch('https://goodvibesrepo-api.web.app/all')
            .then(res => res.json())
            .then(data => {
                const newVibes = data.sort((a,b) => b.createdAt - a.createdAt)
                setAllVibes(newVibes)}
                )
            .catch(console.error)
    },[vibesUpdated])

    return (
    //  <ImageBackground 
    //       source={bkgimg}
    //       resizeMode='stretch' 
    //       style={styles.bkgimg}>
        <ScrollView>
            {!allVibes
                ? <ActivityIndicator size='large' color='Orange' />
                : allVibes.map( vibe => (
                    // <TouchableOpacity  onPress={() => navigation.navigate('AddNew')}>
                        <View key={vibe.id}>
                            <Text style={styles.text}>{vibe.message}</Text>
                        </View>
                    // </TouchableOpacity>
                ))
            }
            <Button title="Send your Good Vibe In" onPress={() => navigation.navigate('AddNew')} />
        </ScrollView>
    // </ImageBackground>
    )
}