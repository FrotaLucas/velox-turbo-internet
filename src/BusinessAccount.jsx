import AllBe from './all-benefits/allBenefit.tsx';
import Banner from './banner-business-account/header.tsx';
import HowItWorks from './how-it-works/howItWorks.tsx';
import FewSteps from './few-steps/fewSteps.tsx';
import Questions from './questions/questions.tsx';
const BusinessAccount = () => {
  return (
    <>
      <header></header>
      <main>
        <Banner />
        <AllBe />
        <HowItWorks />
        <FewSteps />
        <Questions />
      </main>
      <footer></footer>
    </>
  );
};

export default BusinessAccount;
