import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../components/breadcrums";
import Header from "../../../layouts/header";
import Sidemenu from "../../../layouts/sidemenu";

const GITHUB_OWNER = "nashvel";
const REPO_NAMES = ["food-cuisine", "admin", "user"]; 
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN; 

const GithubRepo: React.FC = () => {
  const [repoData, setRepoData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const responses = await Promise.all(
          REPO_NAMES.map((repo) =>
            fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${repo}`, {
              headers: {
                Authorization: `token ${TOKEN}`,
              },
            }).then((res) => {
              if (!res.ok) throw new Error(`Failed to fetch ${repo}`);
              return res.json();
            })
          )
        );
        setRepoData(responses);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  if (loading) return <p>Loading repository data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />
      <Sidemenu />

      <div
        className="main-content app-content"
        style={{
          background: "linear-gradient(135deg, #ffffff, #e3f2fd, #d1c4e9)",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div className="container-fluid">
          <Breadcrumb title="GitHub Repository" active="Repository Details" />
          <h2 className="text-2xl font-bold mb-4">GitHub Repositories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {repoData.map((repo, index) => (
              <div key={index} className="p-5 bg-white shadow rounded-lg">
                <h3 className="text-xl font-semibold">{repo.full_name}</h3>
                <p className="text-gray-600">{repo.description || "No description available"}</p>
                <p><strong>🌟 Stars:</strong> {repo.stargazers_count}</p>
                <p><strong>🍴 Forks:</strong> {repo.forks_count}</p>
                <p><strong>🐛 Issues:</strong> {repo.open_issues_count}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GithubRepo;
