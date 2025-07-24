import Link from "next/link";

type AppLinkProps = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  className?: string;
  download?: boolean;
};

export const AppLink: React.FC<AppLinkProps> = ({ label, href, variant, size, className, download }) => {
    if (download) {
        return (
            <a
                href={href}
                className={`${className} ${variant} ${size}`}
                download
            >
                {label}
            </a>
        );
    }
    return(
        <Link
            href={href}
            className={`${className} ${variant} ${size}`}
        >
            {label}
        </Link>
    )
}
