import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 text-center">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
        Welcome to Influencer Tracker
      </h2>
      <p className="mb-8 text-lg text-gray-700 max-w-2xl">
        Discover exciting campaigns tailored for influencers, track your submissions,
        and boost your performance. Get started by exploring available campaigns.
      </p>
      <Link href="/campaigns" legacyBehavior>
        <a className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition">
          Explore Campaigns
        </a>
      </Link>
    </div>
  );
}
