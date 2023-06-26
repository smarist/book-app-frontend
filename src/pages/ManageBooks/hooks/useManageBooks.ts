import axios from 'axios';
import { Reducer, useEffect, useReducer } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { getBase64 } from '../../../utils/helpers';
import { ReducerState } from "../types";

function useManageBooks(edit?: Boolean) {
  type CustomFile = File & { base64?: string };
    
    const initState = {
        title: "",
        image: "",
        image_src: "",
        description: "",
        price: null,
        isLoading: false,
      };
      const { bookId } = useParams();
      const navigate = useNavigate();
    
      const [state, dispatch] = useReducer<Reducer<ReducerState, any>>(
        (bookState, value) => ({ ...bookState, ...value }),
        initState
      );
      
      const onSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        let file = e.target.files?.[0] as CustomFile;
    
        if (file) {
          getBase64(file)
            .then((result) => {
              file.base64 = result as string; // Type assertion for result
              dispatch({
                image: result as string, // Type assertion for result
                image_src: URL.createObjectURL(file),
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };

    useEffect(() => {
        const fetchABook = async() => {
            try{
                const res = await axios.get("http://localhost:8800/books/"+bookId)
                dispatch({
                    title: res.data[0]?.title,
                    image: res.data[0]?.cover,
                    description: res.data[0]?.desc,
                    price: res.data[0]?.price,
                })
            }catch(err) {
                console.log(err)
            }
        }
        if(edit)
        fetchABook()
    }, [bookId, edit])

      const handleAddBook = async(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        //dispatch({ isLoading: true })
        if(!edit) {
            try{
                await axios.post("http://localhost:8800/books", {
                    title: state.title,
                    desc: state.description,
                    cover: state.image,
                    price: state.price,
                }).then(() => {
                    navigate("/")
                })
            }catch(err) {
                console.log(err)
            }
        } else {
            try{
                await axios.put("http://localhost:8800/books/"+bookId, {
                    title: state.title,
                    desc: state.description,
                    cover: state.image,
                    price: state.price,
                }).then(() => {
                    navigate("/")
                })
            }catch(err) {
                console.log(err)
            }
        }
        } 
  return {
    dispatch,
    state,
    handleAddBook,
    onSelectImage,
    bookId,
  }
}

export default useManageBooks