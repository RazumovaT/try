import { useState, React } from "react";
import PropTypes from "prop-types";
export default function Header({
  onMinChange,
  onSecChange,
  onInputChange,
  onInputSubmit,
  label,
  min,
  sec,
}) {
 
  return (
    <header className="header">
      <h1>Todos</h1>
      <form className="new-todo-form" onSubmit={onInputSubmit}>
        <label>
          <input
            className="new-todo"
            value={label}
            onChange={onInputChange}
            placeholder="Task"
            autoFocus
            required
          />
          <input
            className="new-todo-form__timer"
            value={min}
            onChange={onMinChange}
            placeholder="Min"
            pattern="[0-9]{1,2}"
            maxLength={2}
            autoFocus
            required
          />
          <input
            className="new-todo-form__timer"
            value={sec}
            onChange={onSecChange}
            placeholder="Sec"
            pattern="[0-9]{1,2}"
            maxLength={2}
            autoFocus
            required
          />
        </label>
        <button type="submit" onSubmit={onInputSubmit} />
      </form>
    </header>
  );
}

Header.defaultProps = {
  onItemAdded: () => {},
};

Header.propTypes = {
  onItemAdded: PropTypes.func,
};
