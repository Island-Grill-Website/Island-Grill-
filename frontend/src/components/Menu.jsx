import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const menuItems = [
  {
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, basil, and olive oil on our signature wood-fired crust",
    price: "$18",
    category: "Pizza",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Osso Buco",
    description: "Braised veal shanks with vegetables, white wine, and broth, served with risotto",
    price: "$32",
    category: "Main Course",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
    price: "$12",
    category: "Dessert",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Seafood Risotto",
    description: "Creamy Arborio rice with fresh seafood, white wine, and saffron",
    price: "$28",
    category: "Main Course",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Burrata Caprese",
    description: "Fresh burrata cheese with heirloom tomatoes, basil, and balsamic reduction",
    price: "$16",
    category: "Appetizer",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Panna Cotta",
    description: "Silky vanilla panna cotta with berry compote and mint",
    price: "$10",
    category: "Dessert",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function FeaturedMenu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our chef's signature dishes, crafted with the finest ingredients and traditional Italian
            techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                <Badge className="absolute top-4 left-4 bg-orange-600">{item.category}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-xl font-bold text-orange-600">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}
