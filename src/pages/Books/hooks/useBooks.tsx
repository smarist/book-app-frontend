import axios from 'axios';
import { useEffect, useState } from 'react'
import { BooksProps } from '../types';

function useBooks() {

    const [books, setBooks] = useState<BooksProps[]>([]);

    const fetchAllBooks = async() => {
        try{
            const res = await axios.get("http://localhost:8800/books")
            setBooks(res.data)
        }catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchAllBooks()
    }, [])

    const handleDelete = async(id: number) =>{
        //dispatch({ isLoading: true })
            try{
                await axios.delete("http://localhost:8800/books/"+id).then(() => {
                    console.log("Book was deleted");
                    fetchAllBooks()
                })
            }catch(err) {
                console.log(err)
            }
        } 
  return {
    books,
    handleDelete
  }
}

export default useBooks