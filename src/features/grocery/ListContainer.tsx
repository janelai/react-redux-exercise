import { useEffect } from "react"

import { type RootState } from "../../app/store"
import { addItem } from "./grocerySlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import ListInputs from "./ListInputs"
import ListSelection from "./ListSelection"
import ListTable from "./ListTable"

export const ListContainer: React.FC = () => {
  // ✅ Get groceryList from Redux state
  const groceryList = useAppSelector((state: RootState) => state.grocery.list)

  // ✅ Get dispatch function
  const dispatch = useAppDispatch()

  useEffect(() => {
    // fetch data from API (localhost:3001/groceries) and set in redux.
    console.log("groceryList", groceryList)
  }, [groceryList])

  return (
    <section className="groceryApp">
      <div className="listInputs">
        <ListInputs addItem={item => dispatch(addItem(item))} />
      </div>
      <div className="types">
        <ListSelection />
        <ListTable />
      </div>
    </section>
  )
}

export default ListContainer
