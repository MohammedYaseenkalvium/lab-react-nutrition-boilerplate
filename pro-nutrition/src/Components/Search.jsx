const Search = (props) => {
    const { setSearch } = props;
  
    return (  
      <>
        <h1>Search</h1>
        <input
          type="search"
          style={{ width: "400px", fontSize: "large", padding: "10px 40px" }}
          placeholder="Search Food Here"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </>
    );
  };
  
  export default Search;