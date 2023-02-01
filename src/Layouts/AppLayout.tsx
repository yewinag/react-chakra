import { Footer } from '../components';
import { Header } from '../components/Header';
interface IProps {
  children?: React.ReactNode;
}
export const AppLayout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
