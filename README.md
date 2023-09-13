# MaterialComponents

This Angular application (`@angular/material@"16.2.4"` and `@angular/core@16.2.5`) shows how the density theming configuration affects the [Angular Material components](https://material.angular.io/).

The goal of this repository is to analyze how to approach the different density options for Angular material, and highlight two problems with the latest version.

This application is available at: https://angular-material-density.netlify.app

## Development and build

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Problems to highlight

### 1. Compilation error for low density values - RESOLVED

For earlier versions (**@angular/material v15.2.2**), the compiler did not allow to set the density globally for values smaller than **-2**.

**@angular/material v15.2.2** and later versions allow it. Thanks to https://github.com/mmalerba/ for fixing the bug. [GitHub ticket 26613](https://github.com/angular/components/issues/26613).

### 2. mat-label disappears when density < -1

The mat-labels disappear when the density of form-field is set to lower than -1.

The [GitHub ticket 26579](https://github.com/angular/components/issues/26579) in Angular repository is already tracking this.
