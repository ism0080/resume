import React from 'react'

import less from './footer.less'

export const Footer = ({ testID, title, links }: FooterProps) => (
  <div data-testid={testID} className={less.footer}>
    <p>{title}</p>
    {links && (
      <div data-testid={`${testID}.links`} className={less.links}>
        {links.map((link) => (
          <a
            data-testid={`${testID}.link.${link.title}`}
            key={link.title}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={link.title}
          >
            {link.title}
          </a>
        ))}
      </div>
    )}
  </div>
)
