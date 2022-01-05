import { React, useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { AppNavigator } from './Navigation/AppNavigator';

import store from './Store/store'
import { Provider } from 'react-redux'

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'open-sans-italic': require('./assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf')
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return (<AppLoading startAsync={fetchFonts} onFinish={ setFontLoaded(true) } />);
  }else{
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}