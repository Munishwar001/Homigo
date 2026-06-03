'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Mic,
  Phone,
  Cpu,
  ShieldCheck,
  Droplets,
  Zap,
  Sparkles,
  Wind,
  Settings,
  Hammer,
  ArrowUpRight,
  Timer,
  BadgeCheck,
  type LucideIcon,
} from 'lucide-react';
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

function MicButton() {
  return (
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
  );
}

export function LandingPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const steps: Array<{
    number: string;
    Icon: LucideIcon;
    title: string;
    description: string;
  }> = [
    {
      number: '01',
      Icon: Phone,
      title: 'Call or Tap',
      description:
        'Tap the mic or call us and describe the home service you need in your own words.',
    },
    {
      number: '02',
      Icon: Cpu,
      title: 'AI Matches You',
      description:
        'Our AI instantly matches your request with the best-rated local professionals.',
    },
    {
      number: '03',
      Icon: ShieldCheck,
      title: 'Service Confirmed',
      description:
        'Get an instant confirmation with time, price, and professional details.',
    },
  ];

  const categories: Array<{
    title: string;
    description: string;
    Icon: LucideIcon;
  }> = [
    {
      title: 'Plumbing',
      description: 'Leaks, fittings, installations and repairs.',
      Icon: Droplets,
    },
    {
      title: 'Electrical',
      description: 'Wiring, switches, lighting and safety checks.',
      Icon: Zap,
    },
    {
      title: 'Cleaning',
      description: 'Deep cleaning, kitchen, bathroom and more.',
      Icon: Sparkles,
    },
    {
      title: 'Laundry',
      description: 'Wash, dry, iron and doorstep pickup.',
      Icon: Wind,
    },
    {
      title: 'Appliance Repair',
      description: 'Fridges, ACs, washers and microwaves.',
      Icon: Settings,
    },
    {
      title: 'Carpentry',
      description: 'Furniture, fixtures, doors and repairs.',
      Icon: Hammer,
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Homeowner, Delhi',
      quote:
        'I just spoke my problem and a plumber arrived within the hour. The AI booking is pure magic!',
    },
    {
      name: 'Rahul Verma',
      role: 'Homeowner, Mumbai',
      quote:
        'No more searching through endless listings. Homigo found me a trusted electrician instantly.',
    },
    {
      name: 'Amit Patel',
      role: 'Homeowner, Bangalore',
      quote:
        'The whole appliance repair was booked, confirmed and done while I sipped my morning coffee.',
    },
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

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
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
            'radial-gradient(ellipse at 15% 55%, rgba(99,102,241,0.22) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(139,92,246,0.18) 0%, transparent 55%), #07080F',
        }}
      >
        {/* grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-20 pt-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:pb-32 lg:pt-32">
          {/* ─ Left column: text ─ */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
              AI-powered home services marketplace
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[64px]">
              Your Home,{' '}
              <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                One Call
              </span>{' '}
              Away
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              Speak your service request — our AI finds, books, and confirms the
              best local professionals for you. Fast, trusted, voice-first.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <motion.a
                href="/signup"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:shadow-xl hover:shadow-indigo-600/40"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </motion.a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
              >
                How it works
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
              {[
                ['10,000+', 'bookings done'],
                ['500+', 'verified pros'],
                ['4.8/5', 'avg. rating'],
              ].map(([num, label]) => (
                <div key={label} className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  <span className="font-semibold text-white">{num}</span>
                  <span className="text-slate-400">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─ Right column: mic visual (desktop) ─ */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="hidden lg:flex lg:items-center lg:justify-center"
          >
            <div className="relative flex h-120 w-full items-center justify-center">
              {/* Glow blob */}
              <div className="absolute h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl" />

              {/* Mic button */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <MicButton />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="text-[11px] font-semibold tracking-[0.35em] text-indigo-400"
                >
                  TAP TO SPEAK
                </motion.p>
              </div>

              {/* Toast 1 — top right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5, ease: 'easeOut' }}
                className="absolute right-4 top-12 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-md"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                  <ShieldCheck
                    className="h-4 w-4 text-emerald-400"
                    aria-hidden
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Plumber Booked
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Confirmed in 43 seconds
                  </p>
                </div>
              </motion.div>

              {/* Toast 2 — bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.7, duration: 0.5, ease: 'easeOut' }}
                className="absolute bottom-12 left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-md"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500/20">
                  <Zap className="h-4 w-4 text-indigo-400" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    AI Expert Match
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Electrician arriving 9 am
                  </p>
                </div>
              </motion.div>

              {/* Toast 3 — mid left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.1, duration: 0.5, ease: 'easeOut' }}
                className="absolute left-0 top-1/2 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-md"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/20">
                  <Sparkles className="h-4 w-4 text-violet-400" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Deep Clean Done
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Rated 5 stars ★★★★★
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ─ Mobile mic (below text) ─ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="flex flex-col items-center gap-4 lg:hidden"
          >
            <MicButton />
            <p className="text-[11px] font-semibold tracking-[0.35em] text-indigo-400">
              TAP TO SPEAK
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how-it-works"
        className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
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
          </div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-16 grid gap-6 lg:grid-cols-3"
          >
            {steps.map(({ number, Icon, title, description }) => (
              <motion.article
                key={title}
                variants={cardItem}
                whileHover={{
                  y: -8,
                  boxShadow: '0 28px 56px rgba(99,102,241,0.13)',
                  transition: { duration: 0.2 },
                }}
                className="group relative rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition"
              >
                {/* Large faded step number */}
                <span className="select-none text-7xl font-black leading-none text-indigo-50 transition group-hover:text-indigo-100">
                  {number}
                </span>

                {/* Icon */}
                <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-50 to-violet-50 text-indigo-600 ring-1 ring-indigo-100">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#F5F3FF] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        {/* Decorative blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="text-center">
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
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-4 text-base text-slate-500"
            >
              Professional services for every corner of your home.
            </motion.p>
          </div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {categories.map(({ title, description, Icon }) => (
              <motion.article
                key={title}
                variants={cardItem}
                whileHover={{
                  y: -6,
                  boxShadow: '0 24px 48px rgba(99,102,241,0.14)',
                  transition: { duration: 0.2 },
                }}
                className="group flex flex-col rounded-3xl border border-indigo-100/80 bg-white p-7 shadow-[0_2px_12px_rgba(99,102,241,0.07)] transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-50 to-violet-50 text-indigo-600 ring-1 ring-indigo-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-300 opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-slate-500">
                  {description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500"
                >
                  Book Now
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        className="relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
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
              'radial-gradient(ellipse at 25% 50%, rgba(99,102,241,0.18) 0%, transparent 60%), radial-gradient(ellipse at 75% 50%, rgba(139,92,246,0.12) 0%, transparent 60%)',
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 ring-1 ring-inset ring-indigo-500/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              BY THE NUMBERS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Trusted across India
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 grid divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          >
            {[
              ['10,000+', 'Bookings Completed', 'Across 50+ cities'],
              ['500+', 'Verified Providers', 'Background-checked pros'],
              ['4.8 / 5', 'Average Rating', 'From real homeowners'],
            ].map(([value, label, sub], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
                className="flex flex-col items-center gap-1 px-8 py-12 text-center"
              >
                <div className="bg-linear-to-r from-indigo-300 to-violet-300 bg-clip-text text-5xl font-black tracking-tight text-transparent lg:text-6xl">
                  {value}
                </div>
                <div className="mt-2 text-base font-semibold text-white">
                  {label}
                </div>
                <div className="text-sm text-slate-400">{sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
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
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-4 text-base text-slate-500"
            >
              Real people. Real bookings. Real results.
            </motion.p>
          </div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-14 grid gap-5 lg:grid-cols-3"
          >
            {testimonials.map(({ name, role, quote }) => (
              <motion.article
                key={name}
                variants={cardItem}
                whileHover={{
                  y: -6,
                  boxShadow: '0 24px 48px rgba(99,102,241,0.1)',
                  transition: { duration: 0.2 },
                }}
                className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
              >
                <div className="select-none font-serif text-6xl leading-none text-indigo-100">
                  &ldquo;
                </div>
                <p className="mt-1 flex-1 text-base leading-7 text-slate-600">
                  {quote}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white shadow-md shadow-indigo-500/20">
                    {name
                      .split(' ')
                      .map((p) => p[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {name}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-amber-400">★★★★★</span>
                      <span className="text-slate-400">{role}</span>
                    </div>
                  </div>
                </div>
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
        <div className="mx-auto w-full max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-indigo-100 bg-white shadow-[0_8px_40px_rgba(99,102,241,0.09)] lg:grid lg:grid-cols-2">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="flex flex-col justify-center p-10 lg:p-14"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                ABOUT HOMIGO
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
                Built to make home services feel instant.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
                Homigo connects homeowners to trusted local professionals with a
                fast, voice-first workflow. Discover, book, and confirm — all
                without filling a single form. Our AI handles the matching so
                you don&apos;t have to.
              </p>
              <div className="mt-8">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition hover:shadow-lg hover:shadow-indigo-600/30"
                >
                  Explore Services
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </motion.div>

            {/* Right: feature grid */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
              className="grid grid-cols-2 gap-px bg-indigo-100/50 border-t border-indigo-100 lg:border-t-0 lg:border-l"
            >
              {[
                {
                  Icon: Timer,
                  title: 'Fast booking',
                  description: 'From request to confirmation in seconds.',
                },
                {
                  Icon: BadgeCheck,
                  title: 'Trusted pros',
                  description: 'Verified providers for every home need.',
                },
                {
                  Icon: Mic,
                  title: 'Voice-first',
                  description: 'Speak naturally instead of filling forms.',
                },
                {
                  Icon: Cpu,
                  title: 'Smart matching',
                  description: 'AI picks the best-rated local expert.',
                },
              ].map(({ Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex flex-col gap-3 bg-white p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-50 to-violet-50 text-indigo-600 ring-1 ring-indigo-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                  <p className="text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
                <a href="#about" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#services" className="transition hover:text-white">
                  Plumbing
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Repairs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              Stay in the loop
            </h3>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-indigo-500/50"
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
              <a href="#" className="transition hover:text-slate-300">
                Privacy Policy
              </a>
              <a href="#" className="transition hover:text-slate-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
