import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet} from 'react-native'

const Userscreen = () =>{

    const [userProfile, setUserProfile] = useState<any>('hello world');

    useEffect(() => {
        setUserProfile('user profile')
    }, [])
    
    return(
        <View style={styles.container}>
            <Text>{userProfile}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default Userscreen