import React, { Component } from 'react'
import { View, Text, TouchableHighlight, ImageBackground, Alert } from 'react-native'
import styles from '../styles'

export default class PartiesPartyPList extends Component {
    constructor(props){
        super(props)
        this.handleVote = this.handleVote.bind(this)
    }
    async handleVote(id){
        console.log(`clicked party: ${id}`)
        try{
            let response = await fetch(`https://isr-elections.herokuapp.com/api/parties/vote/${this.props.party.name}`, {method: 'POST'})
            if(!response.ok)    throw new Error(`response status: ${response.status}`)
            this.props.sendStatus('success')
        }
        catch(err){
            this.props.sendStatus(err)
        }
    }
    render(){
        return(
            <View style={styles.card} >
                <TouchableHighlight onPress={() => this.handleVote(this.props.party.name)}>
                    <ImageBackground source={this.props.party.image} style={{ width: '100%', height: '100%' }} />
                </TouchableHighlight>
                <Text>{this.props.party.name}</Text>
            </View>
        )
    }
}