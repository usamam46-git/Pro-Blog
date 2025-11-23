import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-primary",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 
            hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed
            ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
