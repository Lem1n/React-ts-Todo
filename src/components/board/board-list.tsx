import {TodoList} from "../Todo/TodoList.tsx";
import {Helmet} from "@dr.pogodin/react-helmet";


export function BoardList () {
    return (
        <>
            <Helmet>
                <title>React todo</title>
            </Helmet>
            <main>
                <TodoList/>
            </main>
        </>
    )
}