import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles'
import images from '../images/images'

export default class TopParties extends Component {
    constructor(props){
        super(props)
        this.state = {
            totalVotes: 0,
            TopParties: []
        }
        this.handleResponse = this.handleResponse.bind(this)
    }
    async componentDidMount(){
        try{
            let response = await fetch('https://isr-elections.herokuapp.com/api/parties/poll-status')
            if(!response.ok){
                throw new Error(`response status: ${response.status}`)
            }
            let json = await response.json()
            let jsonArr = []
            for(let [party, votes] of Object.entries(json))
                jsonArr.push({name: party, votes: votes.currentVotes})
            this.handleResponse(jsonArr)
        }
        catch(err){
            this.setState({totalVotes:0, TopParties: [`${err}`]})
        }
    }
    async handleResponse(jsonArr){
        let totalVotes = 0
        let TopParties = jsonArr.map(item => {
            totalVotes += item.votes
            return {...item, image: images[item.name.replace(/-/g, '')]}
        })
        TopParties.sort((a, b) => b.votes-a.votes)
        this.setState({totalVotes, TopParties})
    }
    render(){
        return(
            <View >
                <Text>top parties total votes: {this.state.totalVotes}</Text>
                {this.state.TopParties.slice(0, 5).map(party => (
                    <View key={`p-${party.name}`} >
                        <Text>{party.name}</Text>
                        <Text>{(party.votes / this.state.totalVotes * 100).toFixed(2)}%</Text>
                        <Image source={party.image} style={styles.imgSmall} />
                    </View>
                ))}
            </View>
        )
    }
}