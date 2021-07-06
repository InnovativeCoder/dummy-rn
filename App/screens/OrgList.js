import React from 'react'
import { Button, Text, View } from "react-native"

export default ({navigation}) => {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text>Org List Screen</Text>
            <Button 
                title="Go To Screen List"
                onPress={() => navigation.navigate('StationList')}
            />
        </View>
    )
}