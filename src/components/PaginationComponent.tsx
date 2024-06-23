import React, {FC} from 'react';
import {useAppSelector} from "../redux/store";
interface IProps {
    setPage: (page:string) => void;
}
const PaginationComponent:FC<IProps> = ({setPage}) => {
    const {allMovies} = useAppSelector(state => state.movieSlice);
    const changePage = (action:string) => {
        if(action === 'prev'){
            if(allMovies.page > 1){
                setPage((allMovies.page - 1).toString());
            }
        } else if(action === 'next') {
            setPage((allMovies.page + 1).toString())
        }
    }
    return (
        <div>
            <div className='pagination'>
                <button className='pButton' onClick={() => {
                    changePage('prev');
                }}>Prev
                </button>
                <label className='pButton'>{allMovies.page.toString()}</label>
                <button className='pButton' onClick={() => {
                    changePage('next');
                }}>Next
                </button>
            </div>
        </div>
    );
};

export default PaginationComponent;