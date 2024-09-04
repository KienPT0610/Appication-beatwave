"use client";

import React from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <React.StrictMode>
            {children}
        </React.StrictMode>
      </body>
    </html>
  );
}
