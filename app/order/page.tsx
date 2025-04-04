"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/date-picker"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Check } from "lucide-react"

export default function OrderPage() {
  const searchParams = useSearchParams()
  const isCustom = searchParams.get("custom") === "true"
  const [orderStep, setOrderStep] = useState(1)
  const [orderComplete, setOrderComplete] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (orderStep < 3) {
      setOrderStep(orderStep + 1)
    } else {
      setOrderComplete(true)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 bg-pink-50 dark:bg-pink-950/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-600 dark:text-pink-400">
                Place Your Order
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Fill out the form below to order your custom cake or cupcakes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-background">
        <div className="container px-4 md:px-6 max-w-3xl">
          {!orderComplete ? (
            <Card className="border border-pink-100 dark:border-pink-900">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div
                    className={`flex items-center ${orderStep >= 1 ? "text-pink-600 dark:text-pink-400" : "text-muted-foreground"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${orderStep >= 1 ? "bg-pink-600 dark:bg-pink-700 text-white" : "bg-muted"}`}
                    >
                      {orderStep > 1 ? <Check className="h-4 w-4" /> : "1"}
                    </div>
                    <span className="text-sm font-medium">Cake Details</span>
                  </div>
                  <div className="h-px w-12 bg-muted"></div>
                  <div
                    className={`flex items-center ${orderStep >= 2 ? "text-pink-600 dark:text-pink-400" : "text-muted-foreground"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${orderStep >= 2 ? "bg-pink-600 dark:bg-pink-700 text-white" : "bg-muted"}`}
                    >
                      {orderStep > 2 ? <Check className="h-4 w-4" /> : "2"}
                    </div>
                    <span className="text-sm font-medium">Delivery Details</span>
                  </div>
                  <div className="h-px w-12 bg-muted"></div>
                  <div
                    className={`flex items-center ${orderStep >= 3 ? "text-pink-600 dark:text-pink-400" : "text-muted-foreground"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${orderStep >= 3 ? "bg-pink-600 dark:bg-pink-700 text-white" : "bg-muted"}`}
                    >
                      3
                    </div>
                    <span className="text-sm font-medium">Confirm Order</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {orderStep === 1 && (
                    <div className="space-y-6">
                      <Tabs defaultValue={isCustom ? "custom" : "standard"}>
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="standard">Standard Cake</TabsTrigger>
                          <TabsTrigger value="custom">Custom Design</TabsTrigger>
                        </TabsList>
                        <TabsContent value="standard" className="space-y-6 pt-4">
                          <div className="space-y-2">
                            <Label htmlFor="cake-type">Cake Type</Label>
                            <Select required>
                              <SelectTrigger id="cake-type">
                                <SelectValue placeholder="Select cake type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="round">Round Cake</SelectItem>
                                <SelectItem value="sheet">Sheet Cake</SelectItem>
                                <SelectItem value="cupcakes">Cupcakes</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="flavor">Flavor</Label>
                            <Select required>
                              <SelectTrigger id="flavor">
                                <SelectValue placeholder="Select flavor" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="chocolate">Chocolate</SelectItem>
                                <SelectItem value="vanilla">Vanilla</SelectItem>
                                <SelectItem value="strawberry">Strawberry</SelectItem>
                                <SelectItem value="red-velvet">Red Velvet</SelectItem>
                                <SelectItem value="lemon">Lemon</SelectItem>
                                <SelectItem value="carrot">Carrot</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="size">Size</Label>
                            <RadioGroup defaultValue="1kg" className="flex flex-col space-y-1">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="1kg" id="1kg" />
                                <Label htmlFor="1kg">1kg (KSh 2,500)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="2kg" id="2kg" />
                                <Label htmlFor="2kg">2kg (KSh 3,000)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="3kg" id="3kg" />
                                <Label htmlFor="3kg">3kg (KSh 3,500)</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </TabsContent>
                        <TabsContent value="custom" className="space-y-6 pt-4">
                          <div className="space-y-2">
                            <Label htmlFor="cake-type-custom">Cake Type</Label>
                            <Select required>
                              <SelectTrigger id="cake-type-custom">
                                <SelectValue placeholder="Select cake type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="round">Round Cake</SelectItem>
                                <SelectItem value="sheet">Sheet Cake</SelectItem>
                                <SelectItem value="tiered">Tiered Cake</SelectItem>
                                <SelectItem value="sculpted">Sculpted Cake</SelectItem>
                                <SelectItem value="cupcakes">Cupcakes</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="flavor-custom">Flavor</Label>
                            <Select required>
                              <SelectTrigger id="flavor-custom">
                                <SelectValue placeholder="Select flavor" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="chocolate">Chocolate</SelectItem>
                                <SelectItem value="vanilla">Vanilla</SelectItem>
                                <SelectItem value="strawberry">Strawberry</SelectItem>
                                <SelectItem value="red-velvet">Red Velvet</SelectItem>
                                <SelectItem value="lemon">Lemon</SelectItem>
                                <SelectItem value="carrot">Carrot</SelectItem>
                                <SelectItem value="custom">Custom (specify in description)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="occasion">Occasion</Label>
                            <Select required>
                              <SelectTrigger id="occasion">
                                <SelectValue placeholder="Select occasion" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="birthday">Birthday</SelectItem>
                                <SelectItem value="wedding">Wedding</SelectItem>
                                <SelectItem value="anniversary">Anniversary</SelectItem>
                                <SelectItem value="baby-shower">Baby Shower</SelectItem>
                                <SelectItem value="graduation">Graduation</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="design-description">Design Description</Label>
                            <Textarea
                              id="design-description"
                              placeholder="Describe your cake design, theme, colors, and any specific requirements"
                              className="min-h-[120px]"
                              required
                            />
                          </div>
                        </TabsContent>
                      </Tabs>
                      <div className="flex justify-end">
                        <Button
                          type="submit"
                          className="bg-pink-600 hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-600"
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  )}

                  {orderStep === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="delivery-date">Delivery/Pickup Date</Label>
                        <div className="flex items-center">
                          <DatePicker />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Delivery Method</Label>
                        <RadioGroup defaultValue="pickup" className="flex flex-col space-y-3">
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="pickup" id="pickup" className="mt-1" />
                            <div>
                              <Label htmlFor="pickup" className="font-medium">
                                Pickup
                              </Label>
                              <p className="text-sm text-muted-foreground">Pick up your order from our bakery</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="delivery" id="delivery" className="mt-1" />
                            <div>
                              <Label htmlFor="delivery" className="font-medium">
                                Delivery
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                We'll deliver to your address (additional fee may apply)
                              </p>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Delivery Address (if applicable)</Label>
                        <Textarea id="address" className="min-h-[80px]" />
                      </div>
                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={() => setOrderStep(1)}>
                          Previous Step
                        </Button>
                        <Button
                          type="submit"
                          className="bg-pink-600 hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-600"
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  )}

                  {orderStep === 3 && (
                    <div className="space-y-6">
                      <div className="rounded-lg bg-pink-50 dark:bg-pink-950/20 p-4">
                        <h3 className="font-semibold text-lg text-pink-600 dark:text-pink-400 mb-4">Order Summary</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Cake Type:</span>
                            <span className="text-sm">Custom Round Cake</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Flavor:</span>
                            <span className="text-sm">Chocolate</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Size:</span>
                            <span className="text-sm">2kg</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Delivery Date:</span>
                            <span className="text-sm">April 15, 2023</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Delivery Method:</span>
                            <span className="text-sm">Pickup</span>
                          </div>
                          <div className="border-t border-pink-200 dark:border-pink-800 my-2"></div>
                          <div className="flex justify-between font-semibold">
                            <span>Total:</span>
                            <span>KSh 3,000</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="special-instructions">Special Instructions</Label>
                        <Textarea
                          id="special-instructions"
                          placeholder="Any additional information or special requests"
                          className="min-h-[80px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="payment-method">Payment Method</Label>
                        <RadioGroup defaultValue="cash" className="flex flex-col space-y-1">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cash" id="cash" />
                            <Label htmlFor="cash">Cash on Pickup/Delivery</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mpesa" id="mpesa" />
                            <Label htmlFor="mpesa">M-Pesa</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                            <Label htmlFor="bank-transfer">Bank Transfer</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={() => setOrderStep(2)}>
                          Previous Step
                        </Button>
                        <Button
                          type="submit"
                          className="bg-pink-600 hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-600"
                        >
                          Place Order
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="border border-pink-100 dark:border-pink-900 text-center">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center space-y-4 py-6">
                  <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
                    <Check className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-400">Order Placed Successfully!</h2>
                  <p className="text-muted-foreground max-w-md">
                    Thank you for your order. We've received your request and will contact you shortly to confirm the
                    details.
                  </p>
                  <div className="bg-pink-50 dark:bg-pink-950/20 rounded-lg p-4 w-full max-w-sm">
                    <div className="flex items-center justify-center space-x-2 text-pink-600 dark:text-pink-400 mb-2">
                      <Calendar className="h-5 w-5" />
                      <span className="font-medium">Order Details</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Order #: ORD-2023-1234
                      <br />
                      Date: April 1, 2023
                      <br />
                      Pickup/Delivery: April 15, 2023
                    </p>
                  </div>
                  <Button
                    className="bg-pink-600 hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-600"
                    onClick={() => (window.location.href = "/")}
                  >
                    Return to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  )
}

