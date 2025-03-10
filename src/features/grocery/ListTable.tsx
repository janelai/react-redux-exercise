import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { removeItem, selectItem, deselectItem } from './grocerySlice';

export const ListTable = () => {

  const groceryList = useAppSelector((state) => state.grocery.list);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState('');  // state for search
  const [filteredItems, setFilteredItems] = useState(groceryList);  // state for filtered search items

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleSelectItem = (id: number) => {
    dispatch(selectItem(id));
  };

  const handleDeselectItem = (id: number) => {
    dispatch(deselectItem());
  };

  // update based on search or grocery items
  useEffect(() => {
    if (searchTerm.trim() === '') {
      // show all items when there is no search
      setFilteredItems(groceryList);
    } else {
      const filtered = groceryList.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.deliveryMethod.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [searchTerm, groceryList]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };


  return (
      <div className="listTable">
        <h2>Grocery List</h2>
        {/* bonus search functionality */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search list..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border px-6 py-2 rounded w-full"
          />
        </div>
        <table className="min-w-full table-fixed border-separate border-spacing-x-10 border-spacing-y-0">
          {(filteredItems.length === 0) ? (
              <tr>
                <td>
                  No items in your grocery list
                </td>
              </tr>
          ) : (
            <>
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-6 py-2">Name</th>
                  <th className="border px-6 py-2">Category</th>
                  <th className="border px-6 py-2">Delivery Method</th>
                  <th className="border px-6 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-6 py-2">{item.name}</td>
                    <td className="border px-6 py-2">{item.category}</td>
                    <td className="border px-6 py-2">{item.deliveryMethod}</td>
                    <td className="border px-6 py-2">
                      <button 
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                        onClick={() => handleSelectItem(item.id)}
                      >
                        Select
                      </button>
                      <button 
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                        onClick={() => handleDeselectItem(item.id)}
                      >
                        Deselect
                      </button>
                      <button 
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </table>
      </div>
  );

};

export default ListTable
