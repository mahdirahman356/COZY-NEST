import {useLoaderData} from "react-router-dom";
import 'animate.css';

const Blog = () => {
    let blogs =   useLoaderData();
    console.log(blogs)
    return (
        <div className="my-3 md:my-20">
            {blogs.map((blogs,index) => <div key={index} className="dark:text-gray-800 mb-6 animate__animated animate__slideInUp">
                <div className="container max-w-4xl p-2 md:px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-100">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-600">{blogs.date}</span>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">{blogs.title}</a>
                        <p className="mt-2">{blogs.content}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                        <p rel="noopener noreferrer" className="hover:underline">#{blogs.tags[0]}</p>
                        <p rel="noopener noreferrer" className="hover:underline">#{blogs.tags[1]}</p>
                        <p rel="noopener noreferrer" className="hover:underline">#{blogs.tags[2]}</p>
                        </div>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src={blogs.image} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-600">{blogs.author}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Blog;