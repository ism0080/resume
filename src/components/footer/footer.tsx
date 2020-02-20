import React from 'react'

export const Footer = () => (
  <div style={{ display: 'flex', placeContent: 'center', bottom: 0, position: 'fixed', width: '100%' }}>
    <p>Isaac Mackle</p>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 200,
        alignItems: 'center',
      }}
    >
      <a href='#'>LinkedIn</a>
      <a href='#'>GitHub</a>
      <a href='mailto:isaac.mackle@gmail.com'>Email</a>
    </div>
  </div>
)
