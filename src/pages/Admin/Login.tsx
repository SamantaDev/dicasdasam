import "./Login.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { Eye, EyeOff, LockKeyhole, Mail, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firebase";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Email inválido.");
      return;
    }

    if (!password) {
      setError("Informe sua senha.");
      return;
    }

    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard");
    } catch (loginError: unknown) {
      const code = typeof loginError === "object" && loginError !== null && "code" in loginError
        ? String(loginError.code)
        : "";

      if (code === "auth/invalid-email") {
        setError("Email inválido.");
      } else if (code === "auth/wrong-password" || code === "auth/invalid-credential") {
        setError("Senha incorreta.");
      } else if (code === "auth/user-not-found") {
        setError("Usuário não encontrado.");
      } else {
        setError("Erro ao conectar.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="admin-login">
      <section className="admin-login__showcase" aria-hidden="true">
        <div className="admin-login__showcase-content">
          <span className="admin-login__showcase-icon"><Sparkles size={23} /></span>
          <p>Seu espaço para criar, organizar e inspirar.</p>
          <div className="admin-login__quote">“Transforme cada indicação em uma ótima descoberta.”</div>
        </div>
      </section>

      <section className="admin-login__panel">
        <div className="admin-login__form-wrap">
          <a className="admin-login__brand" href="/">
            <span className="admin-login__brand-mark">S</span>
            <span>Dicas da Sam</span>
          </a>

          <div className="admin-login__heading">
            <p>Painel Administrativo</p>
            <h1>Bem-vinda de volta.</h1>
            <span>Acesse sua conta para continuar.</span>
          </div>

          <form className="admin-login__form" onSubmit={handleSubmit} noValidate>
            <label className="admin-login__field" htmlFor="admin-email">
              <span>Email</span>
              <div>
                <Mail size={18} aria-hidden="true" />
                <input id="admin-email" type="email" placeholder="seuemail@exemplo.com" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} disabled={isLoading} />
              </div>
            </label>

            <label className="admin-login__field" htmlFor="admin-password">
              <span>Senha</span>
              <div>
                <LockKeyhole size={18} aria-hidden="true" />
                <input id="admin-password" type={showPassword ? "text" : "password"} placeholder="Digite sua senha" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} disabled={isLoading} />
                <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"} disabled={isLoading}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </label>

            <div className="admin-login__options">
              <label className="admin-login__remember" htmlFor="remember-me">
                <input id="remember-me" type="checkbox" />
                <span aria-hidden="true" />
                Lembrar-me
              </label>
              <a href="#recuperar-senha">Esqueci minha senha</a>
            </div>

            {error && <p className="admin-login__error" role="alert">{error}</p>}

            <button className="admin-login__submit" type="submit" disabled={isLoading}>{isLoading ? "Entrando..." : <>Entrar <span aria-hidden="true">→</span></>}</button>
          </form>
        </div>
      </section>
    </main>
  );
}
