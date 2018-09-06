# TuneStorm

> This is the Related Tracks microservice of a song streaming page inspired by SoundCloud.

It contains a list of 3 related tracks for the current track. Some dynamic features of each track listing include play & pause buttons, a 'like' button, and a drop-down menu containing buttons for adding to queue or a playlist, playing the related station, reposting, and sharing. Each track also displays stats for plays, likes, reposts, and comments. When a user clicks on a track, it rerenders the track list to show the related tracks for the clicked song.

Album cover photos are hosted on S3 and a deployed MongoDB database is hosted on mLab.

## Related Projects

  - https://github.com/TuneStorm/ArtistSongDescription
  - https://github.com/TuneStorm/Comments
  - https://github.com/TuneStorm/ProxyServer-giuliacampana

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

