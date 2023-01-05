import React from 'react'
import {changeEvent, useRef, useState} from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../components/Button'
import TopBar from '../components/TopBar'
import { ethers } from 'ethers'



async function connectToMetamask () {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const accounts = await provider.send("eth_requestAccounts", []);
  const balance = await provider.getBalance(accounts[0]);
  const balanceInEther = ethers.utils.formatEther(balance);
  this.setState({ selectedAddress: accounts[0], balance: balanceInEther })
  console.log(accounts, balance, balanceInEther);
}


export default function HomeScreen({ navigation }) {
  
  const ref = useRef()
  const handleClick = (e) => {
    ref.current.click()
    this.connectToMetamask()
  }

  //const iframe = '<iframe height="265" style="width: 100%;" scrolling="no" title="fx." src="//codepen.io/ycw/embed/JqwbQw/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/ycw/pen/JqwbQw/">fx.</a> by ycw(<a href="https://codepen.io/ycw">@ycw</a>) on <a href="https://codepen.io">CodePen</a>.</iframe>'; 

  const iframe = '<iframe src="https://llsourcell-animusica.hf.space" frameborder="0" style="width: 100%;" height="600"></iframe>'; 

  
  function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

  function sayHello() {
    console.log('hello?');
    connectToMetamask();

  }

  return (
    <>
          <Iframe iframe={iframe} />,
          
      <TopBar title="Home" />
      <View style={styles.container}>
 Company ETH Address:  0xD25C15DD63A47eeBD31f833d39234bBa14f390a1
      <button onClick={sayHello}>Pay with MetaMask (optional)</button>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

