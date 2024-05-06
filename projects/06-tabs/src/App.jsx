import { useEffect } from "react";
import { useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)

  const handleFetch = async () => {
    try {
      const resp = await fetch(url)
      const newData = await resp.json()
      setData(newData)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => { handleFetch() }, [])

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    )
  }
  return (
    <section className="jobs-center">
      <BtnContainer data={data} setCurrentItem={setCurrentItem} currentItem={currentItem} />
      <JobInfo data={data} currentItem={currentItem} />
    </section>
  )
};
export default App;
