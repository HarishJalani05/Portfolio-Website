'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  MotionValue,
} from 'framer-motion';
import {
  FaHouse,
  FaUser,
  FaBriefcase,
  FaLaptopCode,
  FaGraduationCap,
  FaEnvelope,
} from 'react-icons/fa6';

interface DockItemProps {
  item: {
    id: string;
    name: string;
    href: string;
    icon: React.ReactNode;
  };
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  isActive: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => void;
  hoveredItem: string | null;
  setHoveredItem: (id: string | null) => void;
}

function DockIcon({
  item,
  mouseX,
  mouseY,
  isActive,
  onNavClick,
  hoveredItem,
  setHoveredItem,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate 2D Euclidean distance between cursor position and center of this icon
  const distance = useTransform([mouseX, mouseY], ([x, y]: number[]) => {
    if (x === Infinity || y === Infinity || !ref.current) return 300;
    const bounds = ref.current.getBoundingClientRect();
    const centerX = bounds.x + bounds.width / 2;
    const centerY = bounds.y + bounds.height / 2;
    const dx = x - centerX;
    const dy = y - centerY;
    return Math.sqrt(dx * dx + dy * dy);
  });

  // Spring physics for ultra-smooth, fluid enlargement as cursor approaches
  const sizeSync = useTransform(distance, [0, 60, 130, 200], [60, 52, 44, 40]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 280, damping: 20 });

  const iconScaleSync = useTransform(distance, [0, 60, 130, 200], [1.45, 1.25, 1.1, 1]);
  const iconScale = useSpring(iconScaleSync, { mass: 0.1, stiffness: 280, damping: 20 });

  const isHovered = hoveredItem === item.id;

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center my-0.5"
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {/* Popout Tooltip to the Left */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute right-full mr-4 px-3 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-mono font-medium shadow-2xl border border-cyan-500/30 whitespace-nowrap pointer-events-none flex items-center gap-2 z-50 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>{item.name}</span>
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900/95 rotate-45 border-r border-t border-cyan-500/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Magnified Dock Icon Button */}
      <motion.a
        href={item.href}
        onClick={(e) => onNavClick(e, item.href, item.id)}
        aria-label={item.name}
        style={{ width: size, height: size }}
        className={`relative rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer ${
          isActive
            ? 'bg-gradient-to-tr from-cyan-600 via-cyan-500 to-sky-400 text-white shadow-lg shadow-cyan-500/40'
            : 'text-slate-600 hover:text-cyan-700 bg-slate-100/90 hover:bg-white border border-slate-200/80 shadow-sm'
        }`}
      >
        <motion.span style={{ scale: iconScale }} className="text-sm flex items-center justify-center">
          {item.icon}
        </motion.span>

        {/* Active Ring Indicator */}
        {isActive && (
          <motion.span
            layoutId="activePill"
            className="absolute inset-0 rounded-full border-2 border-white/70 pointer-events-none"
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          />
        )}
      </motion.a>
    </div>
  );
}

