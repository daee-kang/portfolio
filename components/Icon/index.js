import Image from "next/image";
import icons from "./icons";

const Icon = ({ icon, className, color }) => {
    const name = icon.toLowerCase();
    const src = icons[name];

    if (src) {
        return <Image className={className} title={icon} src={src} alt={icon} height={40} width={50} />;
    }

    return null;
};

export default Icon;