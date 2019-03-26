import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import images from '../images/images'
import Party from './party'

export default class PartiesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            topMessage: 'Tap on a party to vote for it',
            parties: []
        }
        this.getVoteStatus = this.getVoteStatus.bind(this)
    }
    getVoteStatus(val){
        console.log(`getting vote status: ${val}`)
        if(val === 'success')
            this.props.sendData('top')
        else
            this.setState(prevState => ({topMessage: `error voting: ${val}`, parties: [...prevState.parties]}))
    }
    async componentDidMount(){
        try{
            let response = await fetch('https://isr-elections.herokuapp.com/api/parties')
            if(!response.ok)    throw new Error(`response status: ${response.status}`)
            let json = await response.json()
            let withImages = json.parties.map(item => ({name: item.id, image: images[item.id.replace(/-/g, '')]}))
            this.setState(prevState => ({parties: withImages, topMessage: prevState.topMessage}))
        }
        catch(err){
            this.setState(prevState => ({parties: [], topMessage: `ERROR: ${err}`}))
        }
    }
    render(){
        return(
            <ScrollView>
                <Text>{this.state.topMessage}</Text>
                {this.state.parties.map(party => (
                    <Party
                        party={party}
                        key={`p-${party.name}`}
                        sendStatus={this.getVoteStatus}
                    />
                ))}
            </ScrollView>
        )
    }
}