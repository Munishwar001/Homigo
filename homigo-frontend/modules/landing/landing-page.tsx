"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type SectionId = "home" | "how-it-works" | "services" | "about" | "contact";

export function LandingPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const servicePills = [
    "Plumber",
    "Electrician",
    "Cleaner",
    "Dhobi",
    "Appliance Repair",
  ];

  const steps = [
    {
      title: "Call or Tap",
      description:
        "Tap the mic or call us and describe the home service you need in your own words.",
    },
    {
      title: "AI Matches You",
      description:
        "Our AI instantly matches your request with the best-rated local professionals.",
    },
    {
      title: "Service Confirmed",
      description:
        "Get an instant confirmation with time, price, and professional details.",
    },
  ];

  const categories = [
    ["Plumbing", "Leaks, fittings, installations and repairs."],
    ["Electrical", "Wiring, switches, lighting and safety checks."],
    ["Cleaning", "Deep cleaning, kitchen, bathroom and more."],
    ["Laundry", "Wash, dry, iron and doorstep pickup."],
    ["Appliance Repair", "Fridges, ACs, washers and microwaves."],
    ["Carpentry", "Furniture, fixtures, doors and repairs."],
  ];

  const testimonials = [
    [
      "Priya Sharma",
      "I just spoke my problem and a plumber arrived within the hour. The AI booking is pure magic!",
    ],
    [
      "Rahul Verma",
      "No more searching through endless listings. Having found me a trusted electrician instantly.",
    ],
    [
      "Amit Patel",
      "The whole appliance repair was booked, confirmed and done while I sipped my morning coffee.",
    ],
  ];

  const navigationItems: Array<{ label: string; href: string; id: SectionId }> = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Services", href: "#services", id: "services" },
    { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { label: "About", href: "#about", id: "about" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const sectionIds: SectionId[] = ["home", "how-it-works", "services", "about", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry?.target instanceof HTMLElement) {
          setActiveSection(visibleEntry.target.id as SectionId);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-30% 0px -55% 0px",
      }
    );

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex min-h-screen flex-1 flex-col bg-[#f4f7fb] text-slate-900 pt-18 scroll-smooth">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0f1d2e]/95 text-white shadow-[0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-400 text-sm font-bold text-[#0f1d2e]">
              H
            </div>
            <div className="text-lg font-semibold tracking-tight">Homigo</div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  className={
                    isActive
                      ? "border-b-2 border-teal-400 pb-1 text-white"
                      : "transition hover:text-white"
                  }
                  href={item.href}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <Link
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            href="/signin"
          >
            Sign in
          </Link>
        </div>
      </header>

      <section id="home" className="bg-[#114e53] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-16 pt-16 text-center sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-wide text-teal-200">
            <span className="text-teal-300">✦</span>
            AI-powered home services marketplace
          </div>

          <h1 className="mt-10 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your Home,
            <span className="text-teal-300">One Call</span>
            Away
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200/90 sm:text-base lg:text-lg">
            Speak your service request — our AI finds, books, and confirms the
            best local professionals for you.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-teal-400/20">
              <div className="absolute h-28 w-28 rounded-full bg-teal-400/30 blur-2xl" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-teal-400 text-[#0f1d2e] shadow-[0_0_0_16px_rgba(20,184,166,0.22)]">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-11 w-11 fill-current">
                  <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.93V22h2v-3.07A7 7 0 0 0 19 12h-2Z" />
                </svg>
              </div>
            </div>
            <div className="text-[11px] font-semibold tracking-[0.35em] text-teal-300">
              TAP TO SPEAK
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
            >
              Get Started
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white/90 transition hover:text-white"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/35 text-[10px]">
                i
              </span>
              How it works
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {servicePills.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-medium text-slate-100/90"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-7xl text-center">
          <p className="text-xs font-bold tracking-[0.28em] text-blue-600">HOW IT WORKS</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Three simple steps
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            From your voice to a confirmed booking in seconds.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-[0_10px_20px_rgba(15,23,42,0.04)]">
                <div className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-teal-400 text-sm font-bold text-[#0f1d2e]">
                  {index + 1}
                </div>
                <div className="mt-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm0 2h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm3 4h6v2H9V9Zm0 4h8v2H9v-2Z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#e9f0fb] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-7xl text-center">
          <p className="text-xs font-bold tracking-[0.28em] text-blue-600">SERVICE CATEGORIES</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Everything your home needs
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-[0_10px_20px_rgba(15,23,42,0.04)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M12 2a5 5 0 0 0-5 5c0 2.5 2 4 2 7H7v2h10v-2h-2c0-3 2-4.5 2-7a5 5 0 0 0-5-5Zm-2 17h4v2h-4v-2Z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-500">
                  Book Now <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 px-6 py-10 text-center shadow-[0_10px_20px_rgba(15,23,42,0.04)] md:grid-cols-3 md:divide-x md:divide-slate-200 md:px-8">
            {[
              ["10,000+", "Bookings Completed"],
              ["500+", "Verified Providers"],
              ["4.8★", "Average Rating"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col items-center justify-center gap-2 py-2">
                <div className="text-4xl font-black tracking-tight text-blue-600">{value}</div>
                <div className="text-sm text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-7xl text-center">
          <p className="text-xs font-bold tracking-[0.28em] text-blue-600">TESTIMONIALS</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Loved by homeowners
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map(([name, quote]) => (
              <article key={name} className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-[0_10px_20px_rgba(15,23,42,0.04)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    {name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{name}</div>
                    <div className="text-xs text-teal-500">★★★★★</div>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-500">{quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_10px_20px_rgba(15,23,42,0.04)] lg:grid-cols-[1fr_1fr] lg:p-10">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-blue-600">ABOUT</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Built to make home services feel instant.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Homigo connects homeowners to trusted local professionals with a fast, voice-first workflow. The landing page stays focused on discovery, while auth and other workflows live in their own modules.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Fast booking", "From request to confirmation in seconds."],
              ["Trusted pros", "Verified providers for every home need."],
              ["Voice-first", "Speak naturally instead of filling forms."],
              ["Module-based", "Landing, auth, and layout are separated."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-2xl bg-slate-50 p-5">
                <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#0f1d2e] text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-400 text-sm font-bold text-[#0f1d2e]">
                H
              </div>
              <div className="text-lg font-semibold">Homigo</div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Your AI-powered home services marketplace. One call away from a
              better home.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href="#services">Plumbing</a></li>
              <li><a href="#services">Cleaning</a></li>
              <li><a href="#services">Repairs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Stay in the loop</h3>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none"
              />
              <button className="rounded-full bg-teal-400 px-5 py-3 text-sm font-semibold text-[#0f1d2e]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2025 Homigo. All rights reserved.</span>
            <div className="flex items-center justify-center gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
