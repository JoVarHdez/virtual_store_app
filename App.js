import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/login';
import Index from './src/screens/index/index';
import Header from './src/common/header';
import ProductDetail from './src/screens/product/containers/product-detail';
import CartList from './src/screens/cart/container/cart-list';
import SearchScreen from './src/screens/search/containers/search-screen'
import SideMenu from './src/screens/side-menu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Category from './src/screens/categories/container/categories';
import Orders from './src/screens/orders/container/orders'
import OrderDetail from './src/screens/orders/component/order-detail';
import AppModal from './src/common/modal/modal';

const Drawer = createDrawerNavigator();
const navigatorStack = createStackNavigator();
const modalStack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <ModalNavigator />
    </NavigationContainer>
  );
};

function StackNavigator({navigation}){
  return (
    
      <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle="dark-content" />
          <navigatorStack.Navigator screenOptions={{ header: (props) => <Header {...props}/>}} initialRouteName="login">
            <navigatorStack.Screen name="login" component={LoginScreen} options={{headerShown : false}}></navigatorStack.Screen>
            <navigatorStack.Screen name="Index" component={Index} options={{gestureEnabled: false}} ></navigatorStack.Screen>
            <navigatorStack.Screen name="Details" component={ProductDetail}></navigatorStack.Screen>
            <navigatorStack.Screen name="Cart" component={CartList}></navigatorStack.Screen>
            <navigatorStack.Screen name="Search" component={SearchScreen}></navigatorStack.Screen>
            <navigatorStack.Screen name="Categories" component={Category}></navigatorStack.Screen>
            <navigatorStack.Screen name="Orders" component={Orders}></navigatorStack.Screen>
            <navigatorStack.Screen name="OrderDetail" component={OrderDetail}></navigatorStack.Screen>
          </navigatorStack.Navigator>
        </SafeAreaView>
    
  );
}

function ModalNavigator({navigation}){
  return(
    <modalStack.Navigator mode="modal" screenOptions={{ cardStyle : {backgroundColor : 'transparent'}}}>
      <modalStack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }}/>
      <modalStack.Screen name="Modal" component={AppModal} options={{ headerShown: false }}/>
    </modalStack.Navigator>
  );
}

function DrawerNavigator({navigation, route}) {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
      {/* <Drawer.Screen name="ModalStack" component={ModalNavigator} /> */}
      <Drawer.Screen name="Stack" component={StackNavigator} options={{ headerShown: false }}/>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
