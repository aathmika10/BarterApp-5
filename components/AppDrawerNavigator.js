import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from "./AppTabNavigator";
import SettingsScreen from '../screens/SettingsScreen';
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
    tab:{
        screen:AppTabNavigator
    },
    Settings:{
        screen:SettingsScreen
    },
},

    {
        contentComponent:CustomSideBarMenu
    },
    {
        initialRouteName:'tab'
})