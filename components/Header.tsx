import Image from 'next/image';
import React from 'react';

const NAV_LINKS: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/lock-status', label: 'Lock Status' },
  { href: '/vessels', label: 'Vessels' },
  { href: '/barges', label: 'Barges' },
  { href: '/websites/garberbrosinc/images/application.pdf', label: 'Employment' },
  { href: '/contact', label: 'Contact Us' }
];

export default function Header(): JSX.Element {
  const logo = 'https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png';
  const safeSrc = encodeURI(logo);

  return (
    <header className="flex items-center justify-between py-4">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a href="/" aria-label="Home">
          <Image src={safeSrc} alt="Garber Bros logo" width={200} height={60} unoptimized className="brand-logo" />
        </a>
      </div>
      <nav>
        <ul className="site-nav" role="list">
          {Array.isArray(NAV_LINKS) ? (Array.isArray(NAV_LINKS) ? NAV_LINKS : []).map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          )) : null}
        </ul>
      </nav>
    </header>
  );
}
