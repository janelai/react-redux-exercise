import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { deselectItem } from './grocerySlice';

const ListSelection = () => {

    const selectedItem = useAppSelector((state) => state.grocery.selectedItem);
    const isItemSelected = useAppSelector((state) => state.grocery.isItemSelected);
    const dispatch = useAppDispatch();
    
    const handleDeselectItem = () => {
        dispatch(deselectItem());
    };

    if (!isItemSelected) {
        return (
            <div className="mt-4 p-4 border rounded bg-blue-50">
                <h3 className="text-lg font-medium">Selected Item Details</h3>
                <div className="mt-2">
                    <p>No item selected</p>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-4 p-4 border rounded bg-blue-50">
            <h3 className="text-lg font-medium">Selected Item Details</h3>
            <div className="mt-2">
                {!isItemSelected ? (
                    <p>No item selected</p>
                ) : ( <>
                        <p><strong>Name:</strong> {selectedItem.name}</p>
                        <p><strong>Category:</strong> {selectedItem.category}</p>
                        <p><strong>Delivery Method:</strong> {selectedItem.deliveryMethod}</p>
                    </> )
                }
            </div>
            <button 
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                onClick={handleDeselectItem}
            >
                Deselect
            </button>
        </div>
    );
};

export default ListSelection
