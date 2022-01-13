import React from "react";
import Loading from "./Loading";
import Main from "./Main";
  
export default class extends React.Component{
  state={
    isLoading : true
  };
  componentDidMount= async() => {  
    // 1,000가 1초
    setTimeout(() => {this.setState({isLoading: false})},3000);
  }

  render(){
    if(this.state.isLoading){
      return <Loading/>
    }else{
      return <Main />;
    }
  }
}  