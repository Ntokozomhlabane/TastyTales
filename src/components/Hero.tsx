import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-cooking.jpg";

export const Hero = () => {
  return (
    <section className="relative pt-16 pb-16 px-4 overflow-hidden bg-warm-peach"> 
      <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-bounce-in">
            <div className="inline-block">
             <span className="px-4 py-2 rounded-full text-white font-semibold text-sm shadow-card font-fredoka" 
              style={{ 
              background: "linear-gradient(145deg, hsl(270 70% 60%), hsl(280 65% 65%))"
              }}>
                ✨Learn the Stories of Our Ancestors!
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight font-fredoka">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-fredoka text-4xl md:text-6xl">
                TastyTales
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-fredoka">
              Cook traditional South African dishes, hear amazing stories, and earn badges while learning about your heritage! 🌈
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="xl" className="group font-fredoka rounded-md bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity">
                <Sparkles className="mr-2 h-5 w-5 group-hover:animate-wiggle" />
                Start Cooking!
              </Button>
              
              <Button
              variant="outline"
              size="xl"
              className="relative overflow-hidden group font-fredoka rounded-md border-2 border-secondary 
                        bg-transparent text-secondary transition-all duration-500"
              >
                {/* Gradient overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

                {/* Button content */}
                <span className="relative z-10 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300">Read Stories</span>
                </span>
              </Button>


            </div>
            
            <div className="flex gap-8 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gradient-success flex items-center justify-center shadow-playful" style={{ backgroundColor: '#3DD17D' }}>
                  <Trophy className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-bold text-lg">500+</p>
                  <p className="text-sm text-muted-foreground">Badges Earned</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gradient-card flex items-center justify-center shadow-playful" style={{ backgroundColor: '#AE62E0' }}>
                  <BookOpen className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-lg">20+</p>
                  <p className="text-sm text-muted-foreground">Cultural Stories</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-2xl opacity-30 animate-float" />
            <img
              src={heroImage}
              alt="Children learning about culture through cooking"
              className="relative rounded-3xl shadow-glow w-full animate-bounce-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
