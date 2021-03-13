
import './App.css';
import React, {useState} from 'react'
import Header from './components/Header'
import Login from './components/Login'
import Lists from './components/Lists'
import ListItem from './components/ListItem'
import Toolbar from './components/Toolbar';
import {motion, AnimatePresence} from 'framer-motion'

function App() {

  const [listItems, setListItems] = useState([])
  
  const methods = {
    appendList:(item)=>{
      if(!item) return
      setListItems([...listItems, {value:item,itemKey:Math.random()}])
    },
    removeItem:(item)=>{
      setListItems(listItems.filter(oldItem=>oldItem.itemKey!=item.itemKey))
    }
  }
  const computedProperties = {

  }



const displayedListItems = listItems.map(
  
  (item,index)=><motion.div
 initial={{opacity:0, x:-100}}
 layout
 exit={{opacity:0, x:100}}
 key={item.itemKey+""+item}
 animate={{opacity:1,x:0}}
 transition={{
   duration:0.25
 }}
  ><ListItem methods={methods} item={item} key={item.itemKey+""+item}>{item.value}</ListItem></motion.div>

  )

  return (
    <div className="App">
      <Header></Header>
      <Login></Login>

      <Lists>
        <AnimatePresence>
      {displayedListItems.reverse()}
      </AnimatePresence>
      </Lists>


      <Toolbar
      methods={methods}
      ></Toolbar>
      <div style={{background:'rgba(50,50,50)',height:'3rem',width:'100%',position:'absolute',bottom:'0'}}>

      </div>
    </div>
  );
}

export default App;
