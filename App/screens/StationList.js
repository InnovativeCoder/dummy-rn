import React from 'react'
import { Button, Text, View } from "react-native"

export default ({navigation}) => {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text>Station List Screen</Text>
            <Button 
                title="Go To Org List"
                onPress={() => navigation.navigate('OrgList')}
            />
        </View>
    )
}