import { Link } from "react-router-dom"
import { DashboardPost } from "../../components/posts/DashboardPost"
import { useEffect, useState } from "react"
import axios from "axios"

export const DashboardHome = () => {
    const [totalPosts, setTotalPosts] = useState();
    const [posts, setPosts] = useState<any>([]);
    const [users, setUsers] = useState<any>([]);
    useEffect(() => {
        // posts
        const aboutPost = async () => {
            try {
                const response = await axios.get('/posts');
                setPosts(response.data);
                setTotalPosts(response.data.length);
            }
            catch (error) {
                console.log(error);
            }
        }
        const getUsers = async () => {
            try {
                const response = await axios.get('/getusers');
                setUsers(response.data);
            }
            catch (error) {
                console.log(error);
            }
        }

        aboutPost();
        getUsers();
    }, [])
    return (
        <div className="">
            <h1 className='text-2xl m-2 font-bold'>Dashboard</h1>
            <div className="p-2 border-2 mt-1">
                <div className="grid grid-cols-4 gap-1 mb-4">
                    <div className="flex text-center items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            Post <br /> {totalPosts}
                        </p>
                    </div>
                    <div className="flex text-center items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            Views <br /> {posts.map((post: any) => post.viewedBy.length).reduce((a: number, b: number) => a + b, 0)}
                        </p>
                    </div>
                    <div className="flex text-center items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            Comments <br /> {posts.map((post: any) => post.comments.length).reduce((a: number, b: number) => a + b, 0)}
                        </p>
                    </div>
                    <div className="flex text-center items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            Users <br /> {users.length}
                        </p>
                    </div>
                </div>
                <div className="flex justify-start p-2 h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                        Chart
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-4">
                    <div className="flex justify-start rounded bg-gray-50 dark:bg-gray-800">
                        <div className="text-md text-gray-900 dark:text-gray-500 w-full p-4">
                            <div className="flex flex-row justify-between">
                                <div className="text-lg font-bold">
                                    Recent Post
                                </div>
                                <Link to='createpost'>
                                    <div className="rounded-lg text-sm min-w-[100px] p-1 hover:font-bold border-gray-900 border-2 dark:border-gray-200 dark:text-gray-200 text-gray-900">+ New post</div>
                                </Link>
                            </div>
                            <div className="flex flex-col gap-y-2 mt-4">
                                {
                                    posts && posts.length > 0 ? (
                                        [...posts].reverse().slice(0, 4).map((post, index) => {
                                            return <DashboardPost key={index} id={post._id} tittle={post.tittle} image={post.image} totalComments={post.comments.length} totalViews={post.viewedBy.length} />
                                        })
                                    ) : (
                                        <div className="text-sm text-center text-gray-500 dark:text-gray-400">  No post found</div>
                                    )

                                }
                            </div>
                            <Link to='posts'>
                                <div className="rounded-lg text-end mt-6 text-sm min-w-[100px] p-1 hover:font-bold  dark:border-gray-200 dark:text-blue-200 text-blue-900">View all</div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                {/* <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" /> */}
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                {/* <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" /> */}
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                {/* <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" /> */}
                            </svg>
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            {/* <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" /> */}
                        </svg>
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                {/* <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" /> */}
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                {/* <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" /> */}
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                {/* <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" /> */}
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                {/* <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" /> */}
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
