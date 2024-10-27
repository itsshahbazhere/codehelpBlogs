import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext =  createContext();

export default function AppContextProvider({children}){

    const [loading , setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [posts, setPosts] = useState([]);


    //data filling

    async function fetchBlogPosts(page = 1){

        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        console.log(url)
        try{
            const result = await fetch(url);
            const data = await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch(err){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null)
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);

    }

    const value = {
        loading,
        page,
        totalPages,
        posts,
        setLoading,
        setPage,
        setTotalPages,
        setPosts,
        fetchBlogPosts,
        handlePageChange
    }


    //step 2
    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}