import { useRouter } from 'next/router';
import Navigation from './Navigation';

export default function MovementUndercommons() {
  const router = useRouter();

  return (
    <div>
      <Navigation />
    </div>
  );
}
