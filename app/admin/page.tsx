"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"

export default function AdminPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedOrder, setSelectedOrder] = useState<any>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 bg-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-600">
                Admin Dashboard
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Manage your orders, inventory, and customer reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="orders" className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-pink-600">Recent Orders</h2>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search orders..." className="w-[200px] pl-8" />
                </div>
              </div>
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id} onClick={() => setSelectedOrder(order)} className="cursor-pointer">
                          <TableCell className="font-medium">#{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                order.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-blue-100 text-blue-800"
                              }
                            >
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell>${order.total.toFixed(2)}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              {selectedOrder && (
                <Card>
                  <CardHeader>
                    <CardTitle>Order #{selectedOrder.id} Details</CardTitle>
                    <CardDescription>
                      Placed on {selectedOrder.date} by {selectedOrder.customer}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium">Customer Information</h3>
                          <p className="text-sm text-gray-500">
                            {selectedOrder.customer}
                            <br />
                            {selectedOrder.email}
                            <br />
                            {selectedOrder.phone}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Delivery Information</h3>
                          <p className="text-sm text-gray-500">
                            {selectedOrder.deliveryMethod}
                            <br />
                            {selectedOrder.deliveryDate}
                            <br />
                            {selectedOrder.address}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">Order Items</h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Item</TableHead>
                              <TableHead>Details</TableHead>
                              <TableHead className="text-right">Price</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {selectedOrder.items.map((item, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                <TableCell>{item.details}</TableCell>
                                <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline">Update Status</Button>
                        <Button className="bg-pink-600 hover:bg-pink-700">Print Order</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="calendar" className="space-y-4 pt-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-pink-600">Order Calendar</h2>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" onClick={() => setDate(new Date())}>
                    <CalendarIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Orders for {date ? date.toLocaleDateString() : "Selected Date"}</CardTitle>
                    <CardDescription>
                      {calendarOrders.filter((order) => order.date === date?.toLocaleDateString()).length} orders
                      scheduled
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {calendarOrders
                      .filter((order) => order.date === date?.toLocaleDateString())
                      .map((order) => (
                        <div key={order.id} className="mb-4 p-3 border rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">
                                #{order.id} - {order.customer}
                              </h3>
                              <p className="text-sm text-gray-500">{order.items}</p>
                            </div>
                            <Badge
                              className={
                                order.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-blue-100 text-blue-800"
                              }
                            >
                              {order.status}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center mt-2 text-sm">
                            <span>{order.time}</span>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    {calendarOrders.filter((order) => order.date === date?.toLocaleDateString()).length === 0 && (
                      <div className="text-center py-6 text-gray-500">No orders scheduled for this date</div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-pink-600">Customer Reviews</h2>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="filter" className="sr-only">
                    Filter
                  </Label>
                  <select
                    id="filter"
                    className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                  >
                    <option value="all">All Reviews</option>
                    <option value="recent">Recent</option>
                    <option value="positive">Positive</option>
                    <option value="negative">Negative</option>
                  </select>
                </div>
              </div>
              <Card>
                <CardContent className="p-6 space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{review.name}</h3>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                            <span className="text-sm text-gray-500 ml-1">{review.date}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Reply
                          </Button>
                          <Button variant="ghost" size="sm">
                            Hide
                          </Button>
                        </div>
                      </div>
                      <p className="mt-2 text-gray-600">{review.comment}</p>
                      {review.reply && (
                        <div className="mt-3 pl-4 border-l-2 border-pink-200">
                          <p className="text-sm font-medium text-pink-600">Rita's response:</p>
                          <p className="text-sm text-gray-600 mt-1">{review.reply}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

// Sample data
const orders = [
  {
    id: "1001",
    customer: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "(123) 456-7890",
    date: "2023-04-01",
    status: "Completed",
    total: 85.0,
    deliveryMethod: "Pickup",
    deliveryDate: "2023-04-15",
    address: "",
    items: [
      {
        name: "Chocolate Cake",
        details: "2kg, Birthday Design",
        price: 85.0,
      },
    ],
  },
  {
    id: "1002",
    customer: "Michael Brown",
    email: "michael@example.com",
    phone: "(123) 456-7891",
    date: "2023-04-02",
    status: "Pending",
    total: 120.0,
    deliveryMethod: "Delivery",
    deliveryDate: "2023-04-20",
    address: "123 Main St, Anytown, USA",
    items: [
      {
        name: "Wedding Cake",
        details: "3kg, Two-tier",
        price: 120.0,
      },
    ],
  },
  {
    id: "1003",
    customer: "Emily Davis",
    email: "emily@example.com",
    phone: "(123) 456-7892",
    date: "2023-04-03",
    status: "In Progress",
    total: 24.0,
    deliveryMethod: "Pickup",
    deliveryDate: "2023-04-10",
    address: "",
    items: [
      {
        name: "Cupcakes",
        details: "1 dozen, Vanilla",
        price: 24.0,
      },
    ],
  },
  {
    id: "1004",
    customer: "David Wilson",
    email: "david@example.com",
    phone: "(123) 456-7893",
    date: "2023-04-04",
    status: "Pending",
    total: 45.0,
    deliveryMethod: "Delivery",
    deliveryDate: "2023-04-18",
    address: "456 Oak St, Anytown, USA",
    items: [
      {
        name: "Red Velvet Cake",
        details: "1.5kg, Anniversary Design",
        price: 45.0,
      },
    ],
  },
]

const calendarOrders = [
  {
    id: "1001",
    customer: "Sarah Johnson",
    items: "Chocolate Cake (2kg)",
    date: "4/15/2023",
    time: "10:00 AM",
    status: "Pending",
  },
  {
    id: "1002",
    customer: "Michael Brown",
    items: "Wedding Cake (3kg)",
    date: "4/20/2023",
    time: "2:00 PM",
    status: "Pending",
  },
  {
    id: "1003",
    customer: "Emily Davis",
    items: "Cupcakes (1 dozen)",
    date: "4/10/2023",
    time: "11:30 AM",
    status: "In Progress",
  },
  {
    id: "1004",
    customer: "David Wilson",
    items: "Red Velvet Cake (1.5kg)",
    date: "4/18/2023",
    time: "3:30 PM",
    status: "Pending",
  },
  {
    id: "1005",
    customer: "Jennifer Smith",
    items: "Birthday Cake (2kg)",
    date: "4/15/2023",
    time: "1:00 PM",
    status: "Pending",
  },
]

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "March 15, 2023",
    comment:
      "Rita made the most beautiful birthday cake for my daughter. It was not only gorgeous but delicious too! Everyone at the party was impressed.",
    reply:
      "Thank you so much for your kind words, Sarah! It was a pleasure creating a special cake for your daughter's birthday. Looking forward to making more cakes for your future celebrations!",
  },
  {
    id: 2,
    name: "Michael Brown",
    rating: 5,
    date: "February 2, 2023",
    comment:
      "The wedding cake exceeded our expectations. All our guests were impressed by both the design and taste. Rita was professional and delivered exactly what we wanted.",
    reply: null,
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 4,
    date: "April 10, 2023",
    comment:
      "Ordered cupcakes for an office party and they were a hit! Will definitely order again. The only reason for 4 stars instead of 5 is that the delivery was a bit late.",
    reply:
      "Thank you for your feedback, Emily! I'm glad the cupcakes were enjoyed at your office party. I apologize for the late delivery and will ensure better timing for your future orders.",
  },
  {
    id: 4,
    name: "David Wilson",
    rating: 5,
    date: "January 20, 2023",
    comment:
      "Rita's cakes are simply the best in town. I've ordered multiple times and have never been disappointed. Highly recommend the red velvet!",
    reply: null,
  },
]

