 import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { globals } from '../globals';

const NAV_LINKS = [{
    href: '/',
    label: 'Product',
  }, {
    href: '/download',
    label: 'Download',
  }, {
    href: '/pricing',
    label: 'Pricing',
}];


export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header>
      <div className="mw--md m-horizontal--auto p-around--large layout-row layout-align-start-center">
        <Link href="/">
          <a className="black">
            <h3>{ globals.siteName }</h3>
          </a>
        </Link>
        <span className="flex" />
        { NAV_LINKS.map((item) => (
          <Link href={item.href} key={item.label}>
            <a className={`m-left--large ${router.pathname === item.href ? 'active' : ''}`}>
              { item.label }
            </a>
          </Link>
        ))}
      </div>
    </header>
  );
};
