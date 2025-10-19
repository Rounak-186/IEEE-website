import clsx from "clsx";

type CardPropsType = {
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ children, className }: CardPropsType) => {
    return (
        <div className={clsx('shadow-card hover:shadow-[var(--primary)/30] w-full max-w-md h-fit rounded-lg hover:scale-[1.02] hover:-translate-x-[5px] hover:-translate-y-[5px] transition-all duration-500 border border-gray-300 p-2 member-card flex flex-col justify-center gap-1 relative overflow-hidden', className)}>
            {children}
        </div>
    )
}