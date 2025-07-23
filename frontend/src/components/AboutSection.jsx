import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Users, Utensils } from "lucide-react"

const features = [
  {
    icon: <Utensils className="h-8 w-8 text-orange-600" />,
    title: "Authentic Cuisine",
    description: "Traditional Italian recipes passed down through generations",
  },
  {
    icon: <Award className="h-8 w-8 text-orange-600" />,
    title: "Award Winning",
    description: "Recognized for excellence in fine dining and service",
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-600" />,
    title: "Fresh Daily",
    description: "Ingredients sourced fresh daily from local markets",
  },
  {
    icon: <Users className="h-8 w-8 text-orange-600" />,
    title: "Family Owned",
    description: "A family business dedicated to hospitality since 1985",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 1985 by the Rossi family, Bella Vista has been serving authentic Italian cuisine to our
              community for over three decades. Our passion for traditional flavors and warm hospitality creates an
              unforgettable dining experience.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Chef Marco Rossi brings recipes from his hometown in Tuscany, using only the finest imported ingredients
              alongside fresh local produce. Every dish tells a story of tradition, family, and love for authentic
              Italian cooking.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{feature.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Chef cooking"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">38+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}