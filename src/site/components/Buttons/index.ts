type ButtonSize = "extrasmall" | "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: ButtonVariant;
    children?: any;
    title?: string | undefined;
    loading?: boolean;
    className?: string;
    onClick?: React.ReactEventHandler;
}

export const buttonSizeClasses: Record<ButtonSize, string> = {
    extrasmall: "py-1 px-2 text-xs m-1",
    small: "py-2 px-3 text-sm m-1",
    medium: "py-3 px-4 text-sm m-1",
    large: "py-7 px-6 text-sm m-1",
};

export const buttonVariantClasses: Record<ButtonVariant, string> = {
    primary: "text-slate-50 bg-[#004267] hover:bg-[#004167e8] hover:shadow-xl duration-300 rounded-xl block",
    secondary: "bg-transparent border text-slate-600 border-[#004267] rounded-xl duration-300 hover:shadow-xl",
};
