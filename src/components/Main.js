import React from "react";
import Text from "./Text";
import Stages from "./Stages";
import Map from "./Map";
import CatalogItem from "./CatalogItem";
import {catalogList} from "../products"

function Main() {
    return (
        <main>
            <section className="catalog container">
                {catalogList.map((item, idx) => <CatalogItem key={idx} item={item}/>)}
            </section>

            <Text/>

            <Stages/>

            <Map/>
        </main>
    );
}

export default Main;