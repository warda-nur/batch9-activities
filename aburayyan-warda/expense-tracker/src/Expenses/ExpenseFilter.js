import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div className="expenses-filte__label">
          <label>Filter by year </label>
        </div>
        <select
          onChange={(e) => props.onChangeFilter(e.target.value)}
          value={props.selected}
        >
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
