import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

// multiple returns
const FetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null);

  useEffect(() => {
    const api = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`There was an error: ${res.status}`);
        }
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setIsError(true);
        console.log(err);
      }
      setIsLoading(false);
    };
    api();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>
  }
  if (isError) {
    return <h3>Error Fetching the data</h3>
  }
  return (
    <>
      <img style={{ width: "150px", borderRadius: "25px" }} src={user.avatar_url} alt={user.name} />
      <h3>{user.name}</h3>
      <h5>{user.company}</h5>
      <p>{user.bio}</p>
    </>
  );

};
export default FetchData;
