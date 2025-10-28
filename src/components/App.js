import React, { useState, useEffect } from 'react';

function App() {
  const [images, setImages] = useState();
  const [isLoaded, setisLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect (() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json()
        setImages(data)
      } catch (error) {
        setisLoaded(true);
        setError(error);
      } finally {
        setisLoaded(true);
      }
    }

    fetchData();

    /* fetch("https://dog.ceo/api/breeds/image/random")
      .then(r => r.json())
      .then(
        data => {
          setisLoaded(true);
          setImages(data);
          console.log(data);
        },
        (error) => {
          setisLoaded(true);
          setError(error);
        }
      )*/
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>
  }else if (!isLoaded) {
    return <p>"Loading..."</p>
  }else {
    return <img src={images.message} alt="A Random Dog" />
  }

}

export default App;
