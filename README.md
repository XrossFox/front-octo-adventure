# FrontOctoAdventure
This project is meant as a front end for a web app that ressembles a game.

## Setting the size of the field grid
The field grid is meant to be the your playground. It's a Angular Material that display a matrix of images. This images must be mapped. This mapping should be bound to a tile set so a cohesive dungeon can be displayed. Only a fraction of the matrix must be show. The grid must pan along with the player movements (also pending). Remember to set the tileSize, since it is required to set the size of the grid, otherwise they will not be displayed correctly. The field grid doesn't need to be a square (n*n).

To set the size of the matrix show set the following variables in the `src/assets/asset-mapping/map.json` file:
```json
{
    "displayRows": 10,
    "displayCols": 10,
    "fieldRows": 9,
    "fieldCols": 9,
    "tileSize": 32,
}
```
These constants must be of type **number**. Also note that the display values are for the displayed area of the actual size of the field grid. That is, only a selected area of the total matrix is displayed. The field grid is meant to be panned as needed. In case the field grid matrix is smaller that the display area, then the remaining space is filled by empty tiles (also mapped in the json file).

![10x10 10x10](front-octo-adventure\screenshots\10x10_10x10FrontOctoAdventure.png?raw=true "A 9 by 9 field displayed in a 10 by 10 area")

![10x10 9x9](front-octo-adventure\screenshots\10x10_9x9FrontOctoAdventure.png?raw=true "A 9 by 9 field displayed in a 10 by 10 area")

![10x10 15x15](front-octo-adventure\screenshots\10x10_15x15FrontOctoAdventure.png?raw=true "A 15 by 15 field displayed in a 10 by 10 area")

## Mapping Tiles

In the same file: `src/assets/asset-mapping/map.json` you must add the tiles you have available. The tiles themselves must be placed `src/assets/tilesets/<yout-tiles-directory>`. Then you must map your tiles like this:
```json
{
    "CUL":"assets/tilesets/dungeon/tile000.png",
    "UpB":"assets/tilesets/dungeon/tile001.png",
    "CUR":"assets/tilesets/dungeon/tile002.png",
    "LfB":"assets/tilesets/dungeon/tile016.png",
    "RgB":"assets/tilesets/dungeon/tile018.png",
    "CDL":"assets/tilesets/dungeon/tile032.png",
    "LwB":"assets/tilesets/dungeon/tile033.png",
    "CDR":"assets/tilesets/dungeon/tile034.png",
    "ST1":"assets/tilesets/dungeon/tile092.png",
    "ST2":"assets/tilesets/dungeon/tile088.png",
    "ST3":"assets/tilesets/dungeon/tile089.png",
    "ST4":"assets/tilesets/dungeon/tile090.png",
    "ST5":"assets/tilesets/dungeon/tile091.png",
    "DR1":"assets/tilesets/dungeon/tile170.png",
    "DR2":"assets/tilesets/dungeon/tile171.png",
    "DR3":"assets/tilesets/dungeon/tile172.png",
    "DR4":"assets/tilesets/dungeon/tile173.png",
    "DR5":"assets/tilesets/dungeon/tile174.png",
    "blankTile": "assets/tilesets/dungeon/tile272.png"
}
```

Remember that the **keys** of the tile values must match the **values** of the map file in the back-end.

## Back-End URL
To set up the base URL for the back end, in the map.json file set the property `GetFieldMatrixURL` with the actual value (and port).
`"GetFieldMatrixURL": "https://localhost:44307/fieldmatrix"`

# Angular CLI auto-generated stuff (just in case)

## FrontOctoAdventure

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
