import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { ChildrenProps } from '@/types/components';
const layout = ({children}: ChildrenProps) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default layout;