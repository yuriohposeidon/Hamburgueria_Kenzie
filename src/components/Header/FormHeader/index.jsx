import search from "../../../assets/search.png";

export const FormHeader = ({ inputSearch, setInputSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="input__container">
        <div className="combination__container">
          <form className="form__container" onSubmit={handleSubmit}>
            <input
              className="input__header"
              type="text"
              placeholder="Digitar Pesquisa"
              onChange={(event) => setInputSearch(event.target.value)}
            />
            <button className="button__header" type="submit">
              <img src={search} alt="serach" />{" "}
            </button>
          </form>
        </div>
      </div>
  );
};
