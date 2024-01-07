import React, {ButtonHTMLAttributes} from "react";

interface ButtonProps {
    text: string;
    size: "sm" | "md" | "lg" | "xl";
    callback?: () => void;
}

const sizes: Record<ButtonProps["size"], string> = {
    "sm": "h-6 w-6",
    "md": "h-8 w-16",
    "lg": "h-8 w-32",
    "xl": "h-8 w-44",
};

function Button({text, size, callback}: ButtonProps) {
    return (
        <button className={`bg-white rounded-md text-black hover:bg-gray-300 transition-colors p-1 font-semibold ${sizes[size]}`} onClick={callback}>
            {text}
        </button>
    );
}

export default Button;
