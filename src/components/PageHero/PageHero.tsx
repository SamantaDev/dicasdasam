import "./PageHero.css";

interface PageHeroProps {

  title: string;

  subtitle: string;

}

export default function PageHero({

  title,

  subtitle,

}: PageHeroProps) {

  return (

    <section className="page-hero">

      <div className="page-hero-content">

        <h1>{title}</h1>

        <p>{subtitle}</p>

      </div>

    </section>

  );

}