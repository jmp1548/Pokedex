import React from "react";

import "./styles.scss";

interface HistoryListProps {
    history: string[];
    handleSearch: (pokemon: string) => void;
}

export const HistoryList: React.FC<HistoryListProps> = ({
    history,
    handleSearch,
}) => {
    return (
        <div className="history">
            {history &&
                history.map((pokemon, index) => {
                    return (
                        <button
                            className="history__button"
                            key={`${pokemon}-${index}`}
                            onClick={() => handleSearch(pokemon)}
                        >
                            {pokemon}
                        </button>
                    );
                })}
        </div>
    );
};
