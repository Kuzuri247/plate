import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">start learning</div>
      <h2 className="text-3xl font-bold">today</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse fuga
        tempore vitae facilis laborum suscipit dolore, praesentium impedit.
        Maiores sed iste recusandae quibusdam rerum, ab optio repudiandae
        eveniet adipisci aperiam? In, possimus?
      </p>
      <Image
        src="/images/cta.svg"
        alt="Call to Action"
        width={360}
        height={240}
      />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus icon" width={12} height={12} />
        <Link href="/companions/new">
          <p> build a new companion </p>
        </Link>
      </button>
    </section>
  );
};

export default CTA;
