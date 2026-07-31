import "./Travel.css";

export default function Travel() {

    return (

        <section className="travel">

            <div className="travel-image">

                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
                    alt="Viagens"
                />

            </div>

            <div className="travel-content">

                <span>

                    ✈️ Destinos

                </span>

                <h2>

                    Lugares que realmente
                    valem a viagem.

                </h2>

                <p>

                    Hotéis, restaurantes, passeios e experiências
                    que merecem estar no seu roteiro.

                </p>

                <button>

                    Explorar destinos

                </button>

            </div>

        </section>

    )

}