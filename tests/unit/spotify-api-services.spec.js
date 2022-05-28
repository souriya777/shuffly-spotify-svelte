import {
  authorize,
  getTokens,
  getUserId,
  getMyAlbums,
  getMyPlaylists,
  getTrack,
  getLastPlayedTrack,
  getPlaylistTracks,
  getAlbumTracks,
  startOrResume
} from '@/services/spotify-api-services'
import TrackDto from '@/dto/TrackDto'

jest.mock('axios')

describe('authorize', () => {
  const { location } = window

  beforeAll(() => {
    delete window.location
    window.location = { reload: jest.fn() }
  })

  afterAll(() => {
    window.location = location
  })

  it(`redirect to spotify authorization url`, () => {
    authorize()

    expect(window.location).toEqual(
      'https://accounts.spotify.com/authorize?response_type=code&client_id=CLIENTID4TEST&scope=user-read-private%20user-read-email%20user-library-read%20playlist-read-private%20streaming%20user-read-recently-played%20user-modify-playback-state&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fspotify-tokens%2F'
    )
  })
})

describe('getTokens', () => {
  it(`return null if authorization code is nullish`, async () => {
    const result1 = await getTokens()
    expect(result1).toBeNull()
    const result2 = await getTokens(null)
    expect(result2).toBeNull()
  })

  it(`return an array with access token & refresh token`, async () => {
    const tokens = await getTokens('goodAuthorizationCode')
    expect(tokens).toEqual(['mY@cc3ssT0k3n', 'mYr3fr3chT0k3en'])
  })
})

describe('getUserId', () => {
  it(`returns null for wrong access token`, async () => {
    let result = await getUserId()
    expect(result).toBeNull()

    result = await getUserId(null)
    expect(result).toBeNull()

    result = await getUserId('wrongAccessToken')
    expect(result).toBeNull()
  })

  it(`returns a user ID for right access token`, async () => {
    const result = await getUserId('goodAccessToken')
    expect(result).toEqual('user123')
  })
})

describe('getMyAlbums', () => {
  it(`returns the 1st 50 albums`, async () => {
    const result = await getMyAlbums('goodAccessToken')
    expect(result).toHaveLength(50)

    const album = result[0]
    expect(album).toEqual({
      id: '3xybjP7r2VsWzwvDQipdM0',
      name: 'Freudian',
      artists: [
        {
          name: 'Daniel Caesar',
          href: 'https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA'
        }
      ],
      imageUrl:
        'https://i.scdn.co/image/ab67616d00001e023138f891f3075c9c5d944037',
      trackUris: [
        'spotify:track:7zFXmv6vqI4qOt4yGf3jYZ',
        'spotify:track:1RMJOxR6GRPsBHL8qeC2ux',
        'spotify:track:1Mza2sr6tPhy6jjI3HB9fW',
        'spotify:track:3SPfACAarZmNEF45erapCY',
        'spotify:track:59acp1OhcvxwVBwQJBYKuX',
        'spotify:track:1TPLsNVlofwX1txcE9gZZF',
        'spotify:track:0KyzXQhY2yzcb1FYCHkZc2',
        'spotify:track:3E895HtTn6lB40SA0l9EkL',
        'spotify:track:1jQfgl9WRle7D8a3GXLwaD',
        'spotify:track:4nESnAOALHmxg8UFCCtXhO'
      ]
    })
  })

  it(`returns the next 50 albums`, async () => {
    const result = await getMyAlbums('goodAccessToken', 50)
    expect(result).toHaveLength(17)

    expect(result[0]).toEqual({
      id: '0BPBVqsSju6mKjofZTojzB',
      name:
        'Chopin: Etudes (Complete) (Cortot, 78 Rpm Recordings, Vol. 3) (1933-1949)',
      artists: [
        {
          name: 'Frédéric Chopin',
          href: 'https://open.spotify.com/artist/7y97mc3bZRFXzT2szRM4L4'
        }
      ],
      imageUrl:
        'https://i.scdn.co/image/ab67616d00001e029b39c71387738b40ae3475c9',
      trackUris: [
        'spotify:track:3MfSWYDgXVrg6VZ3Ze3lUQ',
        'spotify:track:2uQ6rPRP7cM5IrSaM3I1ZF',
        'spotify:track:1qyzGGd8w8FqqEOIzusncc',
        'spotify:track:0qGFvw9x1SViyoMwvJ27yl',
        'spotify:track:5eNHx15NUu8cFpTbiPH2Ut',
        'spotify:track:5Skef8VE5mnvxDRLqsKODm',
        'spotify:track:48U0vqBPm3vgHZfNWtnADO',
        'spotify:track:10GFirPg7rs6tUIMjcCxJO',
        'spotify:track:3IEIipyC9ms89Nmxr3DeEh',
        'spotify:track:4LmmBcUlyY1JG4G3BBzCsU',
        'spotify:track:30GILViQ6gAkytLgUiMF8g',
        'spotify:track:6Z4oJ8ENtTWvGkqwiAYGfh',
        'spotify:track:48RFnkESJizKCgudAYPKld',
        'spotify:track:2BjFDW6DsUwlOHTwG8U8lI',
        'spotify:track:7cjWUTBFX6wPinek7b2JU0',
        'spotify:track:5RpfSq0TjiZu17pA8HwK6S',
        'spotify:track:7xxT8KJ2CH7wyTzw8kSfl9',
        'spotify:track:25LU24ojPq25YEUsj4oSXz',
        'spotify:track:4qfNLh8Z9PqsFsjGBaCx12',
        'spotify:track:45dUH8yVG64ys86ylR1pcy',
        'spotify:track:1SMdqOiLXunHlLFXZUwjCa',
        'spotify:track:4kbzXIO9UslqC8HkjHIILp',
        'spotify:track:4RWerioKmFV3PcjzpGB0WP',
        'spotify:track:55eo169awgXDL9oQf744dp',
        'spotify:track:5pY8NktnzoP2NRR144Kguw',
        'spotify:track:3rkhfEGqEBkSnsO5dBKvLs',
        'spotify:track:1VXH0iQZdUA2CydvMFsfYs',
        'spotify:track:0PAW8jzJB8HPfhSahzGX8i'
      ]
    })
  })
})

