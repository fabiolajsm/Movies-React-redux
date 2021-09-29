import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from '../../redux/actions';

const Search = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        if (title === "") return null
        dispatch(getMovies(title));
        setTitle("");
    }

    return (
        <>
            <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button className="btn btn-outline-secondary" type="submit" onSubmit={handleSubmit}>Search</button>
            </form>
        </>
    );
};

export default Search;