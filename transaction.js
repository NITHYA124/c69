import React, { Component } from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class Transaction extends React.Component{
    constructor(){
        super()
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonstate:'normal',
        }
    }
    getCameraPermissions=async()=>{
        const{status}=await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermissions:status==="granted",
            buttonstate:"clicked",
            scanned:false
        })
    }
    render(){
        const hasCameraPermissions=this.state.hasCameraPermissions;
        const scanned=this.state.scanned;
        const buttonstate=this.state.buttonstate;
        if(buttonstate==="clicked" && hasCameraPermissions){
            return(
                <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
            );
        }
        else if(buttonstate==="normal"){
        return(
<View style={styles.container}>
    <Text style={styles.displaytext}>{
    hasCameraPermissions===true? this.state.scannedData: "Request Camera Permission"
        }</Text>
    <TouchableOpacity
    onPress={this.getCameraPermissions}
    style={styles.scanbutton}>
        <Text> Scan QR Code</Text>
    </TouchableOpacity>
</View>
        );
    }
}
}

const styles=StyleSheet.create({
 container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
scanbutton:{
     backgroundColor:"green",
     padding:10,
     margin:10
},
displaytext:{
    fontSize:15,
    textDecorationLine:'underline'
}
})