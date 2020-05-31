# Udutha UI [![NPM version][npm-image]][npm-url]

Udutha UI is an open source [Angular v9](https://github.com/angular) component library based on [Vanilla Framework](https://vanillaframework.io/) by [Canonical](https://canonical.com/).

## Installation

1.  Install the Angular package through npm:

    ```bash
    npm i @foa/udutha-ui
    ```

2.  Import the `UduthaUiModule` into your Angular application's module. 

    ```typescript
    // Sample app.module.ts
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { UduthaUiModule } from '@foa/udutha-ui';
    import { AppComponent } from './app.component';

    @NgModule({
        imports: [
            BrowserModule,
            UduthaUiModule,
         ],
         declarations: [ AppComponent ],
         bootstrap: [ AppComponent ]
    })
    export class AppModule {}
    ```
3. Add the following file to the styles array in `angular.json`
    ```javascript
     "styles": [
               "../node_modules/@foa/udutha-ui/src/lib/styles/udutha.scss"
           ]
    ```

## Documentation

Click [here](/docs/COMPONENTS.md) for documentation including a list of components, usage,
and examples.

## Feedback

If you find a bug or want to request a new feature, please open a [GitHub issue](https://github.com/fourthofaugust/udutha-ui/issues).

## Contributors
* [Phani Mahesh](https://github.com/fourthofaugust)
* [Aditya Peesapati](https://github.com/adityapeesapati)

## License

MIT


[npm-image]: https://badge.fury.io/js/udutha-ui.svg
[npm-url]: https://npmjs.org/package/@foa/udutha-ui
