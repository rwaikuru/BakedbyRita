import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function DesignsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 bg-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-600">
                Cake Design Showcase
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Browse our designs for different occasions to find inspiration for your perfect cake
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designCategories.map((category, index) => (
              <Card
                key={category.slug}
                className="overflow-hidden border border-pink-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-semibold text-pink-600 mb-2 group-hover:text-pink-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{category.description}</p>
                  <Link href={`/designs/${category.slug}`}>
                    <Button className="w-full bg-pink-600 hover:bg-pink-700 transition-all duration-300 group-hover:shadow-md">
                      <span className="group-hover:mr-2 transition-all">View Designs</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-pink-600">Custom Design Request</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Don't see a design that matches your vision? Let Rita create a custom design just for you.
              </p>
            </div>
            <Link href="/order?custom=true">
              <Button className="bg-pink-600 hover:bg-pink-700">Request Custom Design</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const designCategories = [
  {
    name: "Birthday Cakes",
    slug: "birthday",
    description: "Celebrate another trip around the sun with our festive birthday cake designs for all ages.",
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    name: "Wedding Cakes",
    slug: "wedding",
    description: "Elegant and romantic cake designs to make your special day even more memorable.",
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    name: "Anniversary Cakes",
    slug: "anniversary",
    description: "Commemorate your love story with our beautiful anniversary cake designs.",
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    name: "Baby Shower Cakes",
    slug: "baby-shower",
    description: "Sweet and adorable cake designs to welcome the newest addition to your family.",
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    name: "Graduation Cakes",
    slug: "graduation",
    description: "Celebrate academic achievements with our graduation-themed cake designs.",
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    name: "Holiday Cakes",
    slug: "holiday",
    description: "Festive cake designs for Christmas, Easter, Halloween, and other special holidays.",
    image: "/placeholder.svg?height=240&width=320",
  },
]

