import React from 'react';
import { globals } from '../globals';

export const Footer: React.FC = () => (
  <footer className="m-top--xx-large">
    <div className="mw--md m-horizontal--auto p-around--large layout-row layout-align-end-center">
      <a href="https://www.kopa.co/blog/posts/how-we-use-notion-as-a-startup" rel="noopener noreferrer" target="_blank">
        {globals.yourName} ❤️ &nbsp;Notion
      </a>
    </div>
  </footer>
);
