Subject
What is a Subject? An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.

A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.

  https://rxjs.dev/guide/subject

A BehaviorSubject holds one value. When it is subscribed it emits the value immediately. A Subject doesn't hold a value.

Subject example (with RxJS 5 API):

const subject = new Rx.Subject();
subject.next(1);
subject.subscribe(x => console.log(x));
Console output will be empty

BehaviorSubject example:

const subject = new Rx.BehaviorSubject(0);
subject.next(1);
subject.subscribe(x => console.log(x));
Console output: 1

In addition:

BehaviorSubject should be created with an initial value: new Rx.BehaviorSubject(1)
Consider ReplaySubject if you want the subject to get previously published values.



BehaviourSubject
BehaviourSubject will return the initial value or the current value on Subscription

var bSubject= new Rx.BehaviorSubject(0);  // 0 is the initial value

bSubject.subscribe({
  next: (v) => console.log('observerA: ' + v)  // output initial value, then new values on `next` triggers
});

bSubject.next(1);  // output new value 1 for 'observer A'
bSubject.next(2);  // output new value 2 for 'observer A', current value 2 for 'Observer B' on subscription

bSubject.subscribe({
  next: (v) => console.log('observerB: ' + v)  // output current value 2, then new values on `next` triggers
});

bSubject.next(3);
With output:

observerA: 0
observerA: 1
observerA: 2
observerB: 2
observerA: 3
observerB: 3
Subject
Subject does not return the current value on Subscription. It triggers only on .next(value) call and return/output the value

var subject = new Rx.Subject();

subject.next(1); //Subjects will not output this value

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(2);
subject.next(3);
With the following output on the console:

observerA: 2
observerB: 2
observerA: 3
observerB: 3
