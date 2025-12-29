export default function Index() {
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

  return (
    <main className="container">
      <header className="header">
        <h1>Tech Stacks</h1>
        <p>Modern JavaScript & TypeScript ecosystem</p>
      </header>

      <section className="grid">
        {stacks.map((stack) => (
          <article key={stack.name} className="card">
            <div
              className="card-accent"
              style={{ backgroundColor: stack.color }}
            />
            <h2>{stack.name}</h2>
            <p>{stack.description}</p>
          </article>
        ))}
      </section>

      <footer className="footer">
        <p>Built with Next.js & TypeScript</p>
      </footer>
    </main>
  );
}
