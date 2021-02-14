import React from 'react';
import SearchInput from './SearchInput/SearchInput';
import classes from './Search.module.css';
import AddQuestionButton from './AddQuestionButton/AddQuestionButton'
const Search=(props)=>{
    return(
    <div className={classes.QuestionSearchButton}>
        <SearchInput  inputRef={props.inputRef}  searchColl={props.searchColl} searchValue={props.searchValue} searchChangeHandler={props.searchChangeHandler}/>
        <AddQuestionButton/>
    </div>
    )
}
export default Search;