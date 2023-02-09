# MaterialComponents

This Angular application shows how the density theming configuration affects the [Angular Material components](https://material.angular.io/).

The goal of this repository is to analyze how to approach the different density options for Angular material, and highlight two problems with the latest version.

This application is available at: https://angular-material-density.netlify.app

## Development and build

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Problems to highlight

### 1. Compilation error for low density values

Currently (**@angular/material v15.1.3**), the compiler does not allow to set the density globally for values smaller than **-2**.

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

This should be possible based on [Material documentation about Density scale](href="https://m3.material.io/foundations/layout/understanding-layout/spacing#da94f612-f274-49ab-aec5-f03dab53be8e): `The density scale is numbered, starting at 0 for a component’s default density. The scale moves to negative numbers (-1, -2, -3) as space decreases, creating higher density.`

### 2. mat-label disappears when density < -1

The mat-labels disappear when the density of form-field is set to lower than -1.

The [GitHub ticket 26579](https://github.com/angular/components/issues/26579) in Angular repository is already tracking this.
