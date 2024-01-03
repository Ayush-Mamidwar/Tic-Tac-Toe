import React, { useState } from 'react'

const Player = ({name,symbol,isActive}) => {
    const[playerName,setPlayerName] = useState(name)
    const[editing,setIsEditing]=useState(false)

    const editHandler = ()=>{
        setIsEditing((editing)=>!editing)
    }
    
    const nameChangeHandler = (e)=>{
        setPlayerName(e.target.value)
    }

 return (<li className={isActive ? 'active':undefined}>
    <span className="player">
        {editing ? 
        <input type='text' required value={playerName} onChange={nameChangeHandler}/>
        : 
        <><span className="player-name">{playerName}</span></>
        }
        <span className="player-symbol">{symbol}</span>
        <button onClick={editHandler}>{editing ? 'Save':'Edit'}</button>
    </span>
  </li>
 )
  
}

export default Player