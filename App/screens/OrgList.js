import { Formik } from "formik"
import React from 'react'
import { Button, SafeAreaView, Text, View } from "react-native"

export default ({navigation}) => {
    return(
        <SafeAreaView style={{ marginTop: 90}}>
            <Formik 
                initialValues={{name:''}}
                onSubmit={(values)=>{
                    alert(JSON.stringify(values))
                }}
            >
                <View>
                    {
                        formikProps =>{
                            <React.Fragment>
                                {/* <TextInput /> */}
                                <Button title="Submit" onPress={formikProps.handleSubmit}/>
                            </React.Fragment>
                        }
                    }
                    <Text>HI</Text>
                </View>
            </Formik> 
        </SafeAreaView>
    )
}