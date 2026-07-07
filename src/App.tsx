import { type ReactNode, useEffect, useMemo, useState } from 'react';

type NavItem = { id: string; label: string };

const CONFIG = {
  brandName: 'OrnaSpa',
  appStoreUrl: '',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ornaspa.mobile&pcampaignid=web_share',
  supportEmail: 'support@ornaspa.com',
  coverageCity: 'Gurugram',
  promoCode: 'SPARKLE15',
  outletAddressLine1: 'Shop No. 25, Ground Floor, Spaze Corporate Park',
  outletAddressLine2: 'Sector 69, Gurugram, Haryana 122101',
  outletHours: 'Mon – Sat, 10:00 AM – 8:00 PM',
  outletPhone: '9811116387',
  outletPhoneHref: 'tel:+919811116387',
  outletMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Spaze Corporate Park, Sector 69, Gurugram, Haryana 122101'),
} as const;

const NAV: NavItem[] = [
  { id: 'services', label: 'Services' },
  { id: 'how', label: 'How it Works' },
  { id: 'safety', label: 'Safety' },
  { id: 'visit', label: 'Visit Outlet' },
  { id: 'faq', label: 'FAQ' },
  { id: 'download', label: 'Download' },
];

const SERVICES = [
  {
    title: 'Cleaning',
    description:
      'Removes dirt, oils, and lotion buildup. Restores everyday shine.',
    icon: SparklesIcon,
    image: '/cleaning.png',
    badge: null as null | string,
  },
  {
    title: 'Polishing',
    description:
      'Removes surface scratches and buffs metal to a mirror finish.',
    icon: DiamondIcon,
    image: '/polishing.png',
    badge: 'Popular',
  },
  {
    title: 'Servicing & Repair',
    description: 'Prong tightening, stone resetting, and structural repairs.',
    icon: ToolIcon,
    image: '/repair.png',
    badge: null as null | string,
  },
] as const;

const HOW_IT_WORKS = [
  {
    title: 'Visit Our Outlet',
    description: 'Visit our Gurugram outlet with your jewellery for professional inspection and care.',
    icon: CalendarIcon,
  },
  {
    title: 'Inspection & Cleaning',
    description: 'Our master jewelers inspect, clean, and service your piece on-site.',
    icon: ToolIcon,
  },
  {
    title: 'Pickup From Outlet',
    description: 'Collect your jewellery, restored to its best, right at our outlet.',
    icon: ShieldIcon,
  },
] as const;

const TRUST_POINTS = [
  {
    title: 'Private & secure handling',
    description: 'Handled with care from handoff to return.',
    icon: VerifiedIcon,
  },
  {
    title: 'Expert jewelers',
    description: 'Handled only by certified master jewelers.',
    icon: MedalIcon,
  },
  {
    title: 'Transparent pricing',
    description: 'Approve the final quote before you pay.',
    icon: ReceiptIcon,
  },
  {
    title: 'Track your booking',
    description: 'Know your status at every step in the app.',
    icon: TrackIcon,
  },
] as const;

const FEATURE_BULLETS = [
  'OTP login (fast, passwordless)',
  'Browse services & transparent pricing',
  'Upload jewellery photos + describe damage',
  'Schedule your outlet visit—date & time',
  'Track orders and rebook',
] as const;

const FAQS = [
  {
    q: 'Is my jewellery safe?',
    a: 'Yes. Your item is handled with museum-grade security from handoff to return. Exact security details can be shared during booking and may vary by location and item type.',
  },
  {
    q: 'Do you provide doorstep pickup?',
    a: 'Not yet. We currently serve customers at our Gurugram outlet. Doorstep pickup and delivery will be introduced soon.',
  },
  {
    q: 'What services do you offer?',
    a: 'Cleaning, polishing, and servicing & repair (including prong tightening, stone resetting, and structural fixes).',
  },
  {
    q: 'How is pricing calculated?',
    a: 'We provide an estimate based on your details and photos. A final quote is shared after inspection. You pay only after approving the final quote.',
  },
  {
    q: 'Can I cancel or reschedule?',
    a: 'Yes. You can cancel or reschedule based on your booking window and local policy. We recommend doing it as early as possible.',
  },
  {
    q: 'What materials do you accept?',
    a: 'Most common jewellery materials including gold, silver, and diamond pieces. If you have a special item, share details in the app for confirmation.',
  },
  {
    q: 'Do you store payment information?',
    a: 'No. Payments are processed via trusted partners and we do not store sensitive payment details on our servers.',
  },
  {
    q: 'Where is OrnaSpa located?',
    a: `Our outlet is located at ${CONFIG.outletAddressLine1}, ${CONFIG.outletAddressLine2}. Visit us in person during business hours—doorstep coverage will expand once that service launches.`,
  },
] as const;

