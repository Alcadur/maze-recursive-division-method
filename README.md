## Description

This is maze generator using Recursive division method ([wiki](https://en.wikipedia.org/wiki/Maze_generation_algorithm))


To generate maze you can enter one size (default size: 50) and click `generate` button to start.
After generate maze you can also find solution (examples times below).

There is no need to run any server, just download `dist` content and open `index.html`
## Commands

`npm start` - start webpack dev server <br>
`npm run build` - build project to `dist`directory

## Examples

- 25x25 cells - with animation: 2s 50ms, instant: 56ms
![alt text](readme_assets/maze-25x25.png "25x25-7673")
- 50x50 cells - with animation: 9s 91ms, instant: 100ms
![alt text](readme_assets/maze-50x50.png "50x50-57118ms")
- 100x100 cells - with animation: 57s 395ms, instant: 205ms
![alt text](readme_assets/maze-100x100.png "100x100-751686ms")


## Walkthrough timing

- 25x25 cells - with animation: 10s 822ms, instant: 9ms
![alt text](readme_assets/maze-25x25-walkthrough.png "25x25-4530")
- 50x50 cells - with animation: 40s 454ms, instant: 13ms
![alt text](readme_assets/maze-50x50-walkthrough.png "50x50-109007")
- 100x100 cells - with animation: 2min 38s 7ms,instant: 24ms
![alt text](readme_assets/maze-100x100-walkthrough.png "100x100-3605498")