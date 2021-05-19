import React from 'react'
import { View, Text } from 'react-native'

const PlacesListScreen = () => {
    return (
        <View>
            <Text>PlacesListScreen</Text>
        </View>
    )
}

export const placesOptions = navData => {
    return {  
        headerTitle : 'All Places',
    }
}

export default PlacesListScreen
