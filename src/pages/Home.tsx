import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <p>Welcome to the Home Page</p>
      <Link to="/playground">Go to Playground</Link>
    </>
  );
}
