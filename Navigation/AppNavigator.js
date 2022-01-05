import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';

import { ToDo } from './../Components/ToDoPage/ToDo.js';
import { Home } from './../Components/Home.js';
import { Products } from '../Components/ProductPage/Products.js';
import GuessNumberApp from '../Components/GuessNumberPage/GuessNumberPage.js';
import ProductDetail from '../Components/ProductPage/ProductDetails.js';
import Settings from '../Components/SettingsPage/Settings.js';
import Geolocation from '../Components/GeolocationPage/GeolocationPage.js';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabView = () => {
    const themeColor = useSelector( state => state.app.themeColor );
    const fontColor = useSelector( state => state.app.fontColor );

    return(
        <Tab.Navigator 
            screenOptions={{
                
            }}
            screenOptions={({ route }) => ({
                headerStyle: {
                    backgroundColor: themeColor,
                },
                headerTintColor: fontColor,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Navegacion') {
                    iconName = 'ios-home';
                  } else if (route.name === 'Configuracion') {
                    iconName = 'ios-settings';
                  }
      
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: themeColor,
                tabBarActiveBackgroundColor: fontColor,
                tabBarInactiveBackgroundColor: fontColor,
                tabBarInactiveTintColor: '#bababa',
                tabBarLabelStyle: {
                    fontSize: 12,
                    paddingBottom: 2
                },
                tabBarStyle: {
                    padding: 4
                }
              })}
        >
            <Tab.Screen name="Navegacion" component={Home} />
            <Tab.Screen name="Configuracion" component={Settings} />
        </Tab.Navigator>
    )
}

const AppNavigator = () => {
    const themeColor = useSelector( state => state.app.themeColor );
    const fontColor = useSelector( state => state.app.fontColor );

    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Inicio'
                screenOptions={{
                    headerStyle: {
                      backgroundColor: themeColor,
                    },
                    headerTintColor: fontColor
                }}
            >
                <Stack.Screen name="Inicio" component={TabView} options={{ headerShown: false }} />
                <Stack.Screen name="Lista de Tareas" component={ToDo} />
                <Stack.Screen name="Productos" component={Products} />
                <Stack.Screen name='Detalle del Producto' component={ProductDetail} />
                <Stack.Screen name="Adivina el Numero" component={GuessNumberApp} />
                <Stack.Screen name="Geolocalizacion" component={Geolocation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { AppNavigator };