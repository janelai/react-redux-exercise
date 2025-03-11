import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  name: string;
  category: string;
  deliveryMethod: string;
}

interface ListState {
  list: Item[];
  isItemSelected: boolean;
  selectedItem: Item;
}

const initialState: ListState = {
  list: [
    {
      id: 66,
      name: "Bananas",
      category: "Fruit",
      deliveryMethod: "Air",
    },
    {
      id: 16,
      name: "Whole Grain Bread",
      category: "Grains",
      deliveryMethod: "Air",
    },
    {
      id: 100,
      name: "Lettuce",
      category: "Vegetable",
      deliveryMethod: "Ground",
    },
    {
      id: 10,
      name: "Roasted Turkey",
      category: "Deli",
      deliveryMethod: "Ground",
    },
  ],
  isItemSelected: false,
  selectedItem: {
    id: 0,
    name: "",
    category: "",
    deliveryMethod: "",
  },
};

export const grocerySlice = createSlice({
  name: "grocery",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.list.push(action.payload);
    },

    removeItem: (state, action: PayloadAction<number>) => {
      // Write a custom reducer that will remove an item from the list array
      // PayloadAction<number> means the action carries a number (ID number)
      // creates list with everything but that item
      state.list = state.list.filter(item => item.id !== action.payload);
      
      if (state.isItemSelected && state.selectedItem.id === action.payload) {
        state.isItemSelected = false;
        state.selectedItem = {
          id: 0,
          name: "",
          category: "",
          deliveryMethod: "",
        };
      }
    },

    selectItem: (state, action: PayloadAction<number>) => {
      // Write a custom reducer that will select an item
      const itemToSelect = state.list.find(item => item.id === action.payload);
  
      // find item in state list given ID
      if (itemToSelect) {
        state.isItemSelected = true;
        state.selectedItem = itemToSelect;
      }
    },

    deselectItem: (state) => {
      // Write a customer reducer that will deselect an item
      state.isItemSelected = false;
      state.selectedItem = {
        id: 0,
        name: "",
        category: "",
        deliveryMethod: "",
      };
    },
  },
});

// Export actions
export const { addItem, removeItem, selectItem, deselectItem } = grocerySlice.actions;

// Export reducer
export default grocerySlice.reducer;
