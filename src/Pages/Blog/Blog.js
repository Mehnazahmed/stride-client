import React from 'react';

const Blog = () => {
    return (
        <div className='grid gap-6 grid-cols-1  lg:grid-cols-2 mt-6 p-5 '>
            <div className='border-2 p-5'>
                <h2 className='text-2xl font-bold'>What are the different ways to manage a state in a react application?</h2>
                <br />
                <p className='text-justify'>
                    There are four main types of state to manage in a React apps: <br />
                    <br />

                    <span className='font-bold'>1.Local state:</span> Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook. <br />
                    <span className='font-bold'>2.Global state:</span> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />
                    <span className='font-bold'>3.Server state:</span> Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />
                    <span className='font-bold'>4.URL state:</span> Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! <br />
                </p>
            </div>
            <div className='border-2 p-5 '>
                <h2 className='text-2xl font-bold'>What is a unit test? why should we write unit tests?</h2> <br />
                <p className='text-justify'>
                    Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                    <br />
                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. <br />
                    <br />
                    <span className='font-bold' >We should write unit tests,because:</span> <br />
                    1. Unit tests save time and money and simplifies the debugging process. <br />
                    2. Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. <br />
                    3.Unit tests make code reuse easier. If we want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run the tests to make sure you have the desired results. <br />
                    4.Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                </p>


            </div>
            <div className='border-2 p-5'>
                <h2 className='text-2xl font-bold'>React vs Angular vs Vue?</h2>
                <br />
                <p className='text-justify'>
                    <span className='font-bold'>React </span>
                    <br />
                    React is actually a JavaScript library created to build user interfaces. It is supported by Facebook and Instagram and has become a core technology for the endless feed in these two applications. As a JS library, React has a limited sphere of usage, but when bundled with other libraries it becomes a powerful solution, making it a main competitor of Angular. <br />
                    React does not use any templates. The component logic is written in JavaScript, giving it more flexibility and enabling large amounts of data to easily pass through your app, while maintaining the state of the DOM. Although this approach is used in every compared frontend frameworks, React was the first one to introduce a component model. <br />
                    Two-way data binding was an advantage for Angular, and React is one-way data binding may be an advantage as well.
                    <br />

                    <span className='font-bold'>Angular</span>  <br />
                    The AngularJS framework was first released by Google in 2010. In 2016, Angular 2 appeared, which was a complete rewrite of Angular JS. Since then, new versions have appeared frequently. Angular 7 is currently the latest version available.

                    <br />
                    Angular is a MVW (Model-View-Whatever) framework, traditionally used as an MVC (Model-View-Controller). Due to this, the application is divided into three interconnected components. This enables Angular JS developers to write well-structured code, which is beneficial for complex projects.
                    <br />

                    The templates for component creation are readable because they mostly use standard HTML tags.

                    <br />
                    <span className='font-bold'>Vue</span>  <br />
                    Vue is a popular Angular and React alternative. This progressive framework for UI building is gaining popularity. It first became extremely popular in China, and is now becoming popular in the West as well.
                    <br />
                    Just like Angular, Vue is an MVC (or Model-View-Controller) framework. The advantage of this is obvious it allows  you to write well-structured code, which is extremely important when developing complex applications.
                </p>


            </div>
            <div className='border-2 p-5'>
                <h2 className='text-2xl font-bold'>How does prototypical inheritance work?</h2>
                <br />
                <p className='text-justify'> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object. <br />
                    JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                    Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                    <br />
                    prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.


                </p>

            </div>
        </div>
    );
};

export default Blog;