import { fetchResultData, fetchCandidateData } from '../fakeAPI'; // Let's imagine this is an external service that we are calling via https

async function fetchResults() {
  const results = await fetchResultData();
  return results;
}

export async function fetchStaticCandidateData() {
  const candidateData = await fetchCandidateData();
  return candidateData;
}

export default fetchResults;