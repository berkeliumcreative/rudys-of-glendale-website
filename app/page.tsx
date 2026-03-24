// @ts-nocheck
"use client";

import content from "../data/content.json";
import { MinimalNav } from "@/components/ui/minimal-nav";
import { ServiceList } from "@/components/ui/service-list";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { StatsSection } from "@/components/ui/stats-section";
import { FAQSection } from "@/components/ui/faq-section";
import { HoursTable } from "@/components/ui/hours-table";
import { MapEmbed } from "@/components/ui/map-embed";
import { CTABanner } from "@/components/ui/cta-banner";
import { FooterGradient } from "@/components/ui/footer-gradient";
import { SocialLinks } from "@/components/ui/social-links";
import { AccentLine } from "@/components/ui/accent-line";
import { SectionHeading } from "@/components/ui/section-heading";
import { Scissors, Brush, Layers, Flame, Star, Phone, MapPin, Clock } from "lucide-react";

const iconMap: Record<string, any> = { Scissors, Brush, Layers, Flame, Star };

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <MinimalNav
        logo={
          <span className="text-lg font-bold">
            <span style={{ color: "var(--theme-accent)" }}>Rudy&apos;s</span> of Glendale
          </span>
        }
        items={[
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Reviews", href: "#reviews" },
          { label: "Hours", href: "#hours" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="Call Now"
        ctaHref={"tel:" + content.contact.phone.replace(/[^0-9]/g, "")}
      />

      {/* HERO — inline image background */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <img
          src={content.hero.backgroundImage}
          alt="Rudy's of Glendale Barbershop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="text-sm uppercase tracking-[0.3em] mb-4 font-medium animate-hero-fade-in"
            style={{ color: "var(--theme-accent)" }}
          >
            Est. in Glendale, CA
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-hero-fade-in">
            {content.hero.heading}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto animate-hero-fade-in-delayed">
            {content.hero.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-hero-fade-up">
            <a
              href={content.hero.ctaLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-black transition-transform hover:scale-105"
              style={{ backgroundColor: "var(--theme-accent)" }}
            >
              <Phone className="w-5 h-5" />
              {content.hero.ctaText}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            title={content.about.heading}
            label="Our Story"
            align="left"
          />
          <div className="mt-8 space-y-5">
            {content.about.paragraphs.map((p: string, i: number) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <AccentLine />

      {/* STATS */}
      <section className="py-16 md:py-20">
        <StatsSection
          stats={[
            { value: 65, label: "Happy Customers", suffix: "+" },
            { value: 4.5, label: "Star Rating", suffix: "★" },
            { value: 6, label: "Days a Week" },
            { value: 5, label: "Expert Services" },
          ]}
        />
      </section>

      <AccentLine />

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            title="Our Services"
            subtitle="From classic cuts to hot towel shaves — everything you need under one roof"
            align="center"
          />
          <div className="mt-12">
            <ServiceList
              services={content.services.map((s: any) => ({
                title: s.title,
                description: s.description,
              }))}
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="65+ reviews and counting — hear from the guys who sit in our chairs"
            align="center"
          />
        </div>
        <InfiniteMovingCards
          items={content.reviews.map((r: any) => ({
            quote: r.text,
            name: r.name,
            title: "Client",
          }))}
          speed="slow"
        />
      </section>

      <AccentLine />

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <FAQSection
            title="Frequently Asked Questions"
            items={content.faqs}
          />
        </div>
      </section>

      {/* HOURS + MAP */}
      <section id="hours" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Visit Us"
            subtitle="Walk-ins welcome — no appointment needed"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5" style={{ color: "var(--theme-accent)" }} />
                <h3 className="text-lg font-semibold">Business Hours</h3>
              </div>
              <HoursTable hours={content.contact.hours} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5" style={{ color: "var(--theme-accent)" }} />
                <h3 className="text-lg font-semibold">Find Us</h3>
              </div>
              <MapEmbed query={content.contact.mapEmbedQuery} height={350} />
              <p className="mt-3 text-sm text-muted-foreground">{content.contact.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-12">
        <CTABanner
          heading="Ready for Your Best Haircut?"
          subheading="Walk in or call ahead — we're ready when you are"
          ctaText="Call (818) 550-0444"
          ctaHref={"tel:" + content.contact.phone.replace(/[^0-9]/g, "")}
          variant="gradient"
        />
      </section>

      {/* FOOTER with Social Links */}
      <FooterGradient
        businessName={content.businessName}
        tagline={content.tagline}
        phone={content.contact.phone}
        email={content.contact.email}
        address={content.contact.address}
      >
        {content.social && (
          <div>
            <h4 className="font-semibold text-sm mb-3">Follow Us</h4>
            <SocialLinks
              links={Object.entries(content.social)
                .filter(([_, url]) => url)
                .map(([platform, url]) => ({ platform, url: url as string }))}
              size="md"
            />
          </div>
        )}
      </FooterGradient>
    </main>
  );
}