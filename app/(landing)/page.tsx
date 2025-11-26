import Heading from "@/components/landing/heading";
import Heroes from "@/components/landing/heroes";
import Footer from "@/components/landing/footer";

const LandingPage = () => {
  return (
    <div className={`min-h-full flex flex-col`}>
      <div
        className={`flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10`}
      >
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
