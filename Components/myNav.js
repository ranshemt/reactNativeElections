import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../styles'


export default class MyNav extends Component {
    constructor(props) {
        super(props)
        this.handlePress = this.handlePress.bind(this)
    }
    handlePress = e => {
        if (this.props.btnTitle === 'הצבעה')
            this.props.sendData('list')
        if (this.props.btnTitle === 'תוצאות')
            this.props.sendData('top')
    }
    render() {
        return (
            <View style={styles.nav}>
                <Text style={styles.navTitle}>בחירות ישראל 2019</Text>
                <Button
                    style={styles.navBtn}
                    onPress={this.handlePress}
                    title={this.props.btnTitle}
                />
            </View>
        )
    }
}