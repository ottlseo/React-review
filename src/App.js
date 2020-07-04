import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      mode:"read",
      selected_content_id:0, //초기값 의미 없음**
      subject:{title:"WEB", sub:"Yoonseo's WEB!"},
      welcome:{title:"Welcome", desc:"Hello, React!!!"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }
  render (){
    console.log("App render");
    var _title, _desc = null;
    
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    } else if(this.state.mode === 'read'){ //mode가 read일 때
      var i = 0;
      while(i< this.state.contents.length){
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) { 
          //현재 상태의 selected-content-id와 같으면
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i+=1;
    }
  }
    console.log('render',this);
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({mode:"welcome"});
          }.bind(this)} //event
          >
        </Subject>
        
        <TOC 
        onChangePage={function (id) {
          this.setState({
            mode:'read',
            selected_content_id:Number(id) // render() 앞부분에서 선택된 데이터 정보
          });
        }.bind(this)}
          data={this.state.contents}
        ></TOC>

        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
export default App;