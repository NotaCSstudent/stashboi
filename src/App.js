import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { Router, Switch } from 'react-router';
import {Redirect} from 'react-router-dom'
import "./App.css"






export class Mission extends Component {
  render() {
    return (
     
      <div class="missionbar">
      
      <div class="missionhead">
        Mission:
        </div>
        <div class="mission container">
        <div class="missionparagraph">
        Investing in the stock market has been localized with free platforms like Robinhood and WeBull therefore, this advancement removed any barrier of entry into the stockmarket “no matter how much experience you have (or don’t have)” (Robinhood). This may sound idealistic however, we emphasize the economic principle of intentions versus effects. A staggering 90% of hopeful and seasoned investors lose money in the stock market; these apps removing any barrier to entry have only exacerbated that statistic. Investing is no get rich quick scheme but can ensure a prosperous future if approached with the correct mindset and strategy. Investing in the stock market is not hard; like most things, it entails a learning curve. Stonkstache is here to walk you through the learning curve and serve as your educational tool to understanding the principles and mindset of successful investors.
        </div>
        </div>
      </div>
    
    )
  }
}




















export default class App extends Component {
  redirect =  () =>  {
    window.location = "http://www.google.com/"

    
  }
  render() {
    return (
      
      <div class ="background">
        hello world
        <h1 class="name">Stonkstash</h1>
        <div class="containerstasche">
        
        
        
        </div>
      <div class="Retanglearoundphone"></div>
      <h1 class = "name1">
        
        Welcome To Stonkstash
      </h1>
        <div class="firstphone"></div>
        <h1 class= "detail1">
        The only tool you need to become a successful stock market investor.
        
          </h1>
          <div class="missionstatement"><h1 class="missiondetail">Our mission is to help YOU use the free investing resources of today to your benefit rather than your detrimate.</h1></div>
          <form action="https://forms.gle/mVLDfhbBHsQyRTX6A">
          <button class="informbutton" type="submit">
           
            <font face="Coda"><font color="White"><font weight="1"><font align="Center">
              <font size="5">
                <font color="94CFC1">
                Inform Me!
                </font>
              </font>
            </font>

             </font>
              </font></font></button> </form>
              <Mission />

      </div>
       
       
          
      
      
    )
  }
}
