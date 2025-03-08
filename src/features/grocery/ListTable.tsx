import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { removeItem, selectItem, deselectItem } from './grocerySlice';

export const ListTable = () => {

  const groceryList = useAppSelector((state) => state.grocery.list);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleSelectItem = (id: number) => {
    dispatch(selectItem(id));
  };

  const handleDeselectItem = (id: number) => {
    dispatch(deselectItem());
  };

  return (
      <div className="listTable">
        <h2>Grocery List</h2>
        <table className="min-w-full table-fixed border-separate border-spacing-x-10 border-spacing-y-0">
          {groceryList.length == 0 ? (
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
                {groceryList.map((item) => (
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
