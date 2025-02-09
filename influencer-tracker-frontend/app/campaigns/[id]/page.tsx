'use client';

import { useEffect, useState, FormEvent } from 'react';
import { useParams } from 'next/navigation';

interface Campaign {
  _id: string;
  name: string;
  description: string;
  deadline: string;
}

export default function CampaignDetailsPage() {
  const { id } = useParams();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submission, setSubmission] = useState('');
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchCampaign = async () => {
      try {
        const response = await fetch(`http://localhost:3001/campaigns/${id}`);
        if (!response.ok) {
          throw new Error(`Error fetching campaign: ${response.statusText}`);
        }
        const data = await response.json();
        setCampaign(data);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : 'Unexpected error occurred while fetching campaign';
        console.error(err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch(`http://localhost:3001/campaigns/${id}/submission`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: submission,
          influencerId: 'example-influencer-id',
        }),
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.statusText}`);
      }

      const result = await response.json();
      setSubmitSuccess(result.message || 'Submission successful!');
      setSubmission('');
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Submission failed due to an unexpected error.';
      console.error(err);
      setSubmitError(errorMessage);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading campaign details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;
  }

  if (!campaign) {
    return <p className="text-center mt-10">No campaign found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{campaign.name}</h1>
      <p className="text-gray-700">
        <strong>Deadline:</strong>{' '}
        {new Date(campaign.deadline).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <p className="mt-2 text-gray-800">{campaign.description}</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">Submit Your Campaign Content</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="submission" className="block font-medium">
          Content (e.g., TikTok link):
        </label>
        <textarea
          id="submission"
          value={submission}
          onChange={(e) => setSubmission(e.target.value)}
          rows={4}
          className="w-full p-2 border rounded"
          placeholder="Enter your content or link here..."
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      {submitError && <p className="text-red-500 mt-4">Error: {submitError}</p>}
      {submitSuccess && <p className="text-green-500 mt-4">{submitSuccess}</p>}
    </div>
  );
}
