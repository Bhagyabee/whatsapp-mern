
import React, { useState } from "react";


import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import { useEffect } from "react";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response => {
      
      setMessages(response.data);
    }).catch(err =>{
      if(err.response){
        console.log(err.response.data)
      }
      else if(err.request){
        console.log(err.request)

      }else{
        console.log(err.message);
      }
      
    })
  },[])

  useEffect(()=>{
    const pusher = new Pusher('fb8787f2f2f3ca626419', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newmessage) {
      alert(JSON.stringify(newmessage));
      setMessages([...messages,newmessage]);

    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])

  console.log(messages)



  return (
    <div className="app">
    
    <div className="app_body">
   
    <Sidebar />
    <Chat messages={messages}/>

    </div>
    
   

    </div>
  );
}

export default App;
