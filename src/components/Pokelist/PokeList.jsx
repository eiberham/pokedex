import React, { lazy, Suspense } from "react";
import { withRouter } from "react-router-dom";
import pokeapi from "../../apis/pokeapi";

const PokeItem = lazy(() => import('../PokeItem'));

const renderLoader = () => <p>Loading</p>;

const PokeList = ({history}) => {
    // const [pokemons, setPokemons] = useState([]);
    console.log("history: ", history);

    const handleClick = (name) => {
        history.push({
            pathname: `/pokemon/${name}`
        })
    };

    return (
        <>
            {[...Array(151)].map( (e,id) => (
                <Suspense fallback={renderLoader()} key={id.toString()}>
                    <PokeItem id={(id + 1).toString()} handleClick={handleClick}/>
                </Suspense>
            ))}
        </>
    )
};

export default withRouter(PokeList);