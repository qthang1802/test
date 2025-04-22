'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';

const HomePage = () => {
  const router = useRouter();
  const cookies = parseCookies();

  if (!cookies.authToken) {
    // Redirect to login if not authenticated
    router.push('/login');
    return null; // Prevent rendering while redirecting
  }

  // Redirect to /home if authenticated
  router.push('/home');
  return null; // Prevent rendering while redirecting
};

export default HomePage;