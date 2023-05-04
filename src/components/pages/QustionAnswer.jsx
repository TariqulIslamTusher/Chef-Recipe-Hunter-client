import React from 'react';

const QustionAnswer = () => {
    return (
        <div className='mx-auto md:px-48 bg-gradient-to-b from-slate-200 to-white'>
            <div className='container mx-auto pt-6 px-2'>
                <div tabIndex={0} className="bg-emerald-100 text-xl collapse collapse-plus border border-base-300 rounded my-3">
                    <div className="collapse-title font-medium md:text-3xl">
                        What is the differences between uncontrolled and controlled components?
                    </div>
                    <div className="collapse-content bg-gradient-to-b from-emerald-200 to-white">
                        <p className='text-2xl mb-2'>props and State is the core concept of react. Some features are describing below:</p>
                        <h1 className='font-bold'>Props</h1>

                        <p>Props is read only variant,it can't change from user component. Props is unidirectional. it can pass from parent to child neither from child to parent. Parants forward its props as attribute in HTML tags and child recives it as props objects. Props is quite similler like HTML attribute but not same. If props is change from parent component the chields component is render again</p>

                        <h1 className='font-bold'>State</h1>
                        <p>State can change on declared component or can change from it's child components. State is changed dynamically. State is the react version of event listener. JS event listeners working process is done by state in react</p>

                    </div>
                </div>
            </div>
            <div className='container  mx-auto px-2 '>
                <div tabIndex={0} className="bg-emerald-100 text-xl collapse collapse-plus border border-base-300 rounded my-3">
                    <div className="collapse-title font-medium md:text-3xl">
                    How to validate React props using PropTypes?
                    </div>
                    <div className="collapse-content bg-gradient-to-b from-emerald-200 to-white">
                        <p>It is a functional component. useState is used to manage the state of the component. It is build in huck of react. when cal useState Function it return a array of contain 2 array elements one is depends upon the given value of the useState parameters and the other one is a function. and when calling useState function we can pass a default value.we can't update the value directly. to update the value we need to use the second element of the array which is a function. this function parameter value is updated value.</p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-2 '>
                <div tabIndex={0} className="bg-emerald-100 text-xl collapse collapse-plus border border-base-300 rounded my-3">
                    <div className="collapse-title font-medium md:text-3xl">
                    What is the difference between nodejs and express js.
                    </div>
                    <div className="collapse-content bg-gradient-to-b from-emerald-200 to-white">
                        <p>useEffect is use for side effects. Side effect means work outside of react virtual DOM. like fetching data from database, Enter in Browser DOM, Window object etc.</p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-2 '>
                <div tabIndex={0} className="bg-emerald-100 text-xl collapse collapse-plus border border-base-300 rounded my-3">
                    <div className="collapse-title font-medium md:text-3xl">
                    What is a custom hook, and what is the neccesity of creating a custom hook?
                    </div>
                    <div className="collapse-content bg-gradient-to-b from-emerald-200 to-white">
                        <p>Here's a high-level overview of how React works under the hood:</p>

                        <p>React creates a Virtual DOM tree based on the components and their state/props. React then calculates the most efficient way to update the actual DOM, minimizing the number of changes that need to be made.using Diff Algorithm. Finally, React updates the actual DOM with the changes.  React is not a framework. It is just a library developed by Facebook to solve some problems that we were facing earlier.React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application. React is used to create modular user interfaces. It promotes the development of reusable UI components that display dynamic data.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default QustionAnswer;