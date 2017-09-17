
## Introduction to Material CDK

The *Angular Material Component Developer Kit* (**[@angular/cdk](https://github.com/angular/material2/tree/master/src/cdk)**) is a separate library developed by the Angular Material team.

>  The goal of the CDK is to give developers more tools to build awesome components for the web. This will be especially useful for projects that want to take advantage of the features of Angular Material without adopting the Material Design visual language. — Angular Team

Some of its notable features include:

*  A11Y
*  Layout 
*  KeyCodes
   > This is a lightweight support for mediaQuery notifications. For full Responsive features, use `@angular/flex-layout`.
*  [Data Table](https://material.angular.io/guide/cdk-table)
   >  The <cdk-table> is an unopinionated, customizable data-table with a fully-templated API, dynamic columns, and an accessible DOM structure. This component acts as the core upon which anyone can build their own tailored data-table experience.” — Jeremy Elbourn in the Angular Material Status Update, July 2017
*  Scrolling
*  Content Observers
*  Platform Detection
*  Portal Hosts + Overlay
*  ...

### Step #2.1: Installing the CDK

To use the CDK, simple 

```terminal
npm install @angular/cdk 
```

and you’re set! Using the CDK is a safe way to ensure you include the best practices into your component production workflow

#### Example 1 - BiDi

For example, to get the language direction of your app you can use the `BidiModule` from `@angular/cdk`
and in your component use the `Directionality` service
```ts
@Component({ ... }) 
export class MyWidget implements OnDestroy {

  /** Whether the widget is in RTL mode or not. */
  private isRtl: boolean;
  
  /** Subscription to the Directionality change EventEmitter. */
  private _dirChangeSubscription = Subscription.EMPTY;  
  
  constructor(dir: Directionality) {
    this.isRtl = dir.value === 'rtl';
    
    _dirChangeSubscription = dir.change.subscribe(() => {
      this.flipDirection();
    });
  }
  
  flipDirection() {
    //...
  }
  
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
  }
}  
```

#### Example 2 - Responsive MediaQuery

In some situations - when designing a responsive application for mobile - we'd like to know the application orientation.
We can include the CDK's `LayoutModule` then components can inject `MediaMatcher` to access the 
matchMedia method, if available on the platform.

```ts
@Component({ ... }) 
export class MyWidget {  
  constructor(mm: MediaMatcher) {
    mm.matchMedia('(orientation: landscape)').matches ? 
      this.setLandscapeMode() :
      this.setPortraitMode();
  }
}  
```


##### Example 3 - Using the Data Table

The `<cdk-table>` is an unopinionated, customizable data-table with a fully-templated API, dynamic columns, 
and an accessible DOM structure. This component acts as the core upon which anyone can build their own tailored data-table experience.

*  [cdk-table Documentation](https://material.angular.io/components/table/overview)
*  [cd-table Example](https://material.angular.io/guide/cdk-table)

---
  
[Go to Tutorial Step 3](./STEP_3.md)
