import React from "react";

import "./styles.scss";

interface DescriptionProps {
    flavorText: string;
}

export const Description: React.FC<DescriptionProps> = ({ flavorText }) => {
    return (
        <div className="description">
            <p>{flavorText}</p>
        </div>
    );
};
