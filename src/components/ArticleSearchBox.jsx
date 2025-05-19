function ArticleSearchBox() {

    return (
        <>
            <form className="article-search-box">
                <label htmlFor="search-by-name">Search for Article</label>
                <input type="text" id="search-by-name" name="search-by-name"/>
                <button type="submit">Search</button>
                <label htmlFor="filter-by-category">Filter by Category</label>
                <input type="text" id="filter-by-category" name="filter-by-category"/>
                <label htmlFor="sort-by">Sort By</label>
                <select id="sort-by" name="sort-by" size="6">
                    <option>articleID</option>
                    <option>title</option> 
                    <option>topic</option>
                    <option>author</option>
                    <option>created_at</option>
                    <option>votes</option>
                    <option>comment_count</option>
                </select>
                <label htmlFor="order-by">Order By</label>
                <select id="order-by" name="order-by" size="2">
                    <option>ascending</option>
                    <option>descending</option>
                </select>
            </form>
        </>
    )
}

export default ArticleSearchBox