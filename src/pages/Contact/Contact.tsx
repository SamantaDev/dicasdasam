import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import PageHero from "../../components/PageHero/PageHero";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState("");

  function enviarEmail(e: React.FormEvent) {
    e.preventDefault();

    if (!form.current) return;

    setEnviando(true);
    setMensagem("");

    emailjs
      .sendForm(
        "service_loej2si",
        "template_rz05kub",
        form.current,
        {
          publicKey: "cyqgoYqrN8apwD079",
        }
      )
      .then(
        () => {
          setMensagem("Mensagem enviada com sucesso! 😊");
          form.current?.reset();
        },
        () => {
          setMensagem("Erro ao enviar mensagem. Tente novamente.");
        }
      )
      .finally(() => {
        setEnviando(false);
      });
  }

  return (
  <>
    <PageHero
      title="Contato"
      subtitle="Entre em contato para dúvidas, sugestões e parcerias."
    />

    <section className="contact-section">

      <div className="contact-container">

        <div className="contact-info">

          <h2>
            Vamos conversar? 💌
          </h2>

          <p>
            Tem alguma dúvida, sugestão, ideia de parceria ou quer
            falar comigo? Preencha o formulário e eu vou responder
            assim que possível.
          </p>


          <div className="contact-email">

            <strong>
              📩 E-mail
            </strong>

            <p>
              contato@dicasdasam.com.br
            </p>

          </div>


        </div>


        <form
          ref={form}
          onSubmit={enviarEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
          />


          <input
            type="text"
            name="subject"
            placeholder="Assunto"
            required
          />


          <textarea
            name="message"
            placeholder="Sua mensagem"
            rows={6}
            required
          />


          <button
            type="submit"
            disabled={enviando}
            className="contact-button"
          >

            {enviando
              ? "Enviando..."
              : "Enviar mensagem"
            }

          </button>


          {mensagem && (

            <p className="contact-message">
              {mensagem}
            </p>

          )}


        </form>


      </div>

    </section>

  </>
);
}