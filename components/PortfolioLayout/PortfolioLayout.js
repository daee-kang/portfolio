import styles from './Portfolio.module.css';

export default function PortfolioLayout(
    {
        children,
        images
    }
) {
    return (
        <div>
            {children}
        </div>
    );
}