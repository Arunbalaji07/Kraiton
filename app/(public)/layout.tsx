const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={`dark:bg-background`}>
            {children}
        </div>
    );
};

export default PublicLayout;