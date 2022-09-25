import React from "react";
import { Stats, Stat } from "../../store/reducers";

import "./styles.scss";

interface StatsProps {
    stats: Stats[];
}

export const StatsList: React.FC<StatsProps> = ({ stats }) => {
    return (
        <div className="stats">
            {stats &&
                stats.map((stat: Stats) => {
                    return (
                        <div className="stats__stat" key={stat.stat.name}>{`${
                            Stat[stat.stat.name]
                        }: ${stat.base_stat}`}</div>
                    );
                })}
        </div>
    );
};
