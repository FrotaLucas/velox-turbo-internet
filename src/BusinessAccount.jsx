import AllBenefits from './all-benefits/Allbenefits';
import Banner from './banner-business-account/header';
import HowItWorks from './how-it-works/HowItWorks';
import FewSteps from './few-steps/FewSteps';
const BusinessAccount = () => {
  return (
    <>
      <header></header>
      <main>
        <Banner />
        <AllBenefits />
        <HowItWorks />
        <FewSteps />
      </main>
      <footer></footer>
    </>
  );
};

export default BusinessAccount;
