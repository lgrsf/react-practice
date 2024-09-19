import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemCount } from "./ItemCount";

export const ItemListContainer = () => {

    return (
        <section>
            <div>

                <ItemCount stock={5} initial={1}/>

            </div>
        </section>
    )
}


