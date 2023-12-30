# Q. What is a service in Angular?
What are services used for? A service in Angular is a class that is instantiated and can be used throughout the application to provide functionality that can be easily reused. Generally, it is recommended to perform as much logic as possible in services, and as much data access in services as well, rather than directly in the components.

# Q. What is an Angular pipe?
A pipe in Angular is a class that provides a way to alter the output of data on the page. Ideally, the pipe produces the same output for a given input each time it’s run, and produces no side effects. Examples of pipes are changing a string to uppercase or lowercase, formatting currency and numbers, or formatting telephone numbers. There are many built in pipes available to use, and you can also generate your own pipes for custom functionality.

# Q. What is an observable? What is one way that Observables are used in Angular?
Observables are a part of reactive programming, an asynchronous programming paradigm that allows you to work with data in streams. Reactive programming provides Observables, which makes it easier to compose asynchronous code in your application. Observables are present in many parts of Angular, including Outputs and all HTTP calls through the built-in HttpClient.

# Q. What is the difference between a component and directive in Angular?
A component is a directive with a template. So a directive is a class that provides extra functionality to HTML while using the host HTML as display. There are two types of directives besides components: attribute and structural. Attribute directives change the appearance or behavior of an element. An example might be a directive that highlights text. Structural directives alter the DOM by adding or removing elements.

# Q. How would you display a variable from an Angular component in the template?
The displaying of a variable from an Angular component’s class into the HTML is called interpolation. By default, interpolation is done by wrapping an expression (usually a class member variable) in double curly brackets.

# Q. What are some of the differences between a standard Angular component and a standalone component?
One of the biggest differences between standard components and standalone components is that standard components need to be included in an NgModule to be used. If they’re going to be used outside the module they’re declared in, the NgModule needs to be included in the other module.
Another difference is that with standard components, any functionality that needs to be brought in from Angular packages or third party packages need to be made at the NgModule level. For example, if you need to use the *ngFor directive, you need to import CommonModule from the @angular/common package in the NgModule. If you’re using a standalone component, these imports can be made in the component itself.

Components, directives, and pipes can now be marked as standalone: true. Angular classes marked as standalone do not need to be declared in an NgModule (the Angular compiler will report an error if you try).

Standalone components specify their dependencies directly instead of getting them through NgModules. For example, if PhotoGalleryComponent is a standalone component, it can directly import another standalone component ImageGridComponent:
```
@Component({
  standalone: true,
  selector: 'photo-gallery',
  imports: [ImageGridComponent],
  template: `
    ... <image-grid [images]="imageList"></image-grid>
  `,
})
export class PhotoGalleryComponent {
  // component logic
}
```
Using existing NgModules in a standalone component:
When writing a standalone component, you may want to use other components, directives, or pipes in the component's template. Some of those dependencies might not be marked as standalone, but instead declared and exported by an existing NgModule. In this case, you can import the NgModule directly into the standalone component:
```
@Component({
  standalone: true,
  selector: 'photo-gallery',
  // an existing module is imported directly into a standalone component
  imports: [MatButtonModule],
  template: `
    ...
    <button mat-button>Next Page</button>
  `,
})
export class PhotoGalleryComponent {
  // logic
}
```

Using standalone components in NgModule-based applications
```
@NgModule({
  declarations: [AlbumComponent],
  exports: [AlbumComponent], 
  imports: [PhotoGalleryComponent],
})
export class AlbumModule {}
```


# Q. What is dependency injection in Angular?
Dependency Injection is a software design pattern in Angular that allows the creation of dependent objects outside of a class and provides those objects to a class through a constructor or a property.
This means that a class doesn’t create its own dependencies. Instead, they are injected from outside the component by the framework. This makes the code more maintainable, testable, and flexible. It also helps in decoupling the components, making it easier to change or replace a particular component without affecting the entire application.


# Q. How do you get access to a template variable in a component?
Template variables in Angular are a way to get access to HTML elements and access them both in the Typescript class or elsewhere in the component. They are declared by using the hash symbol, followed by the name by which you want to reference the variable. For example, you might get access to an input element by adding #myInput on the <input> element.

