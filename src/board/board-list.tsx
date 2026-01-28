import {Outlet, useParams} from "react-router-dom";
import {TodoList} from "../Todo/TodoList.tsx";
import {Header} from "../header/header.tsx";
import {Helmet} from "@dr.pogodin/react-helmet";


export function BoardList () {
    const {id} = useParams<{id: string | undefined}>()
    return (
        <div>
            <Helmet>
                <title>React todo</title>
            </Helmet>
            <Header/>
            <main>
                <section>
                    {id ? <Outlet/> : <TodoList/>}
                </section>
            </main>
        </div>
    )
}