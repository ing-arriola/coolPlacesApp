
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer  } from '@react-navigation/native'

import MapScreen from '../screens/MapScreen'
import NewPlaceScreen from '../screens/NewPlaceScreen'
import PlaceDetailScreen from '../screens/PlaceDetailScreen'
import PlacesListScreen,{placesOptions} from '../screens/PlacesListScreen'

import Colors from '../constants/Color'

const navOptions ={
    headerStyle:{
        backgroundColor:Colors.primaryColor
    },
    headerTintColor: "white",
    headerTitleAlign:'center' 
}

const PlacesNavigator = createStackNavigator()
