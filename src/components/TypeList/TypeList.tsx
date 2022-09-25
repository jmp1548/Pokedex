import React from "react";
import { Types } from "../../store/reducers";
import "./styles.scss";

interface TypeListProps {
    types: Types[];
}

export const TypeList: React.FC<TypeListProps> = ({ types }) => {
    return (
        <div className="types">
            {types &&
                types.map((type: Types) => {
                    return (
                        <div className="types__types" key={type.type.name}>
                            {type.type.name}
                        </div>
                    );
                })}
        </div>
    );
};
