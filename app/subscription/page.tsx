import { PricingTable } from "@clerk/nextjs";

const Subscription = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] sm:px-10 sm:mx-8 md:px-20 md:mx-16 lg:px-40 lg:mx-20">
      <PricingTable />
    </div>
  );
};

export default Subscription;
