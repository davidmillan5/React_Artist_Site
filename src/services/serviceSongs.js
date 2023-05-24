export async function serviceSongs() {
  const URI = `https://api.spotify.com/v1/artists/6G43BFwUJvFWbev3knhgEa/top-tracks?market=ES`;
  const TOKEN = `Bearer BQC5pxjTdEYDR52G4oZUEt02cDm47CLshs6dZH7JHFWNYKUIzkqKdziTn-ji6Z0b-eEqFJGY3JfP4FAzuiwy91UpT4MXNrBOHhNQS1YgIH1_bOU9B_Y`;

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
