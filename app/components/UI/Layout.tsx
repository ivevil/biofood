import MainNavigation from '@/app/components/MainNavigation';
import Footer from '@/app/components/Footer';

function Layout(props: any) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
