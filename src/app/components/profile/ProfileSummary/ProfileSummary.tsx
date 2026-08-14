import { CalendarDays, Camera, Mail, MapPin, Phone } from "lucide-react";
import { PROFILE_USER } from "../../../data/profile";

export default function ProfileSummary() {
  return (
    <aside className="h-fit border border-black/10 bg-white p-6 shadow-sm lg:sticky lg:top-28">
      <div className="flex items-center gap-4 border-b border-black/8 pb-6 lg:block">
        <div className="relative h-24 w-24 shrink-0 lg:h-32 lg:w-32">
          <img
            src={PROFILE_USER.avatar}
            alt={`Foto de perfil de ${PROFILE_USER.name}`}
            className="h-full w-full object-cover"
          />
          <button
            type="button"
            aria-label="Cambiar foto de perfil"
            className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center bg-[#155bd6] text-white shadow-lg transition-colors hover:bg-[#0f4fbd]"
          >
            <Camera size={16} />
          </button>
        </div>

        <div className="min-w-0 lg:mt-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#155bd6]">
            Cliente YOUNGSHARK
          </span>
          <h2
            className="mt-1 truncate text-2xl text-[#101010]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            {PROFILE_USER.name}
          </h2>
          <p className="mt-1 truncate text-sm text-black/40">{PROFILE_USER.email}</p>
        </div>
      </div>

      <dl className="space-y-4 py-6 text-sm">
        <div className="flex items-start gap-3">
          <Mail size={16} className="mt-0.5 text-[#155bd6]" />
          <div>
            <dt className="text-[10px] uppercase tracking-widest text-black/35">Email</dt>
            <dd className="mt-0.5 text-black/70">{PROFILE_USER.email}</dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone size={16} className="mt-0.5 text-[#155bd6]" />
          <div>
            <dt className="text-[10px] uppercase tracking-widest text-black/35">Teléfono</dt>
            <dd className="mt-0.5 text-black/70">{PROFILE_USER.phone}</dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin size={16} className="mt-0.5 text-[#155bd6]" />
          <div>
            <dt className="text-[10px] uppercase tracking-widest text-black/35">Ubicación</dt>
            <dd className="mt-0.5 text-black/70">{PROFILE_USER.location}</dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CalendarDays size={16} className="mt-0.5 text-[#155bd6]" />
          <div>
            <dt className="text-[10px] uppercase tracking-widest text-black/35">Miembro desde</dt>
            <dd className="mt-0.5 text-black/70">{PROFILE_USER.memberSince}</dd>
          </div>
        </div>
      </dl>

      <button
        type="button"
        className="w-full border border-black/15 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/65 transition-colors hover:border-[#155bd6] hover:text-[#155bd6]"
      >
        Editar perfil
      </button>
    </aside>
  );
}
