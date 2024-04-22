// import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'laurita23',
    name: 'Laura Martínez',
    isFollowing: false
  },
  {
    userName: 'techlover7',
    name: 'Emily Johnson',
    isFollowing: false
  },
  {
    userName: 'jslover',
    name: 'David Brown',
    isFollowing: true
  },
  {
    userName: 'webdev123',
    name: 'Sophia Davis',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {users.map(user => {
        const { userName, name, isFollowing } = user
        return (
          <TwitterFollowCard
            userName={userName}
            initialIsFollowing={isFollowing}
            key={userName}
            name={name}
          />

        )
      })}
    </section>
  )
}
