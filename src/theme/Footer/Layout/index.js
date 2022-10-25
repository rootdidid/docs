import React, { useEffect } from 'react';
import Layout from '@theme-original/Footer/Layout';

export default function LayoutWrapper(props) {
  useEffect(() => {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/62d1e86fb0d10b6f3e7c9199/1g81v7tcs';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, [])
  return (
    <>
      <Layout {...props} />
    </>
  );
}
