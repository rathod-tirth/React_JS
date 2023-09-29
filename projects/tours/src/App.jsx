import Tours from "./Tours"
import Loading from "./Loading"
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const url = 'https://course-api.com/react-tours-project';

  useEffect(() => { api() }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState(null);

  const api = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("There is an error");
      }
      const data = await res.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <Tours tours={tours} />
    </>
  )
}

export default App