@ViewChild

Here’s an example of how to use ViewChild in Angular:

In the parent component’s TypeScript file, import the ViewChild decorator from the @angular/core module:
```
import { ChildComponent } from './child.component';

@Component({
  // ...
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComponentRef: ChildComponent;

  // ...
}
```


# Q. What is the recommended way of subscribing to observables?
The best way to subscribe to observables is by using the async pipe. The reason for this is that it can be easy to leave open subscriptions to Observables in your code, which cause memory leaks and poor performance. The async pipe automatically subscribes and unsubscribes to observables for you.


# Q. What is a structural directive? Give an example of a structural directive.
Examples include the *ngFor and *ngIf directives.


# Q. What is ng-container? What are some reasons you would need to use it?
ng-container is a special type of Angular component provided by the framework that doesn’t have a DOM representation itself. It allows you to group HTML elements together without adding extra HTML to the DOM. It’s useful, for example, when you want to show or hide some sibling HTML elements on the page with *ngIf without wrapping them in a div or other HTML element. Another situation is if you need to output an ng-template on the screen with the ngTemplateOutlet directive.
```
<ng-container *ngIf="condition">
  …
</ng-container>
```
```
<ng-container *ngIf="condition; else templateA">
  …
</ng-container>
<ng-template #templateA>
  …
</ng-template>
```


# Q. How can you lazy load portions of your Angular app?
Lazy loading portions of your application is accomplished through proper routing configuration. In the route configuration setup, you can import a new module. If you break your application up into different feature modules, you can import each module into the main AppModule.


# Q. What is the Subject as a Service (or Service as a Subject) pattern? Why would you need to use this pattern?

This pattern is a technique where you use the RxJS Subject, or any of its variations, inside a shared service to enable communication between different parts of the application. This allows sibling components to communicate together without requiring the parent component to hold the data and pass it back and forth between the two components, for example. It is a way to manage state in the application, like display of certain UI elements. Some examples where this pattern can be helpful is a message service that shows different messages or alerts on the screen. Any component or service in the application can use exposed methods on the service to add or remove messages to the queue. Another time it can be helpful is showing or hiding a slide out menu.

What is a Subject? An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.

A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.

A BehaviorSubject holds one value. When it is subscribed it emits the value immediately. A Subject doesn't hold a value.

Subject example (with RxJS 5 API):
```
const subject = new Rx.Subject();
subject.next(1);
subject.subscribe(x => console.log(x));
Console output will be empty
```
BehaviorSubject example:
```
const subject = new Rx.BehaviorSubject(0);
subject.next(1);
subject.subscribe(x => console.log(x));
Console output: 1
```
In addition:

BehaviorSubject should be created with an initial value: new Rx.BehaviorSubject(1)
Consider ReplaySubject if you want the subject to get previously published values.

So do you mean you have to subscribe to subject before subject.next() to for this to work? – 
@eric for Subject, yes. That is the distinction. – 
Note that you have to pass in the first value to BehaviorSubject's constructor ;) – 
mrmashal

### Subject - only upcoming values
### BehaviourSubject - one previous value and upcoming values
### ReplaySubject - all previous values and upcoming values
### AsyncSubject - latest value when stream will close

ReplaySubject
A ReplaySubject is similar to a BehaviorSubject in that it can send old values to new subscribers, but it can also record a part of the Observable execution.

A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers.

When creating a ReplaySubject, you can specify how many values to replay:
```
import { ReplaySubject } from 'rxjs';
const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(5);

// Logs:
// observerA: 1
// observerA: 2
// observerA: 3
// observerA: 4
// observerB: 2
// observerB: 3
// observerB: 4
// observerA: 5
// observerB: 5
```

AsyncSubject
The AsyncSubject is a variant where only the last value of the Observable execution is sent to its observers, and only when the execution completes.
```
import { AsyncSubject } from 'rxjs';
const subject = new AsyncSubject();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(5);
subject.complete();

// Logs:
// observerA: 5
// observerB: 5
```


