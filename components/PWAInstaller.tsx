'use client';

import { useEffect } from 'react';

const PWAInstaller = () => {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Handle PWA install prompt
    let deferredPrompt: any;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      deferredPrompt = e;
      
      // Show install button or banner
      console.log('PWA install prompt available');
    });

    // Handle PWA installation
    window.addEventListener('appinstalled', (evt) => {
      console.log('PWA was installed');
    });

    // Handle online/offline status
    const updateOnlineStatus = () => {
      if (navigator.onLine) {
        console.log('App is online');
      } else {
        console.log('App is offline');
      }
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Cleanup
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PWAInstaller;
