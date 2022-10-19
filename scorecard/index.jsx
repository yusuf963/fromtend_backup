
import {useState, useEffect} from 'react'
import {fetchStaticCandidateData} from '../../dataFetcher';
import './Scorecard.css';

function Scorecard({ results, countCompleted }) {
  const [candidateData, setCandidateData] = useState([]);
  const [winner, setWinner] =useState(0)

  async function getData() {
    try {
      const candidateData = await fetchStaticCandidateData();
      setCandidateData(candidateData)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(()=>{
    getData()
  },[])

  for( let i=0; i< results?.length; i++){
    if(Number(results[i].votes) > winner){
      setWinner(Number(results[i].votes))
    }
  }
  const setTheWinner = (i)=>{
   const cssClass = countCompleted && Number(results[i].votes) === winner ? "winner" : ""
   return cssClass
  }


  if (!results || results.length === 0) {
    return <div>No results</div>;
  }

  let scores = [];
  for (let i=0; i < results.length; i++) {
    scores.push(
      <tr className={setTheWinner(i)} key={i}>
        <td>{results[i].party}</td>
        <td>{candidateData && candidateData[i]?.name }</td>
        <td >{results[i].votes}</td>
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
