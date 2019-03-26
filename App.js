import React, { Component } from 'react'
import MyNav from './Components/myNav'
import TopParties from './Components/topParties'
import PartiesList from './Components/parties.list'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            screen: 'list'
        }
        this.renderTopFive = this.renderTopFive.bind(this)
        this.renderList = this.renderList.bind(this)
        this.getData = this.getData.bind(this)
    }
    getData(val){
      this.setState({screen: val})
    }
    renderTopFive(){
      return(
        <React.Fragment>
          <MyNav btnTitle="הצבעה" sendData={this.getData} />
          <TopParties />
        </React.Fragment>
      )
    }
    renderList(){
      return(
        <React.Fragment>
          <MyNav btnTitle="תוצאות" sendData={this.getData} />
          <PartiesList sendData={this.getData}/>
        </React.Fragment>
      )
    }
    render(){
      if(this.state.screen === 'top')
        return this.renderTopFive()
      if(this.state.screen === 'list')
        return this.renderList()
    }
}