export default function FooterIcon({
    ariaLabel,
    className = "",
    href,
    icon: Icon,
    ...props
}) {
    const baseClasses = "text-gray-500 hover:text-white";
    const sizeClasses = "h-5 w-5";

    const combinedClasses = `${baseClasses} ${className}`;

    return (
        <div>
            {href ? (
                <a
                    aria-label={ariaLabel}
                    href={href}
                    className={combinedClasses}
                    {...props}
                >
                    <Icon className={sizeClasses} />
                </a>
            ) : (
                <Icon className={sizeClasses} {...props} />
            )}
        </div>
    );
}
