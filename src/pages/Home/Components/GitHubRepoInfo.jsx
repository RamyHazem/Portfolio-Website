import React, { useEffect, useState } from "react";
import axios from "axios";

const GitHubRepoInfo = ({ repo }) => {
  const [stars, setStars] = useState(null);
  const [pullRequests, setPullRequests] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepoInfo = async () => {
      try {
        const token = import.meta.env.REACT_APP_GITHUB_TOKEN;

        // Fetch Repo Data
        const repoResponse = await axios.get(
          `https://api.github.com/repos/RamyHazem/${repo}`
          //   {
          //     headers: {
          //       Authorization: `token ${token}`,
          //     },
          //   }
        );
        setStars(repoResponse.data.stargazers_count);

        // const pullsResponse = await axios.get(
        //   `https://api.github.com/repos/RamyHazem/${repo}/pulls?state=open`
        // );
        // setPullRequests(pullsResponse.data.length);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };

    fetchRepoInfo();
  }, [repo]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-2">
      <h3>
        GitHub Repository: {owner}/{repo}
      </h3>
      <p>⭐ Stars: {stars}</p>
      <p>🔃 Open Pull Requests: {pullRequests}</p>
    </div>
  );
};

export default GitHubRepoInfo;
