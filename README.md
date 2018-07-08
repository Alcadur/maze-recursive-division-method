## Description

This is maze generator using Recursive division method ([wiki](https://en.wikipedia.org/wiki/Maze_generation_algorithm))

Currently after open `index.html` from `dist` it will start generate maze with size 50x50. 
To change size you have to change `NUMBER_OF_CELLS_AND_ROWS` property in `src/config.js` and rebuild or start dev server.

## Commands

`npm start` - start webpack dev server <br>
`npm run build` - build project to `dist`directory

## Examples

- 25x25 cells - 0:07:673 min
![alt text](readme_assets/maze-25x25.png "25x25-7673")
- 50x50 cells - 0:57:118 min
![alt text](readme_assets/maze-50x50.png "50x50-57118ms")
- 100x100 cells - 12:31:686 min
![alt text](readme_assets/maze-100x100.png "100x100-751686ms")
