import './global.css';

export const metadata = {
  title: 'Tech Stacks - JS/TS Ecosystem',
  description: 'Explore modern JavaScript and TypeScript tech stacks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
