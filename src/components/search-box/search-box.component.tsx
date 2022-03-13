import { Component } from "react"

import "./search-box.styles.css"

type SearchBoxProps = {
    className:string,
    onChangeHandler:any,
    placeholder:string
}

class SearchBox extends Component<SearchBoxProps> {
    render() {
        const { className, placeholder, onChangeHandler } = this.props
        return(
            <input 
              className={`search-box ${className}`} 
              type='search' 
              placeholder={placeholder} 
              onChange={onChangeHandler} 
        />
        )
    }
}

export default SearchBox