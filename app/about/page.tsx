import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-[#f7f2ea]">

      {/* Soft background accents (same language as Home) */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-navy/10 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-bronze/10 blur-3xl" />

      <Container className="relative py-20">

        {/* ───────────────── HERO BLOCK ───────────────── */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">

          {/* LEFT TEXT */}
          <div>
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-[#d24a43]" />
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e8850a]">
                About
              </p>
            </div>

            <h1
              className="mt-6 text-4xl md:text-5xl font-semibold text-[#0d2a52]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              About
            </h1>

            <p className="mt-6 text-lg leading-8 text-ink/75 max-w-xl">
              Tadasha Mishra, a senior Indian Police Service officer from the 1994 batch, currently serves as the Director General of Police, Jharkhand, becoming the first woman to lead the state police.
            </p>

            <p className="mt-4 text-lg leading-8 text-ink/75 max-w-xl">
              Over three decades of service across field operations and senior leadership roles.
            </p>

            <div className="mt-8">
              <Link
                href="/career"
                className="inline-flex rounded-full border border-[#b98a53] bg-[#f3e1c8] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#5b3b16] shadow-[0_8px_20px_rgba(155,107,45,0.22)] transition hover:bg-[#eed4b2]"
              >
                View Career
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <Image
              src="/images/gallery/about-profile-desk.png"
              alt="Tadasha Mishra"
              width={900}
              height={1100}
              className="w-full rounded-[2.5rem] object-cover shadow-[0_25px_80px_rgba(0,0,0,0.15)]"
              priority
            />
          </div>

        </div>

        {/* ───────────────── ABOUT FULL BIO ───────────────── */}
        <div className="mt-24 ">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-[#d24a43]" />
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e8850a]">
              Biography
            </p>
          </div>

          <div className="mt-8 space-y-6 text-lg leading-8 text-ink/75 max-w-4xl">

            <p>
              She began her career in the Bihar cadre and continued her service in Jharkhand following the formation of the state. Over the years, she has held several key leadership positions across districts and departments, gaining extensive experience in both field operations and senior administrative roles.
            </p>

            <p>
              Her professional journey includes serving in critical positions such as Special Director General of Police, CID, where she has been closely associated with criminal investigations and intelligence functions. This experience has shaped her strong focus on improving investigation quality, ensuring procedural accountability, and strengthening institutional coordination.
            </p>

            <p>
              In her current role, she has placed emphasis on building a more efficient and responsive policing system. Her priorities include enhancing the quality of investigations, addressing emerging challenges such as organized crime and cyber security, and reinforcing public confidence in the police.
            </p>

            <p>
              Her approach to policing reflects a combination of operational discipline and a grounded understanding of field realities, with a consistent focus on delivering effective and accountable law enforcement.
            </p>

          </div>
        </div>

        {/* ───────────────── APPROACH + VISION ───────────────── */}
        <div className="mt-24 grid gap-10 lg:grid-cols-2">

          {/* Approach */}
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-black/10">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-[#d24a43]" />
              <p className="text-xs uppercase tracking-[0.3em] text-[#e8850a]">
                Approach
              </p>
            </div>

            <p className="mt-6 text-lg leading-8 text-ink/75">
              Her approach to policing is defined by investigative integrity, accountability, and coordinated execution. She focuses on improving investigation quality, strengthening coordination, and ensuring procedural discipline while addressing emerging challenges such as cyber security and organized crime.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-black/10">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-[#d24a43]" />
              <p className="text-xs uppercase tracking-[0.3em] text-[#e8850a]">
                Vision
              </p>
            </div>

            <p className="mt-6 text-lg leading-8 text-ink/75">
              Her vision is to strengthen policing systems with accountability, investigative excellence, and long-term efficiency. She aims to ensure consistent processes, seamless coordination, and transparent outcomes while reinforcing public trust.
            </p>
          </div>

        </div>

        {/* ───────────────── VALUES / IDENTITY BLOCK ───────────────── */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">

          {[
            {
              title: "Integrity",
              desc: "Leadership rooted in ethics, duty, and institutional trust."
            },
            {
              title: "Clarity",
              desc: "A disciplined and structured approach to decision-making."
            },
            {
              title: "Accountability",
              desc: "Commitment to transparent and effective policing systems."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] bg-white p-6 border border-black/10 shadow-soft hover:-translate-y-1 transition"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#e8850a]">
                Values
              </p>

              <h3
                className="mt-4 text-2xl font-semibold text-[#0d2a52]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {item.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-ink/75">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* ───────────────── CTA ───────────────── */}
        <div className="mt-24 text-center">
          <Link
            href="/career"
            className="inline-flex rounded-full bg-navy px-10 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_10px_24px_rgba(16,34,53,0.3)] transition hover:bg-[#1f3953]"
          >
            Explore Career Journey
          </Link>
        </div>

      </Container>
    </section>
  );
}