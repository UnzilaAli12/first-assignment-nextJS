import Link from 'next/link'
import React from 'react'

const WebDevelopment = () => {
  return (
    <div>
    <h2> This is WebDevelopment page</h2> 
    <ul>
    <li><Link href="/service/development" target="_blank" >Web-Development</Link></li>
    </ul>
    </div>
  )
}

export default WebDevelopment
