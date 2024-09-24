import React, { useState, useEffect } from 'react';

function HelloWorld() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <p>{message}</p>
    </div>
  );
}

export default HelloWorld;