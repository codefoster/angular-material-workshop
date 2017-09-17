## Custom Themes

When you want more customization than a pre-built theme offers, you can create your own theme file.

A custom theme file does two things:

*  Imports the mat-core() sass mixin. This includes all common styles that are used by multiple components. This should only be included once in your application. If this mixin is included multiple times, your application will end up with multiple copies of these common styles.
*  Defines a theme data structure as the composition of multiple palettes. This object can be created with either the mat-light-theme function or the mat-dark-theme function. The output of this function is then passed to the angular-material-theme mixin, which will output all of the corresponding styles for the theme.

Angular Material provides us `scss` mixins to change and manipulate its theming and typography systems.  


#### Step #10.1: Custom Themes with Mixins

Add themes with the [theming mixins](https://material.angular.io/guide/theming) provided by Material.

##### File: `src/theme.scss`

```scss
@import '~@angular/material/_theming';
@include mat-core();

$primary: mat-palette($mat-red);
$accent : mat-palette($mat-blue);
$theme  : mat-light-theme($primary, $accent);

@include angular-material-theme($theme);
```

> You can choose your palettes out of the [Material Design Color Palettes spec](https://material.io/guidelines/style/color.html)

#### Step #10.2: Custom Typography

Typography is a way of arranging type to make text legible, readable, and appealing when displayed.
Angular Material's typography is based on the guidelines from the [Material Design spec][1] and is
arranged into typography levels. Each level has a `font-size`, `line-height` and `font-weight`. The
available levels are:

* `display-4`, `display-3`, `display-2` and `display-1` - Large, one-off headers, usually
at the top of the page (e.g. a hero header).
* `headline` - Section heading corresponding to the `<h1>` tag.
* `title` - Section heading corresponding to the `<h2>` tag.
* `subheading-2` - Section heading corresponding to the `<h3>` tag.
* `subheading-1` - Section heading corresponding to the `<h4>` tag.
* `body-1` - Base body text.
* `body-2` - Bolder body text.
* `caption` - Smaller body and hint text.
* `button` - Buttons and anchors.

The typography levels are collected into a typography config which is used to generate the CSS.

You can easily change your application typography with the provided mixins.

##### File: `src/typography.scss`

```scss
@import '~@angular/material/_theming';

$my-typography: mat-typography-config(
  $headline: mat-typography-level(58px, 50px, 900)
);

@include angular-material-typography($my-typography);
```

#### Step #10.3: Using Custom Typography 

And in your `html` whenever you will use `mat-headline` you will get the overridden style.  

```html
<h1>This is unstyled</h1>
<h1 class="mat-headline">This is styled</h1>
```

You can also create your own styles with topography

```scss
.my-selector {
  font-size: mat-font-size($my-typography, headline);
}
```

Now, every time you will use `.my-selector` you will get the `h1` styles

```html
<span class="my-selector">I have the font size of h1!</span>
```

But what if you want it all to be automatic?

For that you can use `mat-typography` class and it would automatically apply styles to all children elements

```html
<section class="mat-typography">
  <h1>This is styled better!</h1>
</section>
```

≈

Tell **angular-cli** to also compile the themes and the typography files, because angular-cli uses webpack,
The Angular CLI has a built-in plugin to compile scss for us, so all we have to do is include it in the styles section.

###### File: `.angular-cli.json`

```json
{
  "apps": [
    {
      "styles": [
        "styles.css",
        "theme.scss",
        "typography.scss"
      ]
    }
  ]
}
```

#### Step #10.4: PreBuilt Theme

The prebuilt theme that has been included in *Step 1* is now unused and can be deleted. 

Shown below is the CSS import line to **remove**.

###### File: `./styles.css`

```css
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
```
----

### Tips

#### 1. Angular CLI

The Angular CLI won't notice the changes in the `.angular-cli.json` file. Restarting the
  serve task will do the trick.

---

[Go to Tutorial Step 9](STEP_9.md)
