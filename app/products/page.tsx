import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cake } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 bg-pink-50 dark:bg-pink-950/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-600 dark:text-pink-400">
                Our Cakes & Cupcakes
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Browse our selection of delicious cakes and cupcakes, available in various flavors and sizes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-background">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="cakes" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="cakes">Cakes</TabsTrigger>
                <TabsTrigger value="cupcakes">Cupcakes</TabsTrigger>
                <TabsTrigger value="seasonal">Seasonal Specials</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="cakes">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cakes.map((cake, index) => (
                  <Card
                    key={cake.id}
                    className="overflow-hidden border border-pink-100 dark:border-pink-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                    style={{ animationDelay: `${index * 100}ms` }}
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
                          <Cake className="h-4 w-4 text-pink-500 dark:text-pink-400 mr-1 group-hover:rotate-12 transition-transform" />
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
            </TabsContent>
            <TabsContent value="cupcakes">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cupcakes.map((cupcake, index) => (
                  <Card
                    key={cupcake.id}
                    className="overflow-hidden border border-pink-100 dark:border-pink-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={cupcake.image || "/placeholder.svg"}
                        alt={cupcake.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-4 relative bg-card">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg text-pink-600 dark:text-pink-400 group-hover:text-pink-700 dark:group-hover:text-pink-300 transition-colors">
                          {cupcake.name}
                        </h3>
                        <p className="font-medium">KSh {cupcake.price}/dozen</p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{cupcake.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Cake className="h-4 w-4 text-pink-500 dark:text-pink-400 mr-1 group-hover:rotate-12 transition-transform" />
                          <span className="text-sm text-muted-foreground">{cupcake.flavor}</span>
                        </div>
                        <Link href={`/products/${cupcake.id}`}>
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
            </TabsContent>
            <TabsContent value="seasonal">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {seasonal.map((item, index) => (
                  <Card
                    key={item.id}
                    className="overflow-hidden border border-pink-100 dark:border-pink-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2 bg-pink-600 dark:bg-pink-700 text-white text-xs font-medium px-2 py-1 rounded animate-pulse">
                        Limited Time
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-4 relative bg-card">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg text-pink-600 dark:text-pink-400 group-hover:text-pink-700 dark:group-hover:text-pink-300 transition-colors">
                          {item.name}
                        </h3>
                        <p className="font-medium">KSh {item.price}</p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Cake className="h-4 w-4 text-pink-500 dark:text-pink-400 mr-1 group-hover:rotate-12 transition-transform" />
                          <span className="text-sm text-muted-foreground">{item.flavor}</span>
                        </div>
                        <Link href={`/products/${item.id}`}>
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 bg-pink-50 dark:bg-pink-950/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-pink-600 dark:text-pink-400">
                Custom Orders
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Don't see what you're looking for? We can create custom cakes based on your preferences.
              </p>
            </div>
            <Link href="/order">
              <Button className="bg-pink-600 hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-600">
                Place a Custom Order
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const cakes = [
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
  {
    id: 4,
    name: "Red Velvet",
    description: "Classic red velvet cake with cream cheese frosting",
    price: 3000,
    flavor: "Red Velvet",
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 5,
    name: "Lemon Zest",
    description: "Tangy lemon cake with lemon curd filling and buttercream",
    price: 2700,
    flavor: "Lemon",
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 6,
    name: "Carrot Cake",
    description: "Spiced carrot cake with walnuts and cream cheese frosting",
    price: 2900,
    flavor: "Carrot",
    image: "/placeholder.svg?height=240&width=320",
  },
]

const cupcakes = [
  {
    id: 7,
    name: "Chocolate Cupcakes",
    description: "Rich chocolate cupcakes with chocolate buttercream",
    price: 1800,
    flavor: "Chocolate",
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 8,
    name: "Vanilla Cupcakes",
    description: "Light vanilla cupcakes with vanilla buttercream",
    price: 1600,
    flavor: "Vanilla",
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 9,
    name: "Red Velvet Cupcakes",
    description: "Classic red velvet cupcakes with cream cheese frosting",
    price: 2000,
    flavor: "Red Velvet",
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 10,
    name: "Lemon Cupcakes",
    description: "Tangy lemon cupcakes with lemon buttercream",
    price: 1800,
    flavor: "Lemon",
    image: "/placeholder.svg?height=240&width=320",
  },
]

const seasonal = [
  {
    id: 11,
    name: "Summer Berry Cake",
    description: "Light vanilla cake with fresh summer berries and whipped cream",
    price: 3500,
    flavor: "Mixed Berry",
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 12,
    name: "Pumpkin Spice Cake",
    description: "Spiced pumpkin cake with cinnamon cream cheese frosting",
    price: 3300,
    flavor: "Pumpkin Spice",
    image: "/placeholder.svg?height=240&width=320",
  },
]