const LEGAL = {
  privacyTitle: 'Privacy Policy',
  privacyBody:
    'At OrnaSpa, we respect your privacy and are committed to protecting your personal information.\n\nWe collect basic details such as your name, phone number, address, and order details to provide our services. This information is used only to process your bookings, communicate updates, and improve our service experience.\n\nWe do not sell or share your personal information with third parties for marketing purposes.\n\nYour payment details are processed securely through trusted payment partners, and we do not store sensitive payment information on our servers.\n\nWe may use your data to:\n- Provide and manage your bookings\n- Improve app performance and user experience\n- Send service-related notifications\n\nWe take reasonable steps to protect your data, but no system is 100% secure. By using our app, you agree to this policy.\n\nIf you have any concerns regarding your data, you can contact us through the app support section.',
  termsTitle: 'Terms & Conditions',
  termsBody:
    'By using the OrnaSpa app, you agree to the following terms and conditions:\n\n1. Service Usage\nYou must provide accurate information while booking services. Incorrect details may lead to delays or cancellation.\n\n2. Jewellery Responsibility\nWhile we take utmost care in handling your jewellery, users are advised to declare accurate details about item condition, material, and value.\n\n3. Pricing\nService charges may vary depending on the type of jewellery, damage, and material. Final pricing will be confirmed before processing.\n\n4. Outlet Visits & Future Pickup/Delivery\nCustomers currently bring their jewellery to our outlet for service. Once doorstep pickup and delivery launches, users will be required to ensure availability at the selected time for pickup and delivery; missed schedules may lead to rescheduling.\n\n5. Cancellation\nOrders can be cancelled before service processing begins. Once service has started, cancellation may not be possible.\n\n6. Liability\nOrnaSpa is not responsible for pre-existing damage or undisclosed issues in the jewellery.\n\n7. Modifications\nWe reserve the right to update or modify these terms at any time without prior notice.\n\nContinued use of the app means you accept these terms.',
} as const;

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0),
          );
        const top = visible[0];
        if (top?.target?.id) setActive(top.target.id);
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: [0, 0.1, 0.25] },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds.join('|')]);

  return active;
}

function Button({
  children,
  onClick,
  variant = 'primary',
  href,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
}) {
  const base =
    'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-extrabold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg';
  const styles =
    variant === 'primary'
      ? 'bg-gold text-text shadow-soft hover:shadow-lift'
      : 'border border-divider bg-surface text-text hover:border-gold/50 shadow-soft';
  const disabled = (!href || href.trim().length === 0) && !onClick;

  if (href && href.trim().length > 0) {
    return (
      <a className={cx(base, styles, className)} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button
      className={cx(base, styles, className, disabled && 'cursor-not-allowed opacity-60')}
      onClick={onClick}
      type="button"
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={cx(align === 'center' && 'text-center')}>
      <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
        <div className="h-px w-8 bg-gold/40" />
        <div className="text-xs font-black uppercase tracking-[0.3em] text-gold/80">
          {eyebrow}
        </div>
      </div>
      <h2 className="font-display text-4xl font-bold leading-tight text-text md:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className={cx('mt-6 text-lg font-medium leading-relaxed text-muted', align === 'center' && 'mx-auto max-w-2xl')}>
        {subtitle}
      </p>
    </div>
  );
}

function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gold/15 px-3 py-1 text-xs font-extrabold tracking-wide text-text ring-1 ring-gold/25">
      {children}
    </span>
  );
}

