import React from "react";

const RatingSorter = ({ sortOrder, onSortOrder }) => {
  return (
    <div className="inline-flex flex-wrap">
      <h3
        htmlFor="rating-sorter"
        className="mr-5 text-xl font-bold text-abnamro-green"
      >
        Sort by Rating:
      </h3>

      <select
        id="rating-sorter"
        value={sortOrder}
        onChange={onSortOrder}
        className="border focus:outline-none border-abnamro-yellow w-[180px] h-[30px]"
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
};

export default RatingSorter;
