/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const SearchInput = ({ users, setFilteredUsers }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Filter users based on the search query
    const filteredUsers = users.filter((user) => {
      if (search === '') {
        return true; // Return true to include all users when the search query is empty
      } else if (user.name.toLowerCase().includes(search.toLowerCase())) {
        return true; // Return true if the user's name matches the search query
      }
      return false; // Otherwise, exclude the user
    });

    // Set the filtered users state
    setFilteredUsers(filteredUsers);
  }, [search, users, setFilteredUsers]);

  return (
    <input
      onChange={(e) => setSearch(e.target.value)}
      value={search}
      type="text"
      placeholder="Search for users"
      className="search"
    />
  );
};

export default SearchInput;
