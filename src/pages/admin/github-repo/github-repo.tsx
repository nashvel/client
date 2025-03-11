import React, { useEffect, useState } from "react";

const GITHUB_OWNER = "nashvel";
const REPO_NAME = "food-cuisine";

const GithubRepo: React.FC = () => {
  const [repoData, setRepoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${REPO_NAME}`)

      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch repository data");
        }
        return response.json();
      })
      .then((data) => {
        setRepoData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading repository data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">GitHub Repository</h2>
      {repoData && (
        <div className="p-5 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">{repoData.full_name}</h3>
          <p className="text-gray-600">{repoData.description}</p>
          <p className="mt-2"><strong>🌟 Stars:</strong> {repoData.stargazers_count}</p>
          <p><strong>🍴 Forks:</strong> {repoData.forks_count}</p>
          <p><strong>🐛 Issues:</strong> {repoData.open_issues_count}</p>
          <a
            href={repoData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default GithubRepo;
