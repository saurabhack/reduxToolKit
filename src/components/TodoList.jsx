import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItems, clearCart } from '../utils/todoSlice';
import { fetchUsers } from '../utils/userSlice';


function TodoList() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const items = useSelector((store) => store.cart.item)
    const users = useSelector((store) => store.users)

    console.log("items : ", items)
    console.log("users : ", users)

    useEffect(() => {
        if (users.status == 'idle') {
            dispatch(fetchUsers())
        }
    }, [dispatch])


    if (users.status == 'loading') {
        return <h1>Loading data Pls Wait....</h1>
    }
    else if (users.status == 'failed') {

        return <h1>{users.error}</h1>
    }
    return (
        <>
            <div>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => dispatch(addItem(input))}>Add Item</button>
                <button onClick={() => dispatch(clearCart())}>Clear</button>
            </div>

            <ul>
                {items.map((val, i) => {
                    return (
                        <li key={i + 1}>{val}</li>
                    )
                })}
            </ul>



            <ul>
                {users.users.map((val, i) => {
                    return(
                        <li key={i+1}>{val.username}</li>
                    )
                })}
            </ul>

            

        </>
    )
}

export default TodoList