import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
}

const companyLinks: FooterLink[] = [
  { label: "About Us", href: "#" },
  { label: "How it Works", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Pricing", href: "#" },
];

const featuresLinks: FooterLink[] = [
  { label: "Image Ads", href: "#" },
  { label: "Video Ads", href: "#" },
  { label: "Community", href: "#" },
  { label: "Templates", href: "#" },
];

const supportLinks: FooterLink[] = [
  { label: "Blogs", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "API Docs", href: "#" },
  { label: "Contact Us", href: "#" },
];

const FooterColumn: React.FC<{ title: string; links: FooterLink[] }> = ({
  title,
  links,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-semibold text-[14px] text-black uppercase tracking-wider">
        {title}
      </h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[13px] text-gray-600 
                       transition-all duration-300 
                       hover:text-[#B800B8] 
                       hover:translate-x-1 
                       inline-block"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left Column - Logo and Branding */}
          <div className="flex flex-col gap-4 w-full lg:w-auto text-center lg:text-left">
            <Link href="/" className="inline-block self-center lg:self-start">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Image
                  src="/header-logo.svg"
                  alt="Adgen AI Logo"
                  width={100}
                  height={100}
                  priority
                  className="mx-auto lg:mx-0"
                />
              </div>
            </Link>
            <p className="text-[#B800B8] font-medium text-[16px] text-center lg:text-left">
              Smarter Ads, Faster Results
            </p>
            <p className="text-gray-500 text-[14px] text-center lg:text-left">
              Copyright. All rights reserved.
            </p>
          </div>

          {/* Right Column - Footer Links */}
          <div className="w-full lg:w-auto grid grid-cols-3 sm:grid-cols-3 gap-6 justify-between text-center lg:text-left">
            <FooterColumn title="Company Info" links={companyLinks} />
            <FooterColumn title="Features" links={featuresLinks} />
            <FooterColumn title="Support & Resources" links={supportLinks} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between">
            <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
              <div className="w-16 h-16 bg-[#F8E6F8] rounded-lg mb-4 lg:mb-0 hidden lg:block" />
              <p className="text-gray-600 text-[13px] text-center lg:text-left max-w-xl">
                Adgen AI helps you generate video and image advertisements
                tailored for different platforms, audiences and cultural
                contexts, without needing design or marketing expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
