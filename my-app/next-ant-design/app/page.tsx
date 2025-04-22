'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    if (!cookies.authToken) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [router]);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the root page for authenticated users.</p>
    </div>
  );
};

export default HomePage;