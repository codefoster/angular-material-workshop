## Libraries + Modules + Themes

#### Step #1.1: Create a Custom Material Modules

In this step we will install Angular Material in your Angular application.

> Developers are no longer able to simply load `MaterialModule`; as this would load all Material components and prevent build-time tree-shaking used to remove unused components.

We want to only load the Material components will will be using. To easily manage this, 
we will use a separate, custom MaterialModule.
  
Create a `material.module.ts` file next to your `app.module.ts`

###### File: `src/app/material.module.ts`
```ts
import {NgModule} from '@angular/core';
import {
  MatButtonModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule
  ]
})
export class MaterialModule {}

```

> !! Material Beta.11 has changed the prefixes from `Md` to `Mat`. e.g. `MatButtonModule`

* Export these same component modules so they are available for usages in our application  
  > Note this imports and re-exports here hide the complexity of which components are used in our application.
  
#### Step #1.2: Flex-Layout Module
  
Since we will also be using flexbox CSS for your UI layout and responsive features, let's include 
the `@angular/flex-layout` library. 

> The current npm release **@angular/flex-layout v2.0.0-beta.9** does not, however, work with Angular 5.

Normally we would use:

```terminal
npm install @angular/material @angular/flex-layout --save
```
 
For now, we will install the latest, nightly build from Github using:
```terminal
npm i git+https://git@github.com/angular/flex-layout-builds#2.0.0-beta.9-f978b94 --save
``` 

#### Step #1.3: Module Configurations

Update our application *ngModule* to use Angular Material and FlexLayout in the application.

* Since Angular Material depends on animations, the `BrowserAnimationsModule` needs to be included as well.
* Import `MaterialModule` from `src/app/material.module.ts` and use it inside the imports
* Import `FlexLayoutModule` from `@angular/flex-layout`

###### File: `src/app/app.module.ts`

```ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

#### Step #1.3: Material CSS 

We will import a Angular Material prebuilt theme file. A theme is the set of colors that will be applied to the Angular Material components. 
The Angular Material library's approach to theming is based on the guidance from the Material Design spec.

>  Developers should read [Theming your Angular Material app](https://github.com/angular/material2/blob/master/guides/theming.md) for more info

Let's make sure we use the default, preb-build Material theme and install the Material Icons and fonts.
Then we can specify initial CSS for our application.

> We can do all this in the application global stylesheet `styles.css`. 

###### File: `src/styles.css`

```css
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import "https://fonts.googleapis.com/css?family=Material+Icons";
@import "https://fonts.googleapis.com/css?family=Roboto:400,300";
 
html, body {
  display: flex;
  flex-direction: column;

  font-family: Roboto, Arial, sans-serif;
  margin: 0;
  height: 100%;
}
```

<br/>

---

<br/>

### Tips

#### 1. FlexLayout + Body

We use flex properties on the `html` and `body` because they are not part of what markup `<app-root>Loading...</app-root>` that Angular bootstraps. 
>  This can be easily enough be fixed when bootstrapping a component that has `body` as selector. 

###### File: `src/app/app.component.ts`

```js
@Component({
  selector: 'body',
  template: '<h1> {{title}} </h1>'
})
export class AppComponent {
  title = 'Angular Material Master Class';
}
```

---
  
[Go to Tutorial Step 2](./STEP_2.md)

