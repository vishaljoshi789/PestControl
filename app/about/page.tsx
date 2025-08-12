import Image from "next/image";
import { Users, Award, Shield, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safety First",
      description:
        "We prioritize the safety of your family, pets, and environment in every treatment we provide.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Precision & Effectiveness",
      description:
        "Our targeted approach ensures maximum effectiveness while minimizing environmental impact.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Focused",
      description:
        "Your satisfaction is our priority. We work closely with you to solve your pest problems.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description:
        "We maintain the highest standards of service quality and professional expertise.",
    },
  ];

  const team = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      experience: "15+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      experience: "12+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mike Chen",
      role: "Senior Technician",
      experience: "10+ years",
      image: "/pest-control-technician.png",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="font-poppins font-bold text-5xl text-gray-900 mb-6">
                About Us
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover the story behind Northwala and our commitment to
                excellence in pest control.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-poppins font-bold text-3xl text-primary mb-2">
                    10+
                  </h3>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-3xl text-primary mb-2">
                    5000+
                  </h3>
                  <p className="text-gray-600">Satisfied Customers</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <Image
                src="/northwala-logo.png?height=500&width=600"
                alt="Northwala Team"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-8">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2014, Northwala began as a small family business with a
              simple mission: to provide effective, safe, and reliable pest
              control services to our community. What started as a local
              operation has grown into a trusted name in pest management,
              serving thousands of residential and commercial clients.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to innovation, customer service, and environmental
              responsibility has driven our growth and success. We continuously
              invest in the latest technology and training to ensure we deliver
              the most effective solutions while maintaining our core values of
              safety and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">What we stand for</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center animate-scale-in border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experts behind Northwala
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center animate-fade-in border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600">
                      {member.experience} Experience
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h2 className="font-poppins font-bold text-4xl mb-8">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed">
              To provide safe, effective, and environmentally responsible pest
              control solutions that protect homes, businesses, and communities
              while exceeding customer expectations through professional
              service, innovative techniques, and unwavering commitment to
              quality.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
