import React from "react";

import "./styles.scss";

interface HistoryListProps {
    history: string[];
}

export const HistoryList: React.FC<HistoryListProps> = ({ history }) => {
    return (
        <div className="history">
            {history &&
                history.map((pokemon, index) => {
                    return (
                        <div
                            className="evolutions__evolution"
                            key={`${pokemon}-${index}`}
                        >
                            {pokemon}
                        </div>
                    );
                })}
        </div>
    );
};
