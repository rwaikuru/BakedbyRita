import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cake, ChevronRight } from "lucide-react"

export default function Home() {
  const featuredCakes = [
    {
      id: 1,
      name: "Chocolate Delight",
      description: "Rich chocolate cake with ganache and chocolate shavings",
      price: 2800,
      flavor: "Chocolate",
      image: "/placeholder.svg?height=240&width=320",
    },
    {
      id: 2,
      name: "Vanilla Dream",
      description: "Light vanilla cake with buttercream frosting",
      price: 2500,
      flavor: "Vanilla",
      image: "/placeholder.svg?height=240&width=320",
    },
    {
      id: 3,
      name: "Strawberry Bliss",
      description: "Strawberry cake with fresh strawberries and cream",
      price: 3200,
      flavor: "Strawberry",
      image: "/placeholder.svg?height=240&width=320",
    },
  ]

  const designCategories = [
    {
      name: "Birthday",
      slug: "birthday",
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      name: "Wedding",
      slug: "wedding",
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      name: "Anniversary",
      slug: "anniversary",
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      name: "Baby Shower",
      slug: "baby-shower",
      image: "/placeholder.svg?height=160&width=160",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Rita made the most beautiful birthday cake for my daughter. It was not only gorgeous but delicious too!",
      date: "March 15, 2023",
    },
    {
      name: "Michael Brown",
      rating: 5,
      comment:
        "The wedding cake exceeded our expectations. All our guests were impressed by both the design and taste.",
      date: "February 2, 2023",
    },
    {
      name: "Emily Davis",
      rating: 4,
      comment: "Ordered cupcakes for an office party and they were a hit! Will definitely order again.",
      date: "April 10, 2023",
    },
  ]
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-100 to-background dark:from-pink-950/30 dark:to-background overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 animate-[fadeIn_1s_ease-in-out]">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-pink-600 dark:text-pink-400 animate-[slideInLeft_0.8s_ease-out]">
                  Baked By Rita
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl animate-[slideInLeft_1s_ease-out]">
                  Delicious custom cakes and cupcakes for every occasion. Made with love and the finest ingredients.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-[fadeIn_1.5s_ease-in-out]">
                <Link href="/products">
                  <Button className="bg-pink-600 hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-600 transition-transform hover:scale-105">
                    View Our Cakes
                  </Button>
                </Link>
                <Link href="/order">
                  <Button
                    variant="outline"
                    className="border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-400 transition-transform hover:scale-105"
                  >
                    Place an Order
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-500 dark:to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Featured Cake"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover transition-all duration-500 group-hover:scale-105 z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-200 dark:bg-pink-800 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-300 dark:bg-pink-700 rounded-full opacity-70 animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-pink-600 dark:text-pink-400 relative overflow-hidden pb-2 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-1 before:bg-pink-200 dark:before:bg-pink-800">
                Our Popular Cakes
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Handcrafted with love and the finest ingredients
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredCakes.map((cake, index) => (
              <Card
                key={cake.id}
                className="overflow-hidden border border-pink-100 dark:border-pink-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={cake.image || "/placeholder.svg"}
                    alt={cake.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-4 relative bg-card">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg text-pink-600 dark:text-pink-400 group-hover:text-pink-700 dark:group-hover:text-pink-300 transition-colors">
                      {cake.name}
                    </h3>
                    <p className="font-medium">KSh {cake.price}/kg</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{cake.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Cake className="h-4 w-4 text-pink-500 dark:text-pink-400 mr-1" />
                      <span className="text-sm text-muted-foreground">{cake.flavor}</span>
                    </div>
                    <Link href={`/products/${cake.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 group-hover:bg-pink-50 dark:group-hover:bg-pink-950/30 transition-all"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/products">
              <Button
                variant="outline"
                className="border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-all duration-300 hover:scale-105"
              >
                View All Cakes <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Design Showcase */}
      <section className="w-full py-12 bg-pink-50 dark:bg-pink-950/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-pink-600 dark:text-pink-400 relative overflow-hidden pb-2 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-1 before:bg-pink-200 dark:before:bg-pink-800">
                Cake Design Showcase
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Browse our designs for different occasions
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {designCategories.map((category, index) => (
              <Link href={`/designs/${category.slug}`} key={category.slug}>
                <div
                  className="group relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-end justify-center p-4">
                    <div className="w-full transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                      <h3 className="text-white font-medium text-center group-hover:text-pink-200 transition-colors">
                        {category.name}
                      </h3>
                      <div className="h-0.5 w-0 bg-pink-300 mx-auto mt-1 transition-all duration-300 group-hover:w-12"></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/designs">
              <Button
                variant="outline"
                className="border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-all duration-300 hover:scale-105"
              >
                Explore All Designs{" "}
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-pink-600 dark:text-pink-400 relative overflow-hidden pb-2 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-1 before:bg-pink-200 dark:before:bg-pink-800">
                Customer Reviews
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                See what our customers are saying about us
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border border-pink-100 dark:border-pink-900 hover:border-pink-200 dark:hover:border-pink-800 transition-all duration-300 hover:shadow-md group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 relative">
                  <div className="absolute top-4 right-4 opacity-10 text-pink-300 dark:text-pink-700 group-hover:opacity-20 transition-opacity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                    </svg>
                  </div>
                  <p className="mb-4 text-muted-foreground">{testimonial.comment}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center mb-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-yellow-500"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        By {testimonial.name} on {testimonial.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

