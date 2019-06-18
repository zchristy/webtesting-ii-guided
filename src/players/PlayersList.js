import React, { Component } from 'react'

function PlayersList({ players }) {
  return (
    <ul>
      { players.map(p => {
        return <li key={p.id} >{p.name}</li>
      }) }
    </ul>
  )
}

export default PlayersList
