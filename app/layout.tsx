"use client";

import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <React.StrictMode>
          <Router>
            {children}
          </Router>
        </React.StrictMode>
      </body>
    </html>
  );
}
