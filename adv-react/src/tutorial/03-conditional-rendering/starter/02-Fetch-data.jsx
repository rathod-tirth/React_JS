import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

// multiple returns
const FetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

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
  useEffect(() => { api() }, []);

  if (isLoading) {
    return <h3>Loading...</h3>
  }
  if (isError) {
    return <h3>Error Fetching the data</h3>
  }
  const { avatar_url, name, company, bio } = user;
  return (
    <>
      <img style={{ width: "150px", borderRadius: "25px" }} src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <h5>{company}</h5>
      <p>{bio}</p>
    </>
  );

};
export default FetchData;

/**
 * there are multiple ways of writing the code above
 * ex. 1. remove isLoading and use (!user) instead
 *     2. destructure above by giving "{}" to user, etc.
 * 
 * three states:
 *  1. Loading
 *  2. Error
 *  3. Success
 * 
 * 
 */