describe('getMyPlaylists', () => {
  it(`returns the 1st 50 playlists`, async () => {
    const result = await getMyPlaylists('goodAccessToken', 'user123')
    expect(result).toHaveLength(50)

    const playlist = result[0]
    expect(playlist).toEqual({
      id: '2QzZnYkPu9Dcvlh8gJE20J',
      name: 'Jascha Heifetz Bach 1001-1006',
      artists: [
        {
          name:
            'Please play with ascending order of added time for the best experience',
          href: 'https://api.spotify.com/v1/playlists/2QzZnYkPu9Dcvlh8gJE20J'
        }
      ],
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b273d41f4ee0976495e5b9339f53',
      trackUris: []
    })
  })

  it(`returns the next 50 playlist`, async () => {
    const result = await getMyPlaylists('goodAccessToken', 'user123', 50)
    expect(result).toHaveLength(46)

    const playlist = result[0]
    expect(playlist).toEqual({
      id: '5CJP48wgHBCVRRIQ9VaB6L',
      name: 'comédie 🎶(joie)',
      artists: [
        {
          name: 'Par laosoupi59',
          href: 'https://api.spotify.com/v1/playlists/5CJP48wgHBCVRRIQ9VaB6L'
        }
      ],
      imageUrl:
        'https://mosaic.scdn.co/300/ab67616d0000b2730bdf4dd39843ad48c5b66bc4ab67616d0000b27345ec2531f00be5f33074d858ab67616d0000b273a9ac825cee5e3985ea9d449dab67616d0000b273b68df485f3304211904548a8',
      trackUris: []
    })
  })
})

describe('getTrack', () => {
  it('returns a track', async () => {
    const result = await getTrack(
      'goodAccessToken',
      'spotify:track:2EDUbDbIbqEnMmo3cPziLt'
    )
    const expected = new TrackDto({
      id: '11dFghVXANMlKmJXsNCbNl',
      name: 'Cut To The Feeling',
      artists: [
        {
          name: 'Carly Rae Jepsen',
          href: 'https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju'
        }
      ],
      imageUrl:
        'https://i.scdn.co/image/107819f5dc557d5d0a4b216781c6ec1b2f3c5ab2',
      trackUri: 'spotify:track:11dFghVXANMlKmJXsNCbNl',
      albumUri: 'spotify:album:0tGPJ0bkWOUmH7MEOR77qc'
    })
    expect(result).toEqual(expected)
  })
})

describe('getLastPlayedTrack', () => {
  it(`returns the last played track`, async () => {
    const result = await getLastPlayedTrack('goodAccessToken')

    const expected = new TrackDto({
      artists: [
        {
          href: 'https://open.spotify.com/artist/4QTd2YuZS6ShgqWfeREdB3',
          name: 'John Lloyd Young'
        }
      ],
      id: '41W6iBQARJMEC9NxIn2nE3',
      imageUrl:
        'https://i.scdn.co/image/ab67616d00001e02a9ac825cee5e3985ea9d449d',
      name: 'Walk Like a Man',
      trackUri: 'spotify:track:41W6iBQARJMEC9NxIn2nE3',
      albumUri: 'spotify:album:7oWx4auBp2kCb54VkRCCUq'
    })

    expect(result).toEqual(expected)
  })
})

describe('getPlaylistTracks', () => {
  it(`returns tracks of the playlist`, async () => {
    const result = await getPlaylistTracks(
      'goodAccessToken',
      '37i9dQZF1CApX1MvV9N0jE'
    )
    expect(result).toHaveLength(100)

    const firstTrack = result[0]
    expect(firstTrack).toEqual('spotify:track:3pJnfyKoVePwVmljB6Wun1')
  })
})

describe('getAlbumTracks', () => {
  it(`returns all tracks for an album`, async () => {
    const result = await getAlbumTracks(
      'goodAccessToken',
      'spotify:album:3xybjP7r2VsWzwvDQipdM0'
    )
    expect(result).toEqual([
      'spotify:track:7zFXmv6vqI4qOt4yGf3jYZ',
      'spotify:track:1RMJOxR6GRPsBHL8qeC2ux',
      'spotify:track:1Mza2sr6tPhy6jjI3HB9fW',
      'spotify:track:3SPfACAarZmNEF45erapCY',
      'spotify:track:59acp1OhcvxwVBwQJBYKuX',
      'spotify:track:1TPLsNVlofwX1txcE9gZZF',
      'spotify:track:0KyzXQhY2yzcb1FYCHkZc2',
      'spotify:track:3E895HtTn6lB40SA0l9EkL',
      'spotify:track:1jQfgl9WRle7D8a3GXLwaD',
      'spotify:track:4nESnAOALHmxg8UFCCtXhO'
    ])
  })
})

describe('startOrResume', () => {
  it(`start the music and returns 204 status code`, async () => {
    const response = await startOrResume('goodAccessToken')
    expect(response.status).toEqual(204)
  })
})
