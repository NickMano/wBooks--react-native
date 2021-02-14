import React from 'react';
import {StatusBar, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LibraryStack from './components/LibraryStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import libraryImage from '../assets/ic_library.png';
import wishlistImage from '../assets/ic_rating_star.png';
import addNewImage from '../assets/ic_add_new.png';
import myRentalsImage from '../assets/ic_myRentals.png';
import settingsImage from '../assets/ic_setting.png';
import Colors from '../utils/colors';

const Tabs = createBottomTabNavigator();
const tabBarOptions = {
  tintColor: Colors.blueJeans,
  style: {
    backgroundColor: Colors.white,
  },
};

const setImageIcon = (icon, color, size) => (
  <Image source={icon} style={{tintColor: color, width: size, height: size}} />
);

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tabs.Navigator tabBarOptions={tabBarOptions}>
          <Tabs.Screen
            name="Library"
            component={LibraryStack}
            options={{
              tabBarIcon: ({color, size}) =>
                setImageIcon(libraryImage, color, size),
            }}
          />
          <Tabs.Screen
            name="Wishlist"
            component={LibraryStack}
            options={{
              tabBarIcon: ({color, size}) =>
                setImageIcon(wishlistImage, color, size),
            }}
          />
          <Tabs.Screen
            name="Add New"
            component={LibraryStack}
            options={{
              tabBarIcon: ({color, size}) =>
                setImageIcon(addNewImage, color, size),
            }}
          />
          <Tabs.Screen
            name="Rentals"
            component={LibraryStack}
            options={{
              tabBarIcon: ({color, size}) =>
                setImageIcon(myRentalsImage, color, size),
            }}
          />
          <Tabs.Screen
            name="Settings"
            component={LibraryStack}
            options={{
              tabBarIcon: ({color, size}) =>
                setImageIcon(settingsImage, color, size),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
