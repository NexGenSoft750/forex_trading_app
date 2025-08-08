type RightArrowProps = {
    className?: string;
};

export default function RightArrow({ className }: RightArrowProps = {}) {
    return (
        <>
            <svg
                className={className}
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

        </>
    );
}