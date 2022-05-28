import fiftyAlbumsJson from './50albums.json'
import fiftyPlaylistsJson from './50playlists.json'
import nextAlbumsJson from './nextAlbums.json'
import nextPlaylists from './nextPlaylists.json'
import trackJson from './track.json'
import lastPlayedTrackJson from './lastPlayedTrack.json'
import albumTracksJson from './albumTracks.json'
import playlistTracksJson from './playlistTracks.json'

function axios() {
  return Promise.resolve({
    data: {
      access_token: 'mY@cc3ssT0k3n',
      refresh_token: 'mYr3fr3chT0k3en'
    }
  })
}

axios.get = (url, options) => {
  if (options?.headers?.Authorization !== 'Bearer goodAccessToken') {
    return null
  }

  if (url === 'https://api.spotify.com/v1/me') {
    return Promise.resolve({
      data: {
        id: 'user123'
      }
    })
  }

  if (url === 'https://api.spotify.com/v1/me/albums?limit=50') {
    return Promise.resolve({
      data: {
        items: fiftyAlbumsJson
      }
    })
  }

  if (url === 'https://api.spotify.com/v1/me/albums?limit=50&offset=50') {
    return Promise.resolve({
      data: {
        items: nextAlbumsJson
      }
    })
  }

  if (url === 'https://api.spotify.com/v1/users/user123/playlists?limit=50') {
    return Promise.resolve({
      data: {
        items: fiftyPlaylistsJson
      }
    })
  }

  if (
    url ===
    'https://api.spotify.com/v1/users/user123/playlists?limit=50&offset=50'
  ) {
    return Promise.resolve({
      data: {
        items: nextPlaylists
      }
    })
  }

  if (url === 'https://api.spotify.com/v1/tracks/2EDUbDbIbqEnMmo3cPziLt') {
    return Promise.resolve({
      data: trackJson
    })
  }

  if (
    url ===
    'https://api.spotify.com/v1/me/player/recently-played?type=track&limit=1'
  ) {
    return Promise.resolve({
      data: lastPlayedTrackJson
    })
  }

  if (
    url === `https://api.spotify.com/v1/albums/3xybjP7r2VsWzwvDQipdM0/tracks`
  ) {
    return Promise.resolve({
      data: albumTracksJson
    })
  }

  if (
    url ===
    `https://api.spotify.com/v1/playlists/37i9dQZF1CApX1MvV9N0jE/tracks?limit=100`
  ) {
    return Promise.resolve({
      data: {
        items: playlistTracksJson
      }
    })
  }

  return null
}

axios.put = (url, _, options) => {
  if (options?.headers?.Authorization !== 'Bearer goodAccessToken') {
    return null
  }

  if (url === `https://api.spotify.com/v1/me/player/play`) {
    return Promise.resolve({
      status: 204
    })
  }

  return null
}

export default axios
