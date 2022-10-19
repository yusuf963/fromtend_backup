import React, { useState, useEffect } from 'react';
import Logo from './logo/logo';
import fetchData from '../dataFetcher';
import Scorecard from './Scorecard';
import './Scoreboard.css';
import PartyLinks from "./PartyLinks";
import Snackbar from "./Snackbar"

function Scoreboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [refresh, setRefresh] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  async function getData() {
    try {
      setLoading(true);
      const resultData = await fetchData();
      setIsComplete(resultData.isComplete)
      setResults(resultData.results);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }

  const handelRefresh = () => {
    setRefresh(refresh + 1)
  }

  useEffect(() => {
    getData();
  }, [refresh]);

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
                {isComplete && <Snackbar message={'Counting has been completed'} variant={'info'} />}
                <Scorecard results={results} />
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
