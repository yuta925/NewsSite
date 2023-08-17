import React from 'react';

interface TabProps {
    label: string;
    icon: React.ReactElement;
    activeTab: string;
    onClick: (label: string) => void;
}

const Tab: React.FC<TabProps> = ({ label, activeTab, onClick }) => {
    const isActive = label === activeTab;

    return (
        <button
            className={`tab ${isActive ? 'active' : ''}`}
            onClick={() => onClick(label)}
        >
            {label}
        </button>
    );
};

export default Tab;
