import { Overlay } from '@/components/ingredients/Overlay';
import { Loader } from '@/components/ingredients/Loader';

const LoaderFullPage = () => {
    return (
        <Overlay background="light">
            <Loader />
        </Overlay>
    );
};
export default LoaderFullPage;
