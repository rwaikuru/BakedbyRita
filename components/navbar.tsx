"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm border-b" : "bg-background"
      }`}
    >
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center group">
          <span className="text-2xl font-bold text-pink-600 dark:text-pink-400 transition-transform group-hover:scale-105">
            BakedByRita
          </span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-6">
          <Link href="/" className="text-sm font-medium relative group">
            <span className="text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
              Home
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 dark:bg-pink-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/products" className="text-sm font-medium relative group">
            <span className="text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
              Cakes
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 dark:bg-pink-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/designs" className="text-sm font-medium relative group">
            <span className="text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
              Designs
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 dark:bg-pink-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/order" className="text-sm font-medium relative group">
            <span className="text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
              Order
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 dark:bg-pink-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/reviews" className="text-sm font-medium relative group">
            <span className="text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
              Reviews
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 dark:bg-pink-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className="text-sm font-medium relative group">
            <span className="text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
              Contact
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 dark:bg-pink-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
        <div className="flex items-center ml-auto md:ml-4 gap-2">
          <ThemeToggle />
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-all duration-300 hover:rotate-6"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 animate-[fadeIn_0.3s_ease-in-out]" />
            ) : (
              <Menu className="h-5 w-5 animate-[fadeIn_0.3s_ease-in-out]" />
            )}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b animate-[slideInDown_0.3s_ease-out]">
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              href="/"
              className="text-sm font-medium hover:text-pink-600 dark:hover:text-pink-400 transition-colors pl-2 border-l-2 border-transparent hover:border-pink-400 dark:hover:border-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium hover:text-pink-600 dark:hover:text-pink-400 transition-colors pl-2 border-l-2 border-transparent hover:border-pink-400 dark:hover:border-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Cakes
            </Link>
            <Link
              href="/designs"
              className="text-sm font-medium hover:text-pink-600 dark:hover:text-pink-400 transition-colors pl-2 border-l-2 border-transparent hover:border-pink-400 dark:hover:border-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Designs
            </Link>
            <Link
              href="/order"
              className="text-sm font-medium hover:text-pink-600 dark:hover:text-pink-400 transition-colors pl-2 border-l-2 border-transparent hover:border-pink-400 dark:hover:border-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Order
            </Link>
            <Link
              href="/reviews"
              className="text-sm font-medium hover:text-pink-600 dark:hover:text-pink-400 transition-colors pl-2 border-l-2 border-transparent hover:border-pink-400 dark:hover:border-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-pink-600 dark:hover:text-pink-400 transition-colors pl-2 border-l-2 border-transparent hover:border-pink-400 dark:hover:border-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

