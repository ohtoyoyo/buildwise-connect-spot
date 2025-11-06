import { Building2, Users, Award, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Expert Craftsmanship",
      description: "Quality construction with attention to every detail"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Skilled professionals with 25+ years of experience"
    },
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Fully certified and covered for your peace of mind"
    },
    {
      icon: Wrench,
      title: "Full Service",
      description: "From planning to completion, we handle everything"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About BuildPro</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a leading construction company dedicated to delivering exceptional results. 
            With over two decades of experience, we've built a reputation for quality, reliability, 
            and customer satisfaction. From residential homes to commercial buildings, we bring your 
            vision to life with professionalism and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">250+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Team Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
