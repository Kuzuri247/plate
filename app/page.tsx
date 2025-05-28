import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main className="pb-3">
      <h1 className="text-2xl underline"></h1>
      <section className="home-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CompanionCard
          id="1"
          name="first"
          subject="Math"
          duration={45}
          color="#34d5eb"
          topic="Algebra"
          bookmarked={false}
        />
        <CompanionCard
          id="2"
          name="second"
          subject="Science"
          duration={45}
          color="#64eb34"
          topic="Physics"
          bookmarked={false}
        />
        <CompanionCard
          id="3"
          name="third"
          subject="History"
          duration={45}
          color="#3734eb"
          topic="World History"
          bookmarked={false}
        />
         {/* <CompanionCard
          id="4"
          name="fourth"
          subject="Literature"
          duration={45}
          color="#eb34a1"
          topic="Shakespeare"
          bookmarked={false}
        /> 
        <CompanionCard
          id="5"
          name="fifth"
          subject="Geography"
          duration={45}
          color="#ebd134"
          topic="Maps and Regions"
          bookmarked={false}
        />
        <CompanionCard
          id="6"
          name="sixth"
          subject="Computer Science"
          duration={45}
          color="#eb34d1"
          topic="Programming Basics"
          bookmarked={false}
        />  */}
      </section>

      <section className="home-section">
        <CompanionList
          title="Recent Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
