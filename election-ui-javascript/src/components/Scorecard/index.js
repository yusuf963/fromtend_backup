import { useState, useEffect } from 'react';
import { fetchStaticCandidateData } from '../../dataFetcher'
import './Scorecard.css';

function Scorecard({ results }) {
  const [candidateData, setCandidateData] = useState([])
  const [winner, setWinner] = useState(0)


  const getData = async () => {
    const data = await fetchStaticCandidateData()
    setCandidateData(data)
  }
  useEffect(() => {
    getData()
  }, [])
  if (!results || results.length === 0) {
    return <div>No results</div>;
  }


  
  let scores = [];
  for (let i = 0; i < results.length; i++) {
    scores.push(
      <tr  key={i}>
        <td>{results[i].party}</td>
        <td>{candidateData && candidateData[i]?.name}</td>
        <td>{results[i].votes}</td>
      </tr>
    )
  }

  return (
    <div className="Scorecard">
      <table className="Scorecard-table">
        <thead>
          <tr>
            <th>Party</th>
            <th>Candidate</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {scores}
        </tbody>
      </table>
    </div>
  );
}

export default Scorecard;
