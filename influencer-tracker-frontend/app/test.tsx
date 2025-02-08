// app/test.tsx
import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="p-4">
      <h1>Test Page</h1>
      <Link href="/campaigns" className="text-blue-600">
        Test Link
      </Link>
    </div>
  );
}
