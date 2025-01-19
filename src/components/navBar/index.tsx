"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

// import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  //   AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// import logo from "../../../public/assets/mbayan.png";
import { useScrollLock } from "@/hooks/useScrollLock";
import { ScrollArea } from "../ui/scrollArea";
import { navItems } from "./data";

export function NavBar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const isActive = (href: string) => pathname?.startsWith(href);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const { lock, unlock } = useScrollLock({
    autoLock: false,
    lockTarget: "#scrollable",
  });
  const router = useRouter();

  React.useEffect(() => {
    if (activeItem) {
      lock();
    } else {
      unlock();
    }
    return () => {
      unlock();
    };
  }, [activeItem, lock, unlock]);

  React.useEffect(() => {
    const handleRouteChange = () => {
      setActiveItem(null);
      setIsSheetOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <nav className="relative z-50 font-inter" id="scrollable">
      <nav className="supports-[backdrop-filter]:bg-main-yellow/60 fixed top-0 w-full p-7 sm:p-4 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              {/* <Image
                src={logo}
                width={160}
                height={160}
                priority
                alt="brand logo"
                className="size-12 object-contain"
              /> */}
              <p className="text-white font-bold text-2xl">LUKMAN</p>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="sm:hidden flex gap-6">
            {navItems.map((item, index) => (
              <Link href={item.href || "/"} key={index}>
                <Button
                  variant="ghost"
                  className={cn(
                    `text-lg font-medium transition-colors hover:text-primary ${
                      activeItem === item.title
                        ? "text-yellow-900"
                        : "text-white"
                    }`,
                    isActive(item?.href as string) && "text-[#E3B503]"
                  )}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </div>

          {/* Hamburger Menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="border-white sm:block hidden bg-transparent"
              >
                <Menu className="h-5 w-6  text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="max-w-[400px] bg-nav-items sm:w-full"
            >
              <SheetHeader>
                <SheetTitle>
                  <Link
                    href="/"
                    className="flex items-center space-x-2 font-mono "
                  >
                    <Image
                      src={"/assets/mbayan.png"}
                      width={150}
                      height={150}
                      alt="brand logo"
                      className="size-12"
                    />
                  </Link>
                </SheetTitle>
                <SheetDescription className="text-left">
                  Explore our available classes to increase your understanding
                  of the religion
                </SheetDescription>
              </SheetHeader>
              <ScrollArea className="no-scrollbar mt-6 h-[calc(100vh-8rem)]">
                <Accordion type="single" collapsible>
                  {navItems.map((item, index) => (
                    <Link href={item.href || "/"} key={index}>
                      <AccordionItem value={`item-${index}`} key={item.title}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        {/* <AccordionContent className="no-scrollbar">
                        {item.items.map((section) => (
                          <div key={section.category} className="mb-4">
                            <Link href={section?.href || "#"}>
                              <h3 className="mb-2 text-sm font-semibold">
                                {section.category}
                              </h3>
                            </Link>
                            <p className="mb-2 text-xs text-black opacity-50">
                              {section.description}
                            </p>
                            <div className="space-y-2">
                              {section?.subitems?.map((subitem) => (
                                <Link
                                  key={subitem.title}
                                  href={subitem.href}
                                  className="block text-sm hover:text-primary"
                                >
                                {subitem.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </AccordionContent> */}
                      </AccordionItem>
                    </Link>
                  ))}
                </Accordion>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </nav>
  );
}