function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cx(
        'group relative overflow-hidden rounded-[2rem] border border-divider bg-surface luxury-shadow transition-all duration-500',
        hover && 'hover:-translate-y-1 hover:border-gold/30 hover:shadow-gold/5',
        className,
      )}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="gold-shimmer absolute inset-0" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <div className={cx('animate-sparkle pointer-events-none absolute', className)}>
      <svg className="h-4 w-4 text-gold/40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z" />
      </svg>
    </div>
  );
}

function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-text/40"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div className="absolute left-1/2 top-1/2 w-[min(720px,92vw)] -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-3xl border border-divider bg-surface shadow-lift">
          <div className="flex items-center justify-between gap-4 border-b border-divider px-6 py-5">
            <div className="font-display text-2xl font-bold text-text">
              {title}
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-divider bg-bg text-text hover:border-gold/40"
              onClick={onClose}
              aria-label="Close"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="max-h-[70vh] overflow-auto px-6 py-6">
            <div className="whitespace-pre-line text-sm font-semibold leading-relaxed text-muted">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-3xl border border-divider bg-surface">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-sm font-extrabold text-text md:text-base">
          {question}
        </span>
        <span
          className={cx(
            'inline-flex h-9 w-9 items-center justify-center rounded-full border border-divider text-muted transition',
            open && 'border-gold/40 bg-gold/10 text-text',
          )}
          aria-hidden
        >
          <ChevronIcon className={cx('h-4 w-4 transition', open && 'rotate-180')} />
        </span>
      </button>
      <div
        className={cx(
          'grid overflow-hidden px-5 transition-[grid-template-rows] duration-300',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0 pb-5 text-sm font-semibold leading-relaxed text-muted">
          {answer}
        </div>
      </div>
    </div>
  );
}

