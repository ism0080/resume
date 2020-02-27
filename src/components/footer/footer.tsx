import React from 'react'

import './footer.css'

export const Footer = ({ testID, title, links }: FooterProps) => (
  <div data-testid={testID} className='footer'>
    <p>{title}</p>
    {links && (
      <div data-testid={`${testID}.links`} className='links'>
        {links.map((link) => (
          <a data-testid={`${testID}.link.${link.title}`} key={link.title} href={link.url} target='_blank'>
            {link.title}
          </a>
        ))}
      </div>
    )}
  </div>
)
