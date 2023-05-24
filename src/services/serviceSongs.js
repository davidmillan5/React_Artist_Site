export async function serviceSongs() {
  const URI = `https://api.spotify.com/v1/artists/6G43BFwUJvFWbev3knhgEa/top-tracks?market=ES`;
  const TOKEN = `Bearer BQCc4QCTCWzSOvdX5qdfeVNDTbfsdphlN9w7m1vmwoy_AgXHCn89tEXnlmMco3t-fn6ceUZ4SohCV_xeokjzClOyAIbokv0Ag-YquuFDeqff1LJImcc`;

  let request = {
    method: 'GET',
    headers: {
      Authorization: TOKEN,
    },
  };

  let response = await fetch(URI, request);
  let songs = await response.json();

  return songs;
}
