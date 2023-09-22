import AllBenefits from './all-benefits/Allbenefits';
import Banner from './banner-business-account/header';
import HowItWorks from './how-it-works/HowItWorks';
const BusinessAccount = () => {
  return (
    <>
      <header></header>
      <main>
        <Banner />
        <AllBenefits />
        <HowItWorks />
      </main>
      <footer></footer>
    </>
  );
};

export default BusinessAccount;
