import { useState, useContext } from 'react'
import { View, TextInput, Button } from 'react-native'
import { NewVibeContext } from '../../App'
import {styles} from '../styles'


export default function AddNew( { navigation } ){
    const [newVibe, setNewVibe] = useState('')
    const {setVibesUpdated} = useContext(NewVibeContext)


    const handleVibe = (vibe) => {

        fetch(`https://goodvibesrepo-api.web.app/addnew`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'message': vibe, 'createdAt': Date.now()})
        })
            .then(res => res.text())
            .then(data => setVibesUpdated(data))
            .then(() => navigation.navigate('Home'))
            .catch(console.error)
    }

    return (
        <View style={styles.container}>
            <TextInput 
                name="message"
                style={styles.input}
                onChangeText={setNewVibe}
                value={newVibe}
                placeholder="write your good vibe here"
                keyboardType="numeric"
                multiline
                numberOfLines={2}
            />
            {!newVibe
                ? <Button disabled title="Send your Good Vibe In" />
                : <Button          title="Send your Good Vibe In" onPress={() => handleVibe(newVibe)} />
            }
        </View>
    )
}