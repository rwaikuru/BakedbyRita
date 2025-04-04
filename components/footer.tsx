import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400">BakedByRita</h3>
            <p className="text-sm text-muted-foreground">
              Delicious custom cakes and cupcakes for every occasion. Made with love and the finest ingredients.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Cakes
                </Link>
              </li>
              <li>
                <Link
                  href="/designs"
                  className="text-sm text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Designs
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  className="text-sm text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Order
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">123 Bakery Street</li>
              <li className="text-sm text-muted-foreground">Cakeville, CV 12345</li>
              <li className="text-sm text-muted-foreground">info@bakedbyrita.com</li>
              <li className="text-sm text-muted-foreground">(123) 456-7890</li>
            </ul>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} BakedByRita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

