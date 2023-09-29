import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const api = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    api();
  }, []);

  return (
    <section>
      <h3>Fetch Data</h3>
      <ul className="users">
        {user.map((users) => {
          const { id, login, avatar_url, html_url } = users;
          return (
            <li key={id}>
              <img src={avatar_url} alt="avatar" />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;

/**
 * fetching data using hooks
 * here useEffect is used to fetch the data
 * with useState to access the data
 * and then using map to visualize the data
 * 
 */