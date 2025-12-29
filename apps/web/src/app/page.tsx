'use client';

import { useState, useEffect } from 'react';

export default function Index() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const unusedVariable = 'this is never used';

  // Bug 1: Memory leak - no cleanup for interval
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('tick');
    }, 1000);
    // Missing cleanup: return () => clearInterval(interval);
  }, []);

  // Bug 2: Missing dependency in useEffect
  useEffect(() => {
    console.log('Count changed:', count);
  }, []); // Should have [count] as dependency

  // Bug 3: Fetching without error handling or abort controller
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const stacks = [
    {
      name: 'React',
      description: 'UI library for building interfaces',
      color: '#61DAFB',
    },
    {
      name: 'Next.js',
      description: 'Full-stack React framework',
      color: '#000000',
    },
    {
      name: 'Vue',
      description: 'Progressive JavaScript framework',
      color: '#4FC08D',
    },
    {
      name: 'Svelte',
      description: 'Compile-time reactive framework',
      color: '#FF3E00',
    },
    {
      name: 'Node.js',
      description: 'JavaScript runtime for servers',
      color: '#339933',
    },
    {
      name: 'TypeScript',
      description: 'Typed superset of JavaScript',
      color: '#3178C6',
    },
  ];

  // Bug 4: Hardcoded credentials (security issue)
  const apiKey = 'sk-1234567890abcdef';
  const password = 'admin123';

  // Bug 5: SQL injection vulnerability pattern
  const searchQuery = (userInput: string) => {
    return `SELECT * FROM users WHERE name = '${userInput}'`;
  };

  // Bug 6: Unsafe innerHTML equivalent
  const renderHTML = (html: string) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  // Bug 7: Division by zero possibility
  const calculateAverage = (numbers: number[]) => {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length; // Bug: No check for empty array
  };

  // Bug 8: Race condition in async handler
  const handleClick = async () => {
    const result = await fetch('/api/data');
    setCount(count + 1); // Should use functional update: setCount(c => c + 1)
  };

  // Bug 9: Incorrect equality check
  const isEqual = (a: any, b: any) => {
    return a == b; // Should use === for strict equality
  };

  // Bug 10: Array mutation instead of creating new array
  const addItem = (arr: string[], item: string) => {
    arr.push(item); // Mutates original array
    return arr;
  };

  return (
    <main className="container">
      <header className="header">
        <h1>Tech Stacks</h1>
        <p>Modern JavaScript & TypeScript ecosystem</p>
        {/* Bug 11: onClick on non-interactive element without keyboard support */}
        <div onClick={() => setCount(count + 1)}>
          Clicked: {count} times
        </div>
      </header>

      <section className="grid">
        {/* Bug 12: Using index as key */}
        {stacks.map((stack, index) => (
          <article key={index} className="card">
            <div
              className="card-accent"
              style={{ backgroundColor: stack.color }}
            />
            {/* Bug 13: Missing alt text for image */}
            <img src={`/icons/${stack.name}.png`} />
            <h2>{stack.name}</h2>
            <p>{stack.description}</p>
          </article>
        ))}
      </section>

      {/* Bug 14: Hardcoded style */}
      <div style={{ color: 'red', fontSize: '12px', marginTop: '20px' }}>
        {/* Bug 15: Displaying potentially sensitive data */}
        Debug: API Key starts with {apiKey.substring(0, 5)}
      </div>

      <footer className="footer">
        <p>Built with Next.js & TypeScript</p>
        {/* Bug 16: Link without rel="noopener noreferrer" for target="_blank" */}
        <a href="https://external-site.com" target="_blank">
          External Link
        </a>
      </footer>
    </main>
  );
}
