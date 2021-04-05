import Image, { ImageLoaderProps } from 'next/image';

const picsumLoader = ({ src, width }: ImageLoaderProps): string => {
    width = width / 2; // to save bandwith!
    return `https://picsum.photos/id/${src}/${width}/${Math.round(
        width / 1.7
    )}`;
};

export type ImagePicsumProps = {
    id: string;
    author?: string;
};

const ImagePicsum: React.FC<ImagePicsumProps> = ({ id, author }) => {
    return (
        <Image
            loader={picsumLoader}
            src={id}
            alt={author}
            layout="fill"
            objectFit="cover"
        />
    );
};

export default ImagePicsum;
