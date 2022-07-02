import { useGlobal } from "../context/GlobalContext";
function Search() {
  const { handleSearch } = useGlobal();

  return (
    <form className="input-form">
      <input
        type="text"
        className="search-input"
        placeholder="search..."
        onChange={(e) => handleSearch(e)}
      />
    </form>
  );
}
export default Search;