function PhoneMock({
  title,
  subtitle,
  lines,
  accent = 'gold',
}: {
  title: string;
  subtitle: string;
  lines: string[];
  accent?: 'gold' | 'purple';
}) {
  const accentClass = accent === 'gold' ? 'from-gold/90 to-gold/60' : 'from-purple/80 to-purpleSoft/60';
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gold/5 blur-3xl opacity-50" />
      <div className="rounded-[3rem] border-8 border-bg bg-surface shadow-2xl ring-1 ring-divider">
        <div className={cx('rounded-t-[2.2rem] bg-gradient-to-r p-7', accentClass)}>
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-black tracking-[0.3em] text-text/60">
              ORNASPA PREMIUM
            </div>
            <div className="h-1.5 w-12 rounded-full bg-text/15" />
          </div>
          <div className="mt-8 text-2xl font-bold text-text leading-tight">{title}</div>
          <div className="mt-2 text-xs font-bold text-text/70">{subtitle}</div>
        </div>
        <div className="space-y-4 p-7">
          {lines.map((l) => (
            <div key={l} className="group flex items-center gap-3 rounded-2xl border border-divider bg-bg/50 px-4 py-4 transition-all hover:border-gold/30 hover:bg-white">
              <div className="h-2 w-2 rounded-full bg-gold/40 group-hover:bg-gold" />
              <div className="text-sm font-bold text-muted group-hover:text-text">{l}</div>
            </div>
          ))}
          <div className="mt-4 rounded-2xl bg-text py-4 text-center shadow-lg transition-transform hover:scale-[1.02]">
            <div className="text-sm font-black tracking-widest text-bg uppercase">
              Continue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const sectionIds = useMemo(() => NAV.map((n) => n.id), []);
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<null | 'privacy' | 'terms'>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModal(null);
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen mesh-gradient text-text">
      <div className="fixed left-0 right-0 top-0 z-50">
        <div className="glass border-b border-divider">
          <div className="container-px flex h-[72px] items-center justify-between">
            <button
              type="button"
              className="flex items-center gap-3"
              onClick={() => scrollToId('top')}
              aria-label={`${CONFIG.brandName} home`}
            >
              <img
                src="/logo.png"
                alt={CONFIG.brandName}
                className="h-10 w-10 object-contain"
              />
              <div className="text-base font-extrabold tracking-wide">
                {CONFIG.brandName}
              </div>
            </button>

            <nav className="hidden items-center gap-2 md:flex">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  className={cx(
                    'rounded-2xl px-4 py-2 text-sm font-extrabold tracking-wide transition hover:bg-gold/10',
                    active === n.id ? 'text-text' : 'text-muted',
                  )}
                  onClick={() => scrollToId(n.id)}
                >
                  {n.label}
                </button>
              ))}
              <div className="ml-2">
                <Button onClick={() => scrollToId('download')}>Get the App</Button>
              </div>
            </nav>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-2xl border border-divider bg-surface p-3 text-text shadow-soft md:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-b border-divider bg-surface md:hidden">
            <div className="container-px py-4">
              <div className="flex flex-col gap-2">
                {NAV.map((n) => (
                  <button
                    key={n.id}
                    type="button"
                    className="rounded-2xl px-4 py-3 text-left text-sm font-extrabold text-text hover:bg-gold/10"
                    onClick={() => {
                      setMenuOpen(false);
                      scrollToId(n.id);
                    }}
                  >
                    {n.label}
                  </button>
                ))}
                <div className="pt-2">
                  <Button
                    onClick={() => {
                      setMenuOpen(false);
                      scrollToId('download');
                    }}
                  >
                    Get the App
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <main id="top" className="pt-[92px]">
        <section className="relative overflow-hidden">
          <Sparkle className="left-[10%] top-[20%]" />
          <Sparkle className="right-[15%] top-[40%] animation-delay-500" />
          <Sparkle className="left-[20%] bottom-[20%] animation-delay-1000" />

          <div className="container-px py-16 md:py-24">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>✨ 100% Private & Secure</Badge>
                  <Badge>🟢 Now Serving Customers at Our Gurugram Outlet</Badge>
                </div>
                <h1 className="mt-8 font-display text-5xl font-bold leading-[1.1] md:text-7xl">
                  Luxury <span className="text-gradient">Jewellery Care</span> at Our Gurugram Outlet
                </h1>
                <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-muted md:text-xl">
                  Cleaning, polishing, and restoration—expertly handled by master jewelers with
                  secure transit and museum-grade care.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button onClick={() => scrollToId('visit')}>Schedule Visit</Button>
                  <Button variant="secondary" href={CONFIG.outletMapsUrl}>
                    Get Directions
                  </Button>
                </div>
                <div className="mt-12 grid max-w-xl grid-cols-2 gap-4 md:grid-cols-4">
                  <MiniStat label="Services" value="3+" />
                  <MiniStat label="Booking" value="In minutes" />
                  <MiniStat label="Security" value="Expert Care" />
                  <MiniStat label="Care" value="Premium" />
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[3rem] bg-gold/5 blur-3xl" />
                <div className="relative rotate-2 transform transition-transform duration-700 hover:rotate-0">
                  <Card className="p-2" hover={false}>
                    <img
                      src="/hero.png"
                      alt="Luxury Jewellery Care"
                      className="aspect-[4/5] h-full w-full rounded-[1.8rem] object-cover"
                    />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="glass rounded-2xl p-4 shadow-lift">
                        <div className="flex items-center gap-3">
                          <img
                            src="/logo.png"
                            alt=""
                            className="h-10 w-10 object-contain"
                          />
                          <div>
                            <div className="text-sm font-extrabold text-text">Mirror Finish</div>
                            <div className="text-xs font-bold text-muted">Professional Polishing</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="absolute -bottom-6 -left-6 z-20 hidden md:block">
                  <div className="rounded-3xl border border-divider bg-surface p-6 luxury-shadow">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-success/10 text-success">
                        <ShieldIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold">100% Secure</div>
                        <div className="text-xs font-bold text-muted">Secure transit</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-divider">
          <div className="container-px py-10 md:py-12">
            <div className="rounded-3xl border border-gold/25 bg-gold/10 p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge>Now Open</Badge>
                    <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
                      OrnaSpa Experience Outlet — Gurugram
                    </span>
                  </div>
                  <div className="mt-3 text-sm font-semibold text-muted">
                    {CONFIG.outletAddressLine1}, {CONFIG.outletAddressLine2} · {CONFIG.outletHours}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-muted">
                    We&rsquo;re currently welcoming customers at our Gurugram Experience Outlet.
                    Doorstep pickup &amp; delivery will be launching soon.
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href={CONFIG.outletMapsUrl}>Get Directions</Button>
                  <Button variant="secondary" href={CONFIG.outletPhoneHref}>
                    Call {CONFIG.outletPhone}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-divider">
          <div className="container-px py-16">
            <SectionHeader
              eyebrow="Services"
              title="Care crafted for your most valuable pieces."
              subtitle="Visit our Gurugram outlet and our experts take it from there. Luxury care made effortless."
            />

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {SERVICES.map((s) => (
                <Card key={s.title} className="flex flex-col">
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
                    {s.badge ? (
                      <div className="absolute right-4 top-4">
                        <Badge>{s.badge}</Badge>
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 ring-1 ring-gold/25">
                      <s.icon className="h-5 w-5 text-text" />
                    </div>
                    <div className="mt-5 text-xl font-bold text-text">
                      {s.title}
                    </div>
                    <div className="mt-2 text-sm font-medium leading-relaxed text-muted">
                      {s.description}
                    </div>
                    <div className="mt-auto pt-8">
                      <Button variant="secondary" className="w-full" onClick={() => scrollToId('visit')}>
                        Book Service
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="border-t border-divider">
          <div className="container-px py-16">
            <SectionHeader
              eyebrow="How it works"
              title="Outlet jewellery servicing—simple, secure, seamless."
              subtitle="A premium flow designed around safety, transparency, and convenience."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {HOW_IT_WORKS.map((s, idx) => (
                <Card key={s.title} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 ring-1 ring-gold/25">
                      <s.icon className="h-5 w-5 text-text" />
                    </div>
                    <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
                      Step {idx + 1}
                    </div>
                  </div>
                  <div className="mt-5 text-lg font-extrabold">{s.title}</div>
                  <div className="mt-2 text-sm font-semibold leading-relaxed text-muted">
                    {s.description}
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-gold/25 bg-gold/10 p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-extrabold text-text">
                    100% Secure &amp; Transparent
                  </div>
                  <div className="mt-1 text-sm font-semibold text-muted">
                    Service performed securely at our Gurugram outlet—designed for peace of mind.
                  </div>
                </div>
                <Button onClick={() => scrollToId('safety')}>See Safety Details</Button>
              </div>
            </div>
          </div>
        </section>


        <section id="safety" className="border-t border-divider relative">
          <Sparkle className="right-[5%] top-[10%]" />
          <div className="container-px py-20 md:py-32">
            <SectionHeader
              eyebrow="Safety"
              title="Trust is the product."
              subtitle="Your jewellery is valuable—financially and emotionally. OrnaSpa is built around careful handling, secure transit, and clear approvals."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {TRUST_POINTS.map((p) => (
                <Card key={p.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 ring-1 ring-gold/25">
                      <p.icon className="h-5 w-5 text-text" />
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-text">
                        {p.title}
                      </div>
                      <div className="mt-1 text-sm font-semibold leading-relaxed text-muted">
                        {p.description}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="border-t border-divider">
          <div className="container-px py-16">
            <SectionHeader
              eyebrow="Visit Us"
              title="Visit Our Gurugram Experience Outlet"
              subtitle="Bring your jewellery directly to our outlet—no pickup required. Doorstep service is launching soon."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <MiniStat label="Address" value="Sector 69, Gurugram" />
              <MiniStat label="Hours" value="Mon–Sat, 10AM–8PM" />
              <MiniStat label="Phone" value={CONFIG.outletPhone} />
            </div>

            <Card className="mt-8 p-8">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-gold/80">
                    Address
                  </div>
                  <div className="mt-3 text-lg font-bold leading-relaxed text-text">
                    {CONFIG.outletAddressLine1}
                    <br />
                    {CONFIG.outletAddressLine2}
                  </div>
                  <div className="mt-6 text-sm font-semibold text-muted">
                    Open {CONFIG.outletHours}
                  </div>
                </div>
                <div className="flex flex-col gap-4 md:items-end">
                  <Button href={CONFIG.outletMapsUrl}>Get Directions</Button>
                  <Button variant="secondary" href={CONFIG.outletPhoneHref}>
                    Call {CONFIG.outletPhone}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="border-t border-divider">
          <div className="container-px py-16">
            <SectionHeader
              eyebrow="App"
              title="Everything you need—right inside the app."
              subtitle="A smooth booking experience: OTP login, photo-based details, scheduling, and tracking—built for speed and clarity."
            />

            <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
              <div className="space-y-4">
                {FEATURE_BULLETS.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/25">
                      <CheckIcon className="h-4 w-4 text-text" />
                    </span>
                    <div className="text-sm font-semibold leading-relaxed text-muted md:text-base">
                      {b}
                    </div>
                  </div>
                ))}
                <div className="pt-4">
                  <Button onClick={() => scrollToId('download')}>Get the App</Button>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <PhoneMock
                  title="Select Service"
                  subtitle="Cleaning • Polishing • Repair"
                  lines={['Upload photos', 'Describe issue', 'Add to booking']}
                  accent="gold"
                />
                <PhoneMock
                  title="Schedule"
                  subtitle="Choose date & time"
                  lines={['Pick outlet visit slot', 'Get reminders', 'Track status']}
                  accent="purple"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-divider relative">
          <Sparkle className="left-[5%] bottom-[15%]" />
          <div className="container-px py-20 md:py-32">
            <div className="relative overflow-hidden rounded-[3rem] border border-gold/30 bg-gradient-to-br from-gold/20 via-surface to-gold/10 p-10 md:p-16">
              <div className="gold-shimmer absolute inset-0 opacity-30" />
              <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-text ring-1 ring-gold/30">
                    Limited Invite
                  </div>
                  <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                    Experience <span className="text-gradient">True Brilliance</span>.
                  </h2>
                  <p className="mt-6 text-lg font-medium text-muted">
                    Join the exclusive circle of OrnaSpa members and enjoy
                    15% off your first professional servicing.
                  </p>
                  <div className="mt-8">
                    <span className="inline-flex items-center gap-3 rounded-2xl bg-white/50 px-6 py-4 border border-gold/20 shadow-sm">
                      <span className="text-xs font-bold text-muted uppercase tracking-widest">Code:</span>
                      <span className="text-xl font-black text-text tracking-tighter">{CONFIG.promoCode}</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button onClick={() => scrollToId('download')}>Claim Your Invite</Button>
                  <Button variant="secondary" onClick={() => scrollToId('services')}>
                    Explore Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-divider">
          <div className="container-px py-16">
            <SectionHeader
              eyebrow="FAQ"
              title="Questions, answered."
              subtitle="If you need anything else, reach us at support."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  question={f.q}
                  answer={f.a}
                  defaultOpen={i === 0}
                />
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-divider bg-surface p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-extrabold text-text">
                    Need help right now?
                  </div>
                  <div className="mt-1 text-sm font-semibold text-muted">
                    Email us at{' '}
                    <a className="font-extrabold text-text underline decoration-gold/40 underline-offset-4" href={`mailto:${CONFIG.supportEmail}`}>
                      {CONFIG.supportEmail}
                    </a>{' '}
                    or call{' '}
                    <a className="font-extrabold text-text underline decoration-gold/40 underline-offset-4" href={CONFIG.outletPhoneHref}>
                      {CONFIG.outletPhone}
                    </a>
                  </div>
                </div>
                <Button variant="secondary" href={`mailto:${CONFIG.supportEmail}`}>
                  Contact support
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="border-t border-divider">
          <div className="container-px py-16">
            <SectionHeader
              eyebrow="Download"
              title={`Get ${CONFIG.brandName}`}
              subtitle="Book, schedule, and track your jewellery care in minutes."
              align="center"
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Card className="p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gold/15 ring-1 ring-gold/25">
                    <AppleIcon className="h-6 w-6 text-text" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold">App Store</div>
                    <div className="text-sm font-semibold text-muted">
                      iPhone &amp; iPad
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button href={CONFIG.appStoreUrl}>Download on App Store</Button>
                </div>
                <div className="mt-3 text-xs font-bold text-muted">
                  Set CONFIG.appStoreUrl when you have the link.
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gold/15 ring-1 ring-gold/25">
                    <AndroidIcon className="h-6 w-6 text-text" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold">Google Play</div>
                    <div className="text-sm font-semibold text-muted">
                      Android devices
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button href={CONFIG.playStoreUrl}>Get it on Google Play</Button>
                </div>
              </Card>
            </div>

            <Waitlist />
          </div>
        </section>
      </main>

      <footer className="border-t border-divider">
        <div className="container-px py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt={CONFIG.brandName}
                  className="h-10 w-10 object-contain"
                />
                <div className="text-base font-extrabold tracking-wide">
                  {CONFIG.brandName}
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-muted">
                OrnaSpa is a premium jewellery care and repair studio. Currently serving customers through our Gurugram outlet—doorstep service launching soon.
              </p>
              <div className="mt-4 space-y-1 text-sm font-semibold text-muted">
                <div>{CONFIG.outletAddressLine1}</div>
                <div>{CONFIG.outletAddressLine2}</div>
                <div>{CONFIG.outletHours}</div>
                <a className="block hover:text-text" href={CONFIG.outletPhoneHref}>
                  {CONFIG.outletPhone}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-3">
              <FooterGroup
                title="Product"
                links={[
                  { label: 'Services', onClick: () => scrollToId('services') },
                  { label: 'How it Works', onClick: () => scrollToId('how') },
                  { label: 'Safety', onClick: () => scrollToId('safety') },
                  { label: 'FAQ', onClick: () => scrollToId('faq') },
                ]}
              />
              <FooterGroup
                title="Company"
                links={[
                  { label: 'Contact', href: `mailto:${CONFIG.supportEmail}` },
                  { label: 'Visit Outlet', onClick: () => scrollToId('visit') },
                ]}
              />
              <FooterGroup
                title="Legal"
                links={[
                  { label: 'Privacy', onClick: () => setModal('privacy') },
                  { label: 'Terms', onClick: () => setModal('terms') },
                ]}
              />
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-divider pt-8 text-sm font-semibold text-muted md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} {CONFIG.brandName}. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a className="hover:text-text" href={`mailto:${CONFIG.supportEmail}`}>
                {CONFIG.supportEmail}
              </a>
              <span className="h-1 w-1 rounded-full bg-divider" />
              <a className="hover:text-text" href="#top" onClick={(e) => { e.preventDefault(); scrollToId('top'); }}>
                Back to top
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Modal
        open={modal === 'privacy'}
        title={LEGAL.privacyTitle}
        onClose={() => setModal(null)}
      >
        {LEGAL.privacyBody}
      </Modal>
      <Modal
        open={modal === 'terms'}
        title={LEGAL.termsTitle}
        onClose={() => setModal(null)}
      >
        {LEGAL.termsBody}
      </Modal>
    </div>
  );
}

function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  function isValidEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  }

  return (
    <div className="mt-10 rounded-3xl border border-divider bg-surface p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-extrabold text-text">Join the waitlist</div>
          <div className="mt-1 text-sm font-semibold text-muted">
            Get updates when OrnaSpa expands to new areas.
          </div>
        </div>
        <form
          className="flex w-full max-w-lg flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (!isValidEmail(email)) {
              setStatus('error');
              return;
            }
            setStatus('success');
          }}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus('idle');
            }}
            placeholder="you@example.com"
            className="h-12 w-full rounded-2xl border border-divider bg-bg px-4 text-sm font-semibold text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold/60"
            type="email"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="h-12 shrink-0 rounded-2xl bg-text px-5 text-sm font-extrabold tracking-wide text-bg shadow-soft hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            Join
          </button>
        </form>
      </div>
      {status === 'success' ? (
        <div className="mt-4 rounded-2xl bg-success/15 px-4 py-3 text-sm font-extrabold text-text ring-1 ring-success/25">
          You’re on the list. We’ll email you soon.
        </div>
      ) : status === 'error' ? (
        <div className="mt-4 rounded-2xl bg-error/10 px-4 py-3 text-sm font-extrabold text-text ring-1 ring-error/25">
          Please enter a valid email address.
        </div>
      ) : null}
    </div>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href?: string; onClick?: () => void }>;
}) {
  return (
    <div>
      <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
        {title}
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {links.map((l) =>
          l.href ? (
            <a key={l.label} href={l.href} className="text-sm font-semibold text-muted hover:text-text">
              {l.label}
            </a>
          ) : (
            <button
              key={l.label}
              type="button"
              onClick={l.onClick}
              className="text-left text-sm font-semibold text-muted hover:text-text"
            >
              {l.label}
            </button>
          ),
        )}
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[2rem] border border-divider bg-surface/50 px-5 py-5 luxury-shadow">
      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/80">
        {label}
      </div>
      <div className="mt-2 text-lg font-bold text-text">{value}</div>
    </div>
  );
}


