import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { GameCard } from "@/components/GameCard";
import { CookingGame } from "@/components/CookingGame";
import { StorySection } from "@/components/StorySection";
import { BadgeDisplay } from "@/components/BadgeDisplay";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import papIcon from "@/assets/pap-icon.jpg";
import chakalakaIcon from "@/assets/chakalaka-icon.jpg";

const Index = () => {
  const [showCookingGame, setShowCookingGame] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 bg-red-500 text-white text-center">
        DEBUG: App is loading - if you see this, React is working!
      </div>
      <Header />
      <Hero />
      
      {/* Games Section */}
      <section id="games" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Play & Learn 🎮
            </h2>
            <p className="text-xl text-muted-foreground">
              Cook traditional dishes and discover their stories!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GameCard
              title="Make Pap!"
              description="Learn to cook South Africa's favorite staple dish with the perfect ingredients."
              image={papIcon}
              difficulty="easy"
              onClick={() => setShowCookingGame(true)}
            />
            
            <GameCard
              title="Chakalaka Challenge"
              description="Mix vegetables and spices to create this delicious spicy relish."
              image={chakalakaIcon}
              difficulty="medium"
              onClick={() => {}}
            />
            
            <div className="relative">
              <GameCard
                title="Rainbow Feast"
                description="Cook dishes from all 9 provinces and learn about each region!"
                image={papIcon}
                difficulty="hard"
                onClick={() => {}}
              />
              <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                  Coming Soon! 🎉
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StorySection />
      <BadgeDisplay />

      {/* Classroom Mode Section */}
      <section id="classroom" className="py-16 px-4 bg-gradient-card">
        <div className="container mx-auto text-center space-y-8">
          <div className="inline-block p-4 bg-card/80 rounded-full">
            <GraduationCap className="h-16 w-16 text-secondary" />
          </div>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
              Classroom Mode
            </h2>
            <p className="text-xl text-secondary-foreground/80">
              Teachers! Use Yamiko to teach heritage, history, and nutrition in an engaging way.
              Track student progress and make learning fun!
            </p>
          </div>
          
          <Button variant="secondary" size="xl" className="shadow-playful">
            Learn More About Classroom Mode
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t">
        <div className="container mx-auto text-center space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-rainbow bg-clip-text text-transparent">
            Yamiko
          </h3>
          <p className="text-sm text-muted-foreground">
            Learning culture through food, one dish at a time 🌈
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 TastyTales Education. Teaching South African heritage with love.
          </p>
        </div>
      </footer>

      {showCookingGame && (
        <CookingGame onClose={() => setShowCookingGame(false)} />
      )}
    </div>
  );
};

export default Index;
