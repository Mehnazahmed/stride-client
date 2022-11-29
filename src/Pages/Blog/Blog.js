import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className=' h-40px'>
            <div className="container overflow-hidden text-center">
       <div className="row gy-5">
        <div className="col-md-6">
         <div className="p-3 border bg-light">
            <h2>What is cors?</h2>
            <br />
            <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
            </p>
         </div>
       </div>
          <div className="col-md-6 h-40px">
       <div className="p-3 border bg-light">
        <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
        <p>Google Analytics for Firebase allows us to track  users' journey through realtime and custom reporting. Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.
            <br />
            <p>Other options to implement authentication: <br />
            Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>


        </p>
        </div>
       </div>
           <div className="col-md-6 h-40px">
          <div className="p-3 border bg-light">
            <h2>How does the private route work?</h2>
            <br />
            <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>

          </div>
       </div>
      <div className="col-md-6 h-40px">
       <div className="p-3 border bg-light">
        <h2>What is Node? How does Node work?</h2>
        <br />
        <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
            <br />
            Node. js takes a different approach. It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire.
        </p>
       </div>
      </div>
      </div>
         </div>

        </div>
        </div>
    );
};

export default Blog;