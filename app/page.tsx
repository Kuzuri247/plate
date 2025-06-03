export const dynamic = 'force-dynamic';

import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import Banner from "@/components/Banner";
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main className="pb-3">
      <Banner />
      <h1 className="text-2xl underline justify-center text-center font-bold mt-4 pt-4">
        AI Companions
      </h1>

      <section className="home-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}{" "}
      </section>

      <section className="home-section">
        <CompanionList
          title="Recent Sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full shadow-[-4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
