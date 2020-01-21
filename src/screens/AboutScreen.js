import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const AboutScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text style={styles.centerText}>
                Привет!!! Это просто приложение в котором нет никакого смысла.
                Забавно что вы попали в данный пункт меню
            </Text>
        </View>
    );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'О приложении',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title="Toggle Drawer"
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    ),
});

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerText: {
        textAlign: 'center',
    },
});
