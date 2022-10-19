import React, { useState, useEffect } from 'react';
import Logo from './logo/logo';
import fetchData from '../dataFetcher';
import Scorecard from './Scorecard';
import './Scoreboard.css';
import PartyLinks from "./PartyLinks";
import Snackbar from "./SnackBar"

function Scoreboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [refresh, setRefresh] = useState(0)
  const [countCompleted, setCountComplete] = useState(false)

  async function getData() {
    try {
      setLoading(true);
      const resultData = await fetchData();
      setResults(resultData.results);
      setCountComplete(resultData.isComplete)
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    getData();
  }, [refresh]);

  const handelRefresh =()=>{
    setRefresh(refresh +1)
  }

  return (
    <div className="Scoreboard">
      <header className="Election-scoreboard-header">
        <Logo language="en" />
      </header>
      <main>
        {
          loading ? <h2>Loading...</h2> :
          error ? <h1>Error</h1> :
          <>

            <h1>Results</h1>
            {countCompleted && <Snackbar message={'Counting votes has been finished'} variant='info' />}
            <Scorecard results={results} countCompleted={countCompleted} />
            <button onClick={handelRefresh} className="Scoreboard-refresh">Refresh</button>
            <h1>Learn more about the parties...</h1>
            <PartyLinks />
          </>
        }
      </main>
    </div>
  );
}

export default Scoreboard;