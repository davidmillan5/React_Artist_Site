import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CLIENT_ID = 'c4e4d2868b494d09b6c3cc58ee500090';
const CLIENT_SECRECT = '4913008ece8f45a9913114fc98f5f1bd';

export function SearchTracks() {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'grant_type=client_credentials&client_id=' +
        CLIENT_ID +
        '&client_secret=' +
        CLIENT_SECRECT,
    };
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  // Search Function

  async function search() {
    console.log('Search for ' + searchInput);

    // Get Request using search to get the Artist ID
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };
    var artistID = await fetch(
      'https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist',
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
        console.log('data.artist-> ' + data.artists.items[0].id);
      });

    console.log('Artist ID is ' + artistID);
    // Get request with Artist ID grab all the tracks from the artist
    var returnedTracks = await fetch(
      'https://api.spotify.com/v1/artists/' +
        artistID +
        '/top-tracks' +
        '?market=ES',
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('data');
        console.log(data);
        setTracks(data.tracks);
        console.log('tracks---> ' + tracks);
      });

    // Display Those Tracks to The Users
  }

  // Miliseconds to minutes and seconds

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
  const popularity = (ratings) => {
    if (ratings < 20) {
      return (
        <>
          <i class="bi bi-star-fill"></i>
        </>
      );
    } else if (ratings < 40) {
      return (
        <>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </>
      );
    } else if (ratings < 60) {
      return (
        <>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </>
      );
    } else if (ratings < 80) {
      return (
        <>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </>
      );
    } else {
      return (
        <>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </>
      );
    }
  };

  return (
    <>
      <Container className="my-5 mx-auto px-5">
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search For Artist"
            type="input"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          ></FormControl>
          <Button onClick={search} className="btn-dark">
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {tracks.map((track) => {
            return (
              <Card key={track.id} className="m-5 p-4 text-center">
                <Card.Title className="">{track.name}</Card.Title>
                <Card.Img src={track.album.images[0].url} />
                <Card.Body>
                  {/* <Card.Title className="">{track.name}</Card.Title> */}
                  <Card.Title>{track.album.name}</Card.Title>
                  <Card.Subtitle className="my-2">
                    {track.album.artists[0].name}
                  </Card.Subtitle>
                  <Card.Subtitle className="my-2">
                    {' '}
                    Duration:
                    <span> </span>
                    {millisToMinutesAndSeconds(track.duration_ms)}
                  </Card.Subtitle>
                  <Card.Subtitle className="my-2">
                    {' '}
                    Rating:
                    <span> </span>
                    {popularity(track.popularity)}
                  </Card.Subtitle>
                  <audio
                    controls
                    src={track.preview_url}
                    className="pe-5 mt-4 position-relative d-flex justify-content-around"
                    id="audio"
                  ></audio>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
