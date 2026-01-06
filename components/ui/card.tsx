"use client";
import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  children?: React.ReactNode;
}

export default function Card({ title, href, imgSrc, imgAlt, children }: CardProps) {
  const safeSrc = encodeURI(imgSrc);
  return (
    <article className="card">
      <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="aspect-4-3">
          <Image src={safeSrc} alt={imgAlt} className="aspect-img" unoptimized width={600} height={450} />
        </div>
      </a>
      <div style={{ marginTop: '0.75rem' }}>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2 text-sm text-gray-700">{children}</div>
        <div className="mt-3">
          <a href={href} className="text-sm font-medium" style={{ color: 'var(--accent)' }}>{title === 'Employment' ? 'View Our Employment Application »' : title === 'Our Vessels' ? 'View Our Vessels »' : 'Contact Garber Bros Inc »'}</a>
        </div>
      </div>
    </article>
  );
}
