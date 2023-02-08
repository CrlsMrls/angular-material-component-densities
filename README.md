# MaterialComponents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

This Angular application imports multiple [Angular Material components](https://material.angular.io/) and applies material theming density.

Each tab applies a different density value.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Problems to highlight

### 1. Compilation error for low density values

With the **"@angular/material"** version **"15.1.3"**, when applying the density value globally, the Sass compiler throws errors for all values smaller than "**-2**"":

The code:

```css
@include mat.all-component-densities(-3);
```

The error:

```
Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
SassError: "mdc-density: height must be between 24px and 32px (inclusive), but received 20px."
╷
632 │     $height: density.prop-value(
  │ ┌────────────^
  633 │ │     $density-config: $density-config,
  634 │ │     $density-scale: $density-scale,
  635 │ │     $property-name: height,
  636 │ │   );
  │ └───^
  ╵
  @material/chips/_chip-theme.scss 632:12                                     density()
  node_modules/@angular/material/chips/_chips-theme.scss 97:5                 density()
  node_modules/@angular/material/core/density/private/_all-density.scss 59:3  all-component-densities()
  src/styles.scss 41:3
```

### 2. mat-label disappears when density < -1

The mat-labels disappear when the density of form-field is set to lower than -1.

The [GitHub ticket 26579](https://github.com/angular/components/issues/26579) in Angular repository is already tracking this.
