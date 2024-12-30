import React from "react";

function TabMenu({ activeTab, onSwitchTab }) {
    return (
        <div className="tab-menu">
            <button
                className={activeTab === "notes" ? "active" : ""}
                onClick={() => onSwitchTab("notes")}
            >
                Notes
            </button>
            <button
                className={activeTab === "archive" ? "active" : ""}
                onClick={() => onSwitchTab("archive")}
            >
                Archived
            </button>
        </div>
    );
}

export default TabMenu;