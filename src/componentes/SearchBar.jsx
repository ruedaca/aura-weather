import React, { useState, useImperativeHandle, forwardRef } from 'react';

const SearchBar = forwardRef(({ onSearch, isLoading }, ref) => {
  const [input, setInput] = useState('');

  const capitalizeWords = (text) => {
    return text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(capitalizeWords(value));
  };

  useImperativeHandle(ref, () => ({
    clearInput: () => setInput('')
  }));

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Ingrese el nombre de la ciudad"
        value={input}
        onChange={handleChange}
        disabled={isLoading}
      />
      <button type="submit" className="search-button" disabled={isLoading}>
        {isLoading ? '...' : 'Buscar'}
      </button>
    </form>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;