'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Mic } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

type SectionId = 'home' | 'how-it-works' | 'services' | 'about' | 'contact';

const VIEWPORT = { once: true, margin: '-80px' } as const;

const cardContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const pillContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.65 } },
};

const pillItem: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
      {children}
    </motion.div>
  );
}

export function LandingPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const servicePills = [
    'Plumber',
    'Electrician',
    'Cleaner',
    'Dhobi',
    'Appliance Repair',
  ];

  const steps = [
    {
      title: 'Call or Tap',
      description:
        'Tap the mic or call us and describe the home service you need in your own words.',
    },
    {
      title: 'AI Matches You',
      description:
        'Our AI instantly matches your request with the best-rated local professionals.',
    },
    {
      title: 'Service Confirmed',
      description:
        'Get an instant confirmation with time, price, and professional details.',
    },
  ];

  const categories = [
    ['Plumbing', 'Leaks, fittings, installations and repairs.'],
    ['Electrical', 'Wiring, switches, lighting and safety checks.'],
    ['Cleaning', 'Deep cleaning, kitchen, bathroom and more.'],
    ['Laundry', 'Wash, dry, iron and doorstep pickup.'],
    ['Appliance Repair', 'Fridges, ACs, washers and microwaves.'],
    ['Carpentry', 'Furniture, fixtures, doors and repairs.'],
  ];

  const testimonials = [
    [
      'Priya Sharma',
      'I just spoke my problem and a plumber arrived within the hour. The AI booking is pure magic!',
    ],
    [
      'Rahul Verma',
      'No more searching through endless listings. Homigo found me a trusted electrician instantly.',
    ],
    [
      'Amit Patel',
      'The whole appliance repair was booked, confirmed and done while I sipped my morning coffee.',
    ],
  ];

  const navigationItems: Array<{ label: string; href: string; id: SectionId }> =
    [
      { label: 'Home', href: '#home', id: 'home' },
      { label: 'Services', href: '#services', id: 'services' },
      { label: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
      { label: 'About', href: '#about', id: 'about' },
      { label: 'Contact', href: '#contact', id: 'contact' },
    ];

  useEffect(() => {
    const sectionIds: SectionId[] = [
      'home',
      'how-it-works',
      'services',
      'about',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) => right.intersectionRatio - left.intersectionRatio
          )[0];

        if (visibleEntry?.target instanceof HTMLElement) {
          setActiveSection(visibleEntry.target.id as SectionId);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-30% 0px -55% 0px',
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
    <main className="flex min-h-screen flex-1 flex-col scroll-smooth bg-white text-slate-900 pt-18">

      {/* ── HEADER ── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#07080F]/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/30">
              H
            </div>
            <span className="text-lg font-bold tracking-tight">Homigo</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={
                    isActive
                      ? 'border-b-2 border-indigo-400 pb-1 font-medium text-white'
                      : 'transition-colors hover:text-white'
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <Link
            href="/signin"
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500"
          >
            Sign in
          </Link>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative overflow-hidden text-white"
        style={{
          background:
            'radial-gradient(ellipse at 15% 55%, rgba(99,102,241,0.22) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(139,92,246,0.18) 0%, transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(14,165,233,0.1) 0%, transparent 50%), #07080F',
        }}
      >
        {/* subtle grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-20 pt-20 text-center sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-300"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
            AI-powered home services marketplace
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.12 }}
            className="mt-8 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.05]"
          >
            Your Home,{' '}
            <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              One Call
            </span>{' '}
            Away
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.26 }}
            className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
          >
            Speak your service request — our AI finds, books, and confirms the
            best local professionals for you.
          </motion.p>

          {/* Mic button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="mt-12 flex flex-col items-center gap-5"
          >
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full">
              {[0, 0.65, 1.3].map((delay) => (
                <motion.div
                  key={delay}
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-full border border-indigo-400/35"
                  animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay,
                    ease: 'easeOut',
                  }}
                />
              ))}
              <div className="absolute h-32 w-32 rounded-full bg-indigo-600/20 blur-3xl" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.91 }}
                className="relative flex h-28 w-28 cursor-pointer items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-600 text-white shadow-[0_0_0_18px_rgba(99,102,241,0.12),0_0_50px_rgba(99,102,241,0.35)]"
              >
                <Mic className="h-12 w-12" aria-hidden />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="text-[11px] font-semibold tracking-[0.35em] text-indigo-400"
            >
              TAP TO SPEAK
            </motion.p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.52 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:shadow-indigo-600/50 hover:shadow-xl"
            >
              Get Started
              <span aria-hidden="true">→</span>
            </motion.a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
            >
              How it works
            </a>
          </motion.div>

          {/* Service pills — staggered pop-in */}
          <motion.div
            variants={pillContainer}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {servicePills.map((item) => (
              <motion.span
                key={item}
                variants={pillItem}
                className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-xs font-medium text-indigo-200"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how-it-works"
        className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto w-full max-w-7xl text-center">
          <SectionBadge>HOW IT WORKS</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Three simple steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-4 text-base text-slate-500"
          >
            From your voice to a confirmed booking in seconds.
          </motion.p>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-14 grid gap-6 lg:grid-cols-3"
          >
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                variants={cardItem}
                whileHover={{
                  y: -7,
                  boxShadow: '0 24px 48px rgba(99,102,241,0.12)',
                  transition: { duration: 0.2 },
                }}
                className="relative rounded-2xl border border-slate-100 bg-white p-8 text-left shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <div className="absolute -top-5 left-7 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/30">
                  {index + 1}
                </div>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm0 2h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm3 4h6v2H9V9Zm0 4h8v2H9v-2Z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        className="bg-[#F5F3FF] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto w-full max-w-7xl text-center">
          <SectionBadge>SERVICE CATEGORIES</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Everything your home needs
          </motion.h2>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {categories.map(([title, description]) => (
              <motion.article
                key={title}
                variants={cardItem}
                whileHover={{
                  y: -7,
                  boxShadow: '0 28px 56px rgba(99,102,241,0.14)',
                  transition: { duration: 0.2 },
                }}
                className="rounded-2xl border border-indigo-100 bg-white p-7 text-left shadow-[0_4px_16px_rgba(99,102,241,0.06)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M12 2a5 5 0 0 0-5 5c0 2.5 2 4 2 7H7v2h10v-2h-2c0-3 2-4.5 2-7a5 5 0 0 0-5-5Zm-2 17h4v2h-4v-2Z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500"
                >
                  Book Now
                  <span aria-hidden="true">→</span>
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        className="relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-24"
        style={{
          background:
            'linear-gradient(135deg, #0D0B26 0%, #13103A 40%, #0C1230 100%)',
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(99,102,241,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(139,92,246,0.1) 0%, transparent 60%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5 }}
            className="grid gap-0 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm md:grid-cols-3 md:divide-x md:divide-y-0"
          >
            {[
              ['10,000+', 'Bookings Completed'],
              ['500+', 'Verified Providers'],
              ['4.8★', 'Average Rating'],
            ].map(([value, label], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center justify-center gap-2 px-8 py-12"
              >
                <div className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-5xl font-black tracking-tight text-transparent">
                  {value}
                </div>
                <div className="text-sm font-medium text-slate-400">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto w-full max-w-7xl text-center">
          <SectionBadge>TESTIMONIALS</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Loved by homeowners
          </motion.h2>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-14 grid gap-5 lg:grid-cols-3"
          >
            {testimonials.map(([name, quote]) => (
              <motion.article
                key={name}
                variants={cardItem}
                whileHover={{
                  y: -6,
                  boxShadow: '0 24px 48px rgba(99,102,241,0.1)',
                  transition: { duration: 0.2 },
                }}
                className="rounded-2xl border border-slate-100 bg-white p-7 text-left shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white shadow-md shadow-indigo-500/20">
                    {name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{name}</div>
                    <div className="text-xs text-amber-400">★★★★★</div>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-500">{quote}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="bg-[#F5F3FF] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 rounded-3xl border border-indigo-100 bg-white p-8 shadow-[0_8px_32px_rgba(99,102,241,0.08)] lg:grid-cols-2 lg:p-12">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              ABOUT
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Built to make home services feel instant.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
              Homigo connects homeowners to trusted local professionals with a
              fast, voice-first workflow. Discover, book, and confirm — all
              without filling a single form.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              ['Fast booking', 'From request to confirmation in seconds.'],
              ['Trusted pros', 'Verified providers for every home need.'],
              ['Voice-first', 'Speak naturally instead of filling forms.'],
              ['Smart matching', 'AI picks the best-rated local expert.'],
            ].map(([title, description], i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="rounded-2xl bg-indigo-50/60 p-5"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        id="contact"
        className="text-white"
        style={{
          background:
            'radial-gradient(ellipse at 10% 80%, rgba(99,102,241,0.12) 0%, transparent 50%), #07080F',
        }}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.65fr_0.65fr_1fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/25">
                H
              </div>
              <span className="text-lg font-bold">Homigo</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Your AI-powered home services marketplace. One call away from a
              better home.
            </p>
          </motion.div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#about" className="transition hover:text-white">About</a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">Careers</a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#services" className="transition hover:text-white">Plumbing</a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">Cleaning</a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">Repairs</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Stay in the loop</h3>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30"
              />
              <button className="rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 px-4 py-5 text-xs text-slate-500 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2025 Homigo. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="#" className="transition hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="transition hover:text-slate-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
