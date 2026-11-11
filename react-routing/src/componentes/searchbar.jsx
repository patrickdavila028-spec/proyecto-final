function searchbar({search,setsearch}){
    return(
        <input 
            type="text" 
            placeholder="search products..."
            value={search}
            onChange={(e)=> setsearch(e.target.value)}
            />
    )
}

export default searchbar