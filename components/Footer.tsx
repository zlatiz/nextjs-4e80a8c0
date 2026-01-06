import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="py-6">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: 'var(--muted)' }}>© Copyright 2015 by <span style={{ color: 'var(--fg)' }}>Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div style={{ color: 'var(--muted)', textAlign: 'right' }}>
          <div><a href="/transparency-in-coverage">Transparency in Coverage</a></div>
          <div className="mt-2"><a href="http://www.goodhiring.com/garberbrosinc/apply/open">External Hiring</a> • <a href="contact.aspx">Contact (ASPX)</a></div>
        </div>
      </div>
    </footer>
  );
}
