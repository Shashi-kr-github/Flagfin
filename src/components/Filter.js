const Filter = () => {
  return (
    <section className="filter">
      <form className="form-control">
        <input
          type="search"
          id="search"
          id="search"
          placeholder="Search for country"
        />
      </form>

      <div>
        <select name="select" id="select" className="select">
          <option value="Africa">Africa</option>
          <option value="North Amrica">North Amrica </option>
          <option value="Asia">Asia </option>
          <option value="Europe">Europe </option>
          <option value="Ocenia">Ocenia </option>
        </select>
      </div>
    </section>
  );
};
export default Filter;
