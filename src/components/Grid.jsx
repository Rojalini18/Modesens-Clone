import "./Grid.css";
export const Grid = () => {
  return (
    <div className="pag-div">
      <div className="ButtonDiv">
        <button>SAVE MY SEARCH</button>
      </div>
      <div className="paginationWrap">
        <div className="pagination">
          <a>1</a>
          <a>2</a>
          <a>3</a>
          <a>4</a>
          <div className="paginationDot">
            <c>.</c>
            <c>.</c>
            <c>.</c>
          </div>

          <u className="imgTag">
            <img src="https://img.icons8.com/material-outlined/14/000000/more-than.png" />
          </u>
        </div>
      </div>
      <div className="sort-div">
        <img
          className="view-sort"
          src="https://cdn.modesens.com/static/img/20210908column2.svg"
          alt=""
        />
        <img
          className="view-sort"
          src="https://cdn.modesens.com/static/img/20210908column3.svg"
          alt=""
        />
        <img
          className="view-sort"
          src="https://cdn.modesens.com/static/img/20210908column4_active.svg"
          alt=""
        />
        <div>
          <select className="options" name="" id="">
            <option value="">Best Sellers</option>
            <option value="">New Arrivals</option>
            <option value="">Most Liked</option>
            <option value="">Highest Price</option>
            <option value="">Lowest Price</option>
            <option value="">New Sales</option>
            <option value="">Largest Discount Amount</option>
            <option value="">Largest Discount Percentage</option>
          </select>
        </div>
      </div>
    </div>
  );
};
