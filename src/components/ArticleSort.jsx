import React from "react";

const ArticleSort = (props) => {
  const { handleInputChange } = props;

  return (
    <div>
      <form>
        <label className="page__sort__title">
          sort by:
          <select className="page__sort__choice" onChange={handleInputChange}>
            <option value="newest first">newest first</option>
            <option value="oldest first">oldest first</option>
            <option value="most votes">most votes</option>
            <option value="least votes">least votes</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default ArticleSort;
