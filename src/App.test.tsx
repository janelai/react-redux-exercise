import { screen, waitFor, cleanup } from "@testing-library/react"
import App from "./App"
import ListTable from "./features/grocery/ListTable"
import ListSelection from "./features/grocery/ListSelection"
import { renderWithProviders } from "./utils/test-utils"

const initialState = {
  list: {
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
  }
};

test("App should have correct initial render", () => {
  renderWithProviders(<App />);

  // The app should be rendered correctly
  expect(screen.getByText(/React Redux App/i)).toBeInTheDocument();
})

describe("ListTable tests", () => {

  test("Initial ListTable items are all present", () => {
    // render component with initial state
    renderWithProviders(<ListTable />);

    // check every item is present
    initialState.list.list.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.category)).toBeInTheDocument();
    });
  });

  test("Select button should select an item", async () => {
    const { store, user } = renderWithProviders(<ListTable />);
    
    // click select button
    const selectButtons = screen.getAllByText("Select");
    await user.click(selectButtons[0]);

    // check properties
    expect(store.getState().grocery.isItemSelected).toBe(true);
    expect(store.getState().grocery.selectedItem).toEqual(initialState.list.list[0]);
  });

  test("Deselect button should deselect an item", async () => {
    const { store, user } = renderWithProviders(<ListTable />);
    
    // click deselect button
    const deselectButtons = screen.getAllByText("Deselect");
    await user.click(deselectButtons[0]);
    
    // check properties
    expect(store.getState().grocery.isItemSelected).toBe(false);
  });

  test("Remove button should remove an item", async () => {
    const { store, user } = renderWithProviders(<ListTable />);
    
    expect(screen.getByText("Bananas")).toBeInTheDocument();
    
    const removeButtons = screen.getAllByText("Remove");
    await user.click(removeButtons[0]);
    
    // check length is -1 and item not present
    await waitFor(() => {
      expect(store.getState().grocery.list.length).toBe(3);
      expect(store.getState().grocery.list.find(item => item.id === 66)).toBeUndefined();
      expect(screen.queryByText("Bananas")).not.toBeInTheDocument();
    });
  });
});

describe("ListSelection tests", () => {

  test("Initial ListSelection items should be empty", () => {
    renderWithProviders(<ListSelection />);

    expect(screen.getByText("No item selected")).toBeInTheDocument();
  });

  test("Once selected, item should show in ListSelection", async () => {
    const { store, user } = renderWithProviders(<ListTable />);
    
    const selectButtons = screen.getAllByText("Select");
    await user.click(selectButtons[0]);

    // save current state to use from ListTable to ListSelection
    const currentState = store.getState();

    cleanup();

    // check that selected item shows in listSelection
    const {} = renderWithProviders(<ListSelection />, {
      preloadedState: currentState});
      expect(screen.getByText("Bananas")).toBeInTheDocument();
  });

  test("Once deselected from ListTable, item should be empty", async () => {
    const { store, user } = renderWithProviders(<ListTable />);
    
    const selectButtons = screen.getAllByText("Deselect");
    await user.click(selectButtons[0]);

    const currentState = store.getState();

    cleanup();

    const {} = renderWithProviders(<ListSelection />, {
      preloadedState: currentState});
    expect(screen.getByText("No item selected")).toBeInTheDocument();
  });

  test("Once deselected from ListSelection, item should be empty", async () => {
    const { store, user } = renderWithProviders(<ListTable />);
    
    const selectButtons = screen.getAllByText("Select");
    await user.click(selectButtons[0]);

    const currentState = store.getState();

    cleanup();

    const {} = renderWithProviders(<ListSelection />, {
      preloadedState: currentState});
    const deselectButton = screen.getByText("Deselect");
    await user.click(deselectButton);
    expect(screen.getByText("No item selected")).toBeInTheDocument();
  });
});