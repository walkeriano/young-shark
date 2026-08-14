import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import SharkLogo from "../../components/shared/SharkLogo/SharkLogo";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="grid min-h-screen bg-[#f7f7f5] lg:grid-cols-[minmax(0,0.9fr)_minmax(32rem,1.1fr)]">
      <section className="relative hidden overflow-hidden bg-[#155bd6] p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <Link
          to="/"
          className="relative inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft size={15} />
          Volver a la tienda
        </Link>

        <div className="relative max-w-xl">
          <p
            className="mb-5 text-xs uppercase tracking-[0.35em] text-white/65"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            Comunidad YOUNGSHARK
          </p>
          <h1
            className="text-6xl leading-[0.95] text-white xl:text-8xl"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            COMPLETA
            <br />
            <span className="text-white/60">TU COMPRA</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-white/65">
            Ingresá para gestionar tus pedidos, guardar tus favoritos y acceder a beneficios
            exclusivos.
          </p>
        </div>

        <p className="relative text-xs uppercase tracking-[0.2em] text-white/45">
          Rendimiento · Identidad · Evolución
        </p>
      </section>

      <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-md">
          <div className="mb-10 flex items-center justify-between lg:hidden">
            <SharkLogo />
            <Link to="/" aria-label="Volver a la tienda" className="text-black/45 hover:text-black">
              <ArrowLeft size={20} />
            </Link>
          </div>

          <div className="mb-9">
            <span
              className="text-xs font-semibold uppercase tracking-[0.3em] text-[#155bd6]"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              Acceso de clientes
            </span>
            <h2
              className="mt-3 text-4xl leading-none text-[#101010] sm:text-5xl"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              INICIAR SESIÓN
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-black/45">
              Ingresá tus datos para acceder a tu cuenta.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-black/65">
                Correo electrónico
              </span>
              <span className="flex items-center border border-black/15 bg-white px-4 transition-colors focus-within:border-[#155bd6] focus-within:ring-1 focus-within:ring-[#155bd6]">
                <Mail size={18} className="shrink-0 text-black/30" />
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="nombre@correo.com"
                  className="w-full bg-transparent px-3 py-4 text-sm text-[#101010] outline-none placeholder:text-black/25"
                />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-black/65">
                Contraseña
              </span>
              <span className="flex items-center border border-black/15 bg-white px-4 transition-colors focus-within:border-[#155bd6] focus-within:ring-1 focus-within:ring-[#155bd6]">
                <LockKeyhole size={18} className="shrink-0 text-black/30" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  placeholder="Tu contraseña"
                  className="w-full bg-transparent px-3 py-4 text-sm text-[#101010] outline-none placeholder:text-black/25"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="text-black/35 transition-colors hover:text-black"
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </span>
            </label>

            <div className="flex items-center justify-between gap-4 text-xs">
              <label className="flex items-center gap-2 text-black/55">
                <input type="checkbox" className="accent-[#155bd6]" />
                Recordarme
              </label>
              <button type="button" className="font-semibold text-[#155bd6] hover:underline">
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 bg-[#155bd6] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-[#0f4fbd]"
            >
              Ingresar
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-black/45">
            ¿Todavía no tenés una cuenta?{" "}
            <button type="button" className="font-semibold text-[#155bd6] hover:underline">
              Crear cuenta
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}
