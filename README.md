# FrontOctoAdventure
This project is meant as a front end for a web app that ressembles a game.

## Setting the size of the field grid
The field grid is meant to be the your playground. It's a Angular Material that display a matrix of images. This images must be mapped (pending). This mapping should be bound to a tile set so a cohesive dungeon can be displayed. Only a fraction of the matrix must be show. The grid must pan along with the player movements (also pending).

To set the size of the matrix show set the following variables in the `src/environments/environments.ts` file:
```
{
  columns: 9,
  rows: 9
}
```
These constants must be of type **number**.


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
