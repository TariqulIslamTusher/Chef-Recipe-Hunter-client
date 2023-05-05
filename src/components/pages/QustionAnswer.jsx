import React from 'react';
import ReactToPdf from "react-to-pdf";
import { ToastContainer, toast } from 'react-toastify';


const btn1 = React.createRef()
const btn2 = React.createRef()
const btn3 = React.createRef()
const btn4 = React.createRef()
const QustionAnswer = () => {

    const notify = () => {
        toast.info('Downloading PDF')
    }

    return (
        <div>
            <ToastContainer></ToastContainer>

            {/* this div is for download as pdf */}
            <div className='mx-auto md:px-48 py-8 bg-fixed' >
                <div ref={btn1}>
                    <div className='container mx-auto pt-6 px-2'>
                        <div className="rounded-xl bg-yellow-200 text-xl border border-base-300  my-3">
                            <div className="font-medium md:text-3xl p-5">
                                What is the differences between uncontrolled and controlled components?
                            </div>
                            <div className="bg-gradient-to-b p-5 from-yellow-50 to-slate-300">
                                <h1 className='font-bold text-center text-2xl'>Difference Between Controlled And Uncontrolled Components</h1>
                                <div className='flex flex-col md:flex-row gap-4 p-3 items-center justify-between'>
                                    <ul>
                                        <li className='p-2 border-b-2 border-spacing-2 border-gray-500 font-bold'>CONTROLLED COMPONENTS</li>
                                        <li className='p-2 border-b-2 border-gray-500'>Does not maintain its internal state.</li>
                                        <li className='p-2 border-b-2 border-gray-500'>Data is controlled by the parent component.</li>
                                        <li className='p-2 border-b-2 border-gray-500'>Accepts its current value as a prop.</li>
                                        <li className='p-2 border-b-2 border-gray-500'>Allows validation control.</li>
                                        <li className='p-2 border-b-2 border-gray-500'>Better control over the form elements and data.</li>
                                    </ul>
                                    <ul>
                                        <li className='p-2 border-b-2 border-spacing-2 border-gray-500 font-bold'>UNCONTROLLED COMPONENTS</li>
                                        <li className='p-2 border-b-2 border-gray-500'>Maintains its internal state.</li>
                                        <li className='p-2 border-b-2 border-gray-500'>Data is controlled by the DOM itself.</li>
                                        <li className='p-2 border-b-2 border-gray-500'>Uses a ref for their current values.</li>
                                        <li className='p-2 border-b-2 border-gray-500'>Does not allow validation control.</li>
                                        <li className='p-2 border-b-2 border-gray-500'>Limited control over the form elements and data.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='text-right my-2'>
                            <ReactToPdf targetRef={btn1} filename="Blog.pdf">
                                {({ toPdf }) => (
                                    <span onClick={notify}><button className='btn btn-accent' onClick={toPdf}>Generate PDF</button></span>
                                )}
                            </ReactToPdf>
                        </div>
                    </div>
                </div>


                <div className='container  mx-auto px-2 '>
                    <div ref={btn2} className="rounded-xl bg-yellow-200 text-xl  border border-base-300  my-3">
                        <div className="font-medium md:text-3xl p-5">
                            How to validate React props using PropTypes?
                        </div>
                        <div className="bg-gradient-to-b p-5 from-yellow-50 to-slate-300">
                            <h1 className='font-bold'>propTypes is used for props validation :</h1><br />
                            <p>Props and PropTypes are important mechanisms for passing read-only attributes between React components</p> <br />
                            <p>We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p> <br />
                            <p>With React props, we can send data to a component when we call on that component, including numbers, strings, functions, objects, and arrays. If we have multiple components, we can pass data from one component to another.</p><br />
                            <p>To pass props between components, we can add them when the component is called, just like you would pass arguments when calling on a regular JavaScript function</p>
                        </div>
                    </div>
                    <div className='text-right my-2'>
                        <ReactToPdf targetRef={btn2} filename="Blog.pdf">
                            {({ toPdf }) => (
                                <span onClick={notify}><button className='btn btn-accent' onClick={toPdf}>Generate PDF</button></span>
                            )}
                        </ReactToPdf>
                    </div>
                </div>

                <div className='container mx-auto px-2 '>
                    <div ref={btn3} className="rounded-xl bg-yellow-200 text-xl border border-base-300  my-3">
                        <div className=" font-medium md:text-3xl p-5">
                            What is the difference between nodejs and express js?
                        </div>
                        <div className=" bg-gradient-to-b p-5 from-yellow-50 to-slate-300">
                            <h2 className=''>In js web aplication framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses</h2> <br />
                            <p><span className='font-bold text-2xl'>Node js </span>An extension of JavaScript, NodeJS is an open-source server-side runtime environment built around the NodeJS language. Using a single-threaded approach for web loading and asynchronous programming, the framework has achieved great success in being highly-performant and scalable.</p> <br />
                            <p>In addition, you may also benefit from using it to improve the backend functionality of your project by implementing Node JS-based frameworks like Express, Socket.io, and Meteor.</p>

                            <br />
                            <p className='mt-5'><span className='font-bold text-2xl'>Express js </span>ExpressJS is a framework for developing web applications with NodeJS. Among the two options, it is the most significant difference. The ExpressJS development services framework provides several exceptional features that make developing web apps easy and fast. By contrast, using the latter alone makes developing web apps more complex.</p>

                        </div>
                    </div>
                    <div className='text-right my-2'>
                        <ReactToPdf targetRef={btn3} filename="Blog.pdf">
                            {({ toPdf }) => (
                                <span onClick={notify}><button className='btn btn-accent' onClick={toPdf}>Generate PDF</button></span>
                            )}
                        </ReactToPdf>
                    </div>
                </div>

                <div className='container mx-auto px-2 '>
                    <div ref={btn4} className="rounded-xl bg-yellow-200 text-xl collapse collapse-plus border border-base-300  my-3">
                        <div className="font-medium md:text-3xl p-5">
                            What is a custom hook, and what is the neccesity of creating a custom hook?
                        </div>
                        <div className=" bg-gradient-to-b p-5 from-yellow-50 to-slate-300">
                            <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks.</p>
                            <br />

                            <div className="my-2">
                                <h2 className="font-bold">Advantages of using a custom React JS hooks are following:</h2>

                                <ul className='ml-4 list-disc'>
                                    <li>Reusability</li>
                                    <li>Readability</li>
                                    <li>Tesability</li>
                                </ul>
                            </div>

                            <p>Custom React JS hooks can help developers save time, are reliable, reusable, and make the code clean. Creating custom React JS hooks is relatively easy, and we can search for many open sources where you can get some custom hooks from the library already created by developers.</p>


                        </div>
                    </div>
                    <div className='text-right my-2'>
                        <ReactToPdf targetRef={btn4} filename="Blog.pdf">
                            {({ toPdf }) => (
                                <span onClick={notify}><button className='btn btn-accent' onClick={toPdf}>Generate PDF</button></span>
                            )}
                        </ReactToPdf>
                    </div>
                </div>
            </div>



            {/*  for UI it will collapse and show */}
            {/* <div className='mx-auto md:px-48 bg-gradient-to-b from-yellow-200 to-purple-400 object-cover py-8' style={{ backgroundImage: "url('https://images.pexels.com/photos/6294402/pexels-photo-6294402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
                <div className='container mx-auto pt-6 px-2'>
                    <div tabIndex={0} className="rounded-xl bg-yellow-200 text-xl collapse collapse-plus border border-base-300  my-3">
                        <div className="collapse-title font-medium md:text-3xl">
                            What is the differences between uncontrolled and controlled components?
                        </div>
                        <div className="collapse-content bg-gradient-to-b from-yellow-50 to-slate-300">
                            <h1 className='font-bold text-center text-2xl'>Difference Between Controlled And Uncontrolled Components</h1>
                            <div className='flex flex-col md:flex-row gap-4 p-3 items-center justify-between'>
                                <ul>
                                    <li className='p-2 border-b-2 border-spacing-2 border-gray-500 font-bold'>CONTROLLED COMPONENTS</li>
                                    <li className='p-2 border-b-2 border-gray-500'>Does not maintain its internal state.</li>
                                    <li className='p-2 border-b-2 border-gray-500'>Data is controlled by the parent component.</li>
                                    <li className='p-2 border-b-2 border-gray-500'>Accepts its current value as a prop.</li>
                                    <li className='p-2 border-b-2 border-gray-500'>Allows validation control.</li>
                                    <li className='p-2 border-b-2 border-gray-500'>Better control over the form elements and data.</li>
                                </ul>
                                <ul>
                                    <li className='p-2 border-b-2 border-spacing-2 border-gray-500 font-bold'>UNCONTROLLED COMPONENTS</li>
                                    <li className='p-2 border-b-2 border-gray-500'>Maintains its internal state.</li>
                                    <li className='p-2 border-b-2 border-gray-500'>Data is controlled by the DOM itself.</li>
                                    <li className='p-2 border-b-2 border-gray-500'>Uses a ref for their current values.</li>
                                    <li className='p-2 border-b-2 border-gray-500'>Does not allow validation control.</li>
                                    <li className='p-2 border-b-2 border-gray-500'>Limited control over the form elements and data.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container  mx-auto px-2 '>
                    <div tabIndex={0} className="rounded-xl bg-yellow-200 text-xl collapse collapse-plus border border-base-300  my-3">
                        <div className="collapse-title font-medium md:text-3xl">
                            How to validate React props using PropTypes?
                        </div>
                        <div className="collapse-content bg-gradient-to-b from-yellow-50 to-slate-300">
                            <h1 className='font-bold'>propTypes is used for props validation :</h1><br />
                            <p>Props and PropTypes are important mechanisms for passing read-only attributes between React components</p> <br />
                            <p>We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p> <br />
                            <p>With React props, we can send data to a component when we call on that component, including numbers, strings, functions, objects, and arrays. If we have multiple components, we can pass data from one component to another.</p><br />
                            <p>To pass props between components, we can add them when the component is called, just like you would pass arguments when calling on a regular JavaScript function</p>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto px-2 '>
                    <div tabIndex={0} className="rounded-xl bg-yellow-200 text-xl collapse collapse-plus border border-base-300  my-3">
                        <div className="collapse-title font-medium md:text-3xl">
                            What is the difference between nodejs and express js?
                        </div>
                        <div className="collapse-content bg-gradient-to-b from-yellow-50 to-slate-300">
                            <h2 className=''>In js web aplication framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses</h2> <br />
                            <p><span className='font-bold text-2xl'>Node js </span>An extension of JavaScript, NodeJS is an open-source server-side runtime environment built around the NodeJS language. Using a single-threaded approach for web loading and asynchronous programming, the framework has achieved great success in being highly-performant and scalable.</p> <br />
                            <p>In addition, you may also benefit from using it to improve the backend functionality of your project by implementing Node JS-based frameworks like Express, Socket.io, and Meteor.</p>

                            <br />
                            <p className='mt-5'><span className='font-bold text-2xl'>Express js </span>ExpressJS is a framework for developing web applications with NodeJS. Among the two options, it is the most significant difference. The ExpressJS development services framework provides several exceptional features that make developing web apps easy and fast. By contrast, using the latter alone makes developing web apps more complex.</p>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto px-2 '>
                    <div tabIndex={0} className="rounded-xl bg-yellow-200 text-xl collapse collapse-plus border border-base-300  my-3">
                        <div className="collapse-title font-medium md:text-3xl">
                            What is a custom hook, and what is the neccesity of creating a custom hook?
                        </div>
                        <div className="collapse-content bg-gradient-to-b from-yellow-50 to-slate-300">
                            <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks.</p>
                            <br />
                            <div className="my-2">
                                <h2 className="font-bold">Advantages of using a custom React JS hooks are following:</h2>

                                <ul className='ml-4 list-disc'>
                                    <li>Reusability</li>
                                    <li>Readability</li>
                                    <li>Tesability</li>
                                </ul>
                            </div>

                            <p>Custom React JS hooks can help developers save time, are reliable, reusable, and make the code clean. Creating custom React JS hooks is relatively easy, and we can search for many open sources where you can get some custom hooks from the library already created by developers.</p>

                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default QustionAnswer;