function IconBase({
  className,
  children,
  viewBox = '0 0 24 24',
}: {
  className?: string;
  children: ReactNode;
  viewBox?: string;
}) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

function DiamondIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M12 3l4.2 3.2L21 10l-9 11L3 10l4.8-3.8L12 3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M3 10h18M8 6.2L12 21l4-14.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </IconBase>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M12 2l1.2 4.2L17.5 8l-4.3 1.8L12 14l-1.2-4.2L6.5 8l4.3-1.8L12 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19 12l.7 2.2L22 15l-2.3.8L19 18l-.7-2.2L16 15l2.3-.8L19 12zM3 12l.7 2.2L6 15l-2.3.8L3 18l-.7-2.2L0 15l2.3-.8L3 12z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </IconBase>
  );
}

function ToolIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M21 7l-6 6-4-4 6-6a4 4 0 0 1 4 4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 10L4 20l-1 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 19l2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </IconBase>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M7 3v3M17 3v3M4 8h16M6 6h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 12h3M8 16h3M13 12h3M13 16h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </IconBase>
  );
}

function VanIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M3 16V7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 9h4l3 3v4h-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 16h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </IconBase>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M12 2l8 4v6c0 5-3.4 9.7-8 10-4.6-.3-8-5-8-10V6l8-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12l2.2 2.2L15.8 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </IconBase>
  );
}

function VerifiedIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M12 2l2.1 2.2 3-.2.9 2.9 2.7 1.2-1.2 2.7 1.2 2.7-2.7 1.2-.9 2.9-3-.2L12 22l-2.1-2.2-3 .2-.9-2.9-2.7-1.2 1.2-2.7-1.2-2.7L6 6.9 6.9 4l3 .2L12 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 12.2l2.1 2.1 4.7-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </IconBase>
  );
}

function MedalIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 13l-1 9 4-2 4 2-1-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </IconBase>
  );
}

function ReceiptIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M7 2h10v20l-2-1-2 1-2-1-2 1-2-1-2 1V2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 7h6M9 11h6M9 15h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </IconBase>
  );
}

function TrackIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M4 4h16v16H4V4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 14l2-3 2 2 3-5 2 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </IconBase>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M5 12l4 4L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M15.2 5.5c.6-.8 1-1.8.9-2.9-1 .1-2.1.7-2.8 1.5-.6.7-1 1.8-.9 2.8 1 .1 2-.5 2.8-1.4z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M12.1 6.2c1.3 0 1.9-.9 3.2-.9 1.5 0 2.7.9 3.4 2.1-2.9 1.6-2.4 5.8.6 6.9-.6 1.3-1.5 2.7-2.7 2.7-1.1 0-1.5-.7-2.9-.7-1.5 0-1.9.7-3 .7-1.2 0-2.1-1.3-2.7-2.6-1.6-3.1-1.7-8.4 1.2-10.1 1-.6 2.1-.9 2.9-.9z"
        fill="currentColor"
      />
    </IconBase>
  );
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M7 10v8a2 2 0 0 0 2 2h1v-9H7zM14 11v9h1a2 2 0 0 0 2-2v-8h-3z"
        fill="currentColor"
      />
      <path
        d="M8.5 9.5h7a3 3 0 0 0-3-2.5h-1a3 3 0 0 0-3 2.5z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M9.2 6.2L8 4.5M14.8 6.2L16 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </IconBase>
  );
}

