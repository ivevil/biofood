import MainNavigation from '@/app/components/MainNavigation';
import Footer from '@/app/components/Footer';

function Layout(props: any) {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