function EmailDockIcon({
  mouseX,
  mouseY,
  hoveredItem,
  setHoveredItem,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  hoveredItem: string | null;
  setHoveredItem: (id: string | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform([mouseX, mouseY], ([x, y]: number[]) => {
    if (x === Infinity || y === Infinity || !ref.current) return 300;
    const bounds = ref.current.getBoundingClientRect();
    const centerX = bounds.x + bounds.width / 2;
    const centerY = bounds.y + bounds.height / 2;
    const dx = x - centerX;
    const dy = y - centerY;
    return Math.sqrt(dx * dx + dy * dy);
  });

  const sizeSync = useTransform(distance, [0, 60, 130, 200], [60, 52, 44, 40]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 280, damping: 20 });

  const iconScaleSync = useTransform(distance, [0, 60, 130, 200], [1.45, 1.25, 1.1, 1]);
  const iconScale = useSpring(iconScaleSync, { mass: 0.1, stiffness: 280, damping: 20 });

  const isHovered = hoveredItem === 'email';

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center my-0.5"
      onMouseEnter={() => setHoveredItem('email')}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute right-full mr-4 px-3 py-1.5 rounded-xl bg-slate-900/95 text-cyan-300 text-xs font-mono font-medium shadow-2xl border border-cyan-500/30 whitespace-nowrap pointer-events-none flex items-center gap-2 z-50 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>Get in Touch</span>
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900/95 rotate-45 border-r border-t border-cyan-500/30" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="mailto:harishjalani1@gmail.com"
        title="Send Email"
        style={{ width: size, height: size }}
        className="rounded-full bg-slate-900 text-cyan-400 hover:bg-cyan-600 hover:text-white transition-colors duration-200 flex items-center justify-center shadow-md cursor-pointer border border-cyan-500/20"
      >
        <motion.span style={{ scale: iconScale }}>
          <FaEnvelope className="text-xs" />
        </motion.span>
      </motion.a>
    </div>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isNearDock, setIsNearDock] = useState(false);
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

  const navItems = [
    { id: 'hero', name: 'Home', href: '#', icon: <FaHouse /> },
    { id: 'about', name: 'About Me', href: '#about', icon: <FaUser /> },
    { id: 'experience', name: 'Experience', href: '#experience', icon: <FaBriefcase /> },
    { id: 'projects', name: 'Projects', href: '#projects', icon: <FaLaptopCode /> },
    { id: 'skills', name: 'Education & Skills', href: '#skills', icon: <FaGraduationCap /> },
    { id: 'contact', name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ];

  // Global mouse proximity tracking: activates magnification whenever the cursor approaches the right side
  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      // Proximity zone: within 220px of the right edge of viewport
      const threshold = 220;
      const distanceFromRight = window.innerWidth - e.clientX;

      if (distanceFromRight <= threshold) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        setIsNearDock(true);
      } else {
        mouseX.set(Infinity);
        mouseY.set(Infinity);
        setIsNearDock(false);
      }
    };

    const handleWindowMouseLeave = () => {
      mouseX.set(Infinity);
      mouseY.set(Infinity);
      setIsNearDock(false);
      setHoveredItem(null);
    };

    window.addEventListener('mousemove', handleWindowMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleWindowMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      document.removeEventListener('mouseleave', handleWindowMouseLeave);
    };
  }, [mouseX, mouseY]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // If user is near the bottom of the page, activate 'contact' section
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 120;

      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const sectionIds = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (id === 'hero') {
          if (window.scrollY < 300) {
            setActiveSection('hero');
            break;
          }
        } else {
          const element = document.getElementById(id);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    if (href === '#' || id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 60;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
        setActiveSection(id);
      }
    }
  };

  return (
    <>
      {/* Top Left Minimal Branding Logo */}
      <header
        className={`fixed top-4 left-6 z-40 transition-all duration-300 ${
          scrolled ? 'opacity-90 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#', 'hero')}
          className="flex items-center gap-3 bg-white/85 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all group"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-cyan-600 shadow-sm flex-shrink-0 group-hover:border-cyan-400 transition-colors">
            <img
              src="/assets/Harish%20Jalani%20Photo.png"
              alt="Harish Jalani"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <span className="font-bold text-slate-900 tracking-tight text-xs block group-hover:text-cyan-700 transition-colors">
              Harish Jalani
            </span>
            <span className="text-[9px] font-mono text-cyan-700 uppercase tracking-wider block">
              Finance & AI System Architect
            </span>
          </div>
        </a>
      </header>

      {/* Right-Side Vertical Floating Dock with Proximity Magnification */}
      <nav
        aria-label="Sidebar navigation"
        className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex items-center pr-1 py-6"
      >
        {/* Dock Glassmorphism Shell */}
        <motion.div
          animate={{
            borderColor: isNearDock ? 'rgba(6, 182, 212, 0.6)' : 'rgba(226, 232, 240, 0.9)',
            boxShadow: isNearDock
              ? '0 25px 50px -12px rgba(6, 182, 212, 0.25), 0 0 20px rgba(6, 182, 212, 0.15)'
              : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
          }}
          transition={{ duration: 0.2 }}
          className="bg-white/85 backdrop-blur-2xl border border-slate-200/90 rounded-full p-2.5 flex flex-col items-center gap-1.5"
        >
          {navItems.map((item) => (
            <DockIcon
              key={item.id}
              item={item}
              mouseX={mouseX}
              mouseY={mouseY}
              isActive={activeSection === item.id}
              onNavClick={handleNavClick}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
            />
          ))}

          {/* Subtle Divider */}
          <div className="w-5 h-px bg-slate-200/80 my-1" />

          {/* Quick Action: Email Contact Trigger with Magnification */}
          <EmailDockIcon
            mouseX={mouseX}
            mouseY={mouseY}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
          />
        </motion.div>
      </nav>
    </>
  );
}