import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { deselectItem } from './grocerySlice';

const ListSelection = () => {

    const selectedItem = useAppSelector((state) => state.grocery.selectedItem);  // hook to grab item properties
    const isItemSelected = useAppSelector((state) => state.grocery.isItemSelected);
    const dispatch = useAppDispatch();  // used to handle deselect action
    
    const handleDeselectItem = () => {
        dispatch(deselectItem());
    };

    return (
        <div className="listSelection">
            <div className="min-w-full table-fixed border-separate border-spacing-x-10 border-spacing-y-0">
                <h3>Selected Item Details</h3>
                <div>
                    {!isItemSelected ? (
                        <p>No item selected</p>
                    ) : ( <>
                            <p><strong>Name:</strong> {selectedItem.name}</p>
                            <p><strong>Category:</strong> {selectedItem.category}</p>
                            <p><strong>Delivery Method:</strong> {selectedItem.deliveryMethod}</p>
                            <button 
                                className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                onClick={handleDeselectItem}
                            >
                                Deselect
                            </button>
                        </> )
                    }
                </div>
            </div>
        </div>
    );
};

export default ListSelection
