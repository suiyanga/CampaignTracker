'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Campaign {
  _id: string;
  name: string;
  description: string;
  deadline: string;
}

export default function CampaignListPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch('http://localhost:3001/campaigns');
        // If the request fails, this block might not be reached.
        console.log('Response status:', response.status);
        const text = await response.text();
        console.log('Raw response:', text);
        const data = JSON.parse(text);
        setCampaigns(data);
      } catch (err: any) {
        console.error('Error fetching campaigns:', err);
        setError(err.message || 'Unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };
  
    fetchCampaigns();
  }, []);
  
  

  if (loading) {
    return <p className="text-center mt-10">Loading campaigns...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Campaigns</h2>
      {campaigns.length === 0 ? (
        <p className="text-center">No campaigns found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {campaigns.map((campaign) => (
            <div key={campaign._id} className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition">
              <Link href={`/campaigns/${campaign._id}`} legacyBehavior>
                <a className="block text-2xl font-semibold text-blue-600 hover:underline">
                  {campaign.name}
                </a>
              </Link>
              <p className="mt-2 text-gray-700">
                Deadline: {new Date(campaign.deadline).toLocaleDateString()}
              </p>
              <p className="mt-2 text-gray-600">{campaign.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