# Q. How can you use RxJS to manipulate and change data that comes back from the API?
Effective use of RxJS operators is important to retrieve data from an API and manipulate it or prepare it for use in the component. Some popular RxJS operators for this are filter, map, and switchMap. There are many others, but these three are extremely useful.


# Q. What is a good use case for RxJS combineLatest?
combineLatest is extremely helpful when you have multiple RxJS observables that are providing separate yet possibly related data that need to be combined and displayed on the page in some way. When one of those individual streams emits new data, the pipeline will run again and reevaluate the data for the component. Other methods will only evaluate the data once, which may not always work. An example of when combineLatest is helpful is when you need to make an HTTP call based on some query params and route params in the route URL. Both types of parameters can be accessed and combined to make the HTTP call. Proper use and understanding of combineLatest, and other RxJS operators, makes it easier to react to user and other inputs to your app.

```
// RxJS v6+
import { timer, combineLatest } from 'rxjs';

// timerOne emits first value at 1s, then once every 4s
const timerOne$ = timer(1000, 4000);
// timerTwo emits first value at 2s, then once every 4s
const timerTwo$ = timer(2000, 4000);
// timerThree emits first value at 3s, then once every 4s
const timerThree$ = timer(3000, 4000);

// when one timer emits, emit the latest values from each timer as an array
combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(
  ([timerValOne, timerValTwo, timerValThree]) => {
    /*
      Example:
    timerThree first tick: 'Timer One Latest: 0, Timer Two Latest: 0, Timer Three Latest: 0
    timerOne second tick: 'Timer One Latest: 1, Timer Two Latest: 0, Timer Three Latest: 0
    timerTwo second tick: 'Timer One Latest: 1, Timer Two Latest: 1, Timer Three Latest: 0
  */
    console.log(
      `Timer One Latest: ${timerValOne},
     Timer Two Latest: ${timerValTwo},
     Timer Three Latest: ${timerValThree}`
    );
  }
);
```


# Q. JIT vs AOT ?
JIT - Compile TypeScript just in time for executing it.
ng build
ng serve
Compiled in the browser.
Each file compiled separately.
No need to build after changing your code and before reloading the browser page.
Suitable for local development.

AOT - Compile TypeScript during build phase.
ng build --aot
ng serve --aot
Compiled by the machine itself, via the command line (Faster).
All code compiled together, inlining HTML/CSS in the scripts.
No need to deploy the compiler (Half of Angular size).
More secure, original source not disclosed.
Suitable for production builds.


# Q. What is constructor? How is it different from ngOnInit?
Constructor is a method used to properly initialize a class and its subclasses. It’s typically used to set up dependency injection, while ngOnInit is a lifecycle hook indicating the completion of the component creation.


# Q. HostListener vs HostBinding ?
HostBinding('value') myValue; is exactly the same as [value]="myValue"
HostListener('click') myClick(){ } is exactly the same as (click)="myClick()"

```
<p class="c_highlight">
    Some text.
</p>
```
```
import {Component,HostListener,Directive,HostBinding} from '@angular/core';

@Directive({
    // this directive will work only if the DOM el has the c_highlight class
    selector: '.c_highlight'
 })
export class HostDirective {

  // we could pass lots of thing to the HostBinding function. 
  // like class.valid or attr.required etc.

  @HostBinding('style.backgroundColor') c_colorrr = "red"; 

  @HostListener('mouseenter') c_onEnterrr() {
   this.c_colorrr= "blue" ;
  }

  @HostListener('mouseleave') c_onLeaveee() {
   this.c_colorrr = "yellow" ;
  } 
}
```
The following example declares a directive that attaches a click listener to a button and counts clicks.
```
@Directive({selector: 'button[counting]'})
class CountClicks {
  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }
}

@Component({
  selector: 'app',
  template: '<button counting>Increment</button>',
})
class App {}
```