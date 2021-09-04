import Link from "next/dist/client/link";

export default function Back({ href }) {
    return (
        <Link href={href}>
            <span style={{ color: '#fca311', cursor: 'pointer', fontSize: '1.5rem' }} >
                ← back
            </span>
        </Link>
    );
}