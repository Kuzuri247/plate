import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="cta-badge">Start learning</div>
      <h2 className="text-3xl font-bold">Today</h2>
      <p className="justity-center text-center">
        Build your own AI companion and start your journey with BabbleBuddy.
        <br />
        Click the button below to create a new companion.
      </p>
      <Image
        src="/images/cta.svg"
        alt="Call to Action"
        width={360}
        height={240}
      />
      <button className="btn-primary border-b-2 dark:border-gray-700">
        <Image src="/icons/plus.svg" alt="plus icon" width={12} height={12} />
        <Link href="/companions/new">
          <p> Build a new companion </p>
        </Link>
      </button>
      <div className="pt-2">
        <p className="text-sm text-slate-50">
          Already have a companion?{" "}
          <Link href="/companions" className="text-slate-300">
            View your companions
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CTA;
