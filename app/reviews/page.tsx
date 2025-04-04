"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star } from "lucide-react"

export default function ReviewsPage() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [reviewSubmitted, setReviewSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send the review data to your backend
    setReviewSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 bg-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-600">
                Customer Reviews
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                See what our customers are saying about us and share your own experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-pink-600 mb-6">Leave a Review</h2>
              {!reviewSubmitted ? (
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label>Rating</Label>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-6 w-6 cursor-pointer transition-all duration-200 ${
                                (hoveredRating || rating) >= star
                                  ? "text-yellow-400 fill-yellow-400 scale-110"
                                  : "text-gray-300 hover:text-gray-400"
                              }`}
                              onMouseEnter={() => setHoveredRating(star)}
                              onMouseLeave={() => setHoveredRating(0)}
                              onClick={() => setRating(star)}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="review">Your Review</Label>
                        <Textarea
                          id="review"
                          placeholder="Share your experience with our cakes and service"
                          className="min-h-[120px]"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="order-id">Order ID (optional)</Label>
                        <Input id="order-id" placeholder="e.g. #1001" />
                      </div>
                      <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                        Submit Review
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="flex flex-col items-center justify-center space-y-4 py-6">
                      <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                        <Star className="h-8 w-8 text-pink-600 fill-pink-600" />
                      </div>
                      <h3 className="text-xl font-bold text-pink-600">Thank You for Your Review!</h3>
                      <p className="text-gray-500 max-w-md">
                        We appreciate you taking the time to share your experience. Your feedback helps us improve our
                        products and services.
                      </p>
                      <Button
                        variant="outline"
                        className="border-pink-200 text-pink-600"
                        onClick={() => setReviewSubmitted(false)}
                      >
                        Write Another Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-pink-600 mb-6">Recent Reviews</h2>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:shadow-md group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-6 relative">
                      <div className="absolute top-4 right-4 opacity-10 text-pink-300 group-hover:opacity-20 transition-opacity">
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
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            } transition-transform group-hover:scale-110 duration-300`}
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 relative z-10">"{testimonial.comment}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-semibold group-hover:bg-pink-200 transition-colors">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Rita made the most beautiful birthday cake for my daughter. It was not only gorgeous but delicious too! Everyone at the party was impressed.",
    date: "March 15, 2023",
  },
  {
    name: "Michael Brown",
    rating: 5,
    comment:
      "The wedding cake exceeded our expectations. All our guests were impressed by both the design and taste. Rita was professional and delivered exactly what we wanted.",
    date: "February 2, 2023",
  },
  {
    name: "Emily Davis",
    rating: 4,
    comment:
      "Ordered cupcakes for an office party and they were a hit! Will definitely order again. The only reason for 4 stars instead of 5 is that the delivery was a bit late.",
    date: "April 10, 2023",
  },
  {
    name: "David Wilson",
    rating: 5,
    comment:
      "Rita's cakes are simply the best in town. I've ordered multiple times and have never been disappointed. Highly recommend the red velvet!",
    date: "January 20, 2023",
  },
]

