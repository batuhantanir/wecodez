"use client";
import React, { useEffect, useState } from "react";
import Hambuger from "./ui/Hambuger";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/utils/useMediaQuery";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./Theme/ThemeSwitch";
import LangSwitch from "@/components/lang/LangSwitch";

function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery(769);
  const pathname = usePathname();

  const container = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
        type: "tween",
        stiffness: 300,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
    },
  };

  const child = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  return (
    <div className="absolute top-0 md:left-1/2 md:-translate-x-1/2  z-10 w-full bg-transparent py-5   overflow-x-hidden h-screen md:h-fit md:max-w-7xl">
      <div className="flex items-center justify-between">
        <div className="max-w-7xl w-full bg-transparent px-8 md:px-4 py-5 flex justify-between items-center ">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-28 "
            src="/we.svg"
            alt="Logo"
          />
          <Hambuger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div>
          {isMobile ? (
            <motion.nav
              className="absolute order-3 px-5 md:order-2 flex flex-col items-start gap-4 top-0 right-0 bg-white text-slate-950 dark:text-white dark:bg-slate-950 w-full pt-24 z-20  h-dvh"
              variants={container}
              animate={isOpen ? "open" : "closed"}
            >
              {navItems.map((item) => (
                <motion.a
                  href={item.link}
                  key={item.title}
                  variants={child}
                  className=" text-lg md:text-xl ml-4 font-medium transition-colors duration-300"
                >
                  {item.title}
                </motion.a>
              ))}
              <ThemeSwitch />
              <LangSwitch />
            </motion.nav>
          ) : (
            <motion.nav
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-4 text-slate-950 dark:text-white"
            >
              {navItems.map((item) => (
                <Link
                  href={item.link}
                  key={item.title}
                  className={cn(
                    " text-xl ml-4 font-semibold transition-all duration-300",
                    pathname == item.link && "opacity-[.80] "
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <div className="ml-5 flex gap-4 w-fit">
                <LangSwitch />
                <ThemeSwitch />
              </div>
            </motion.nav>
          )}
        </div>
      </div>
    </div>
  );
}

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export default HeaderNav;
