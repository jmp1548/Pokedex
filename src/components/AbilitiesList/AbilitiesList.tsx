import React from "react";
import { Abilities } from "../../store/reducers";

import "./styles.scss";

interface AbilitiesListProps {
    abilities: Abilities[];
}

export const AbilitiesList: React.FC<AbilitiesListProps> = ({ abilities }) => {
    return (
        abilities && (
            <div className="abilities">
                {abilities.map((abilitie: Abilities) => {
                    return (
                        <div
                            className="abilities__ability"
                            key={abilitie.ability.name}
                        >
                            {abilitie.ability.name}
                        </div>
                    );
                })}
            </div>
        )
    );
};
