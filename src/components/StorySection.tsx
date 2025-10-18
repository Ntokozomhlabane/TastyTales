import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import storyBg from "@/assets/story-background.jpg";


const stories = [
  {
    id: "1",
    title: "The Legend of Pap",
    preview: "Long ago, in the heart of South Africa, maize was brought to the land...",
    food: "Pap",
    emoji: "🌽",
  },
  {
    id: "2",
    title: "Chakalaka's Spicy Tale",
    preview: "In the townships, a delicious vegetable relish was created...",
    food: "Chakalaka",
    emoji: "🌶️",
  },
  {
    id: "3",
    title: "The Rainbow Feast",
    preview: "A story about how different cultures share food and stories...",
    food: "Mixed Dishes",
    emoji: "🌈",
  },
];

export const StorySection = () => {
  return (
    <section id="stories" className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={storyBg} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-card bg-clip-text text-transparent">
              Cultural Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Every dish tells a story! Learn about South African heritage through food 📖
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card key={story.id} className="overflow-hidden hover:shadow-glow transition-all group">
              <div className="h-48 bg-gradient-card flex items-center justify-center">
                <span className="text-8xl group-hover:animate-float">{story.emoji}</span>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    {story.food}
                  </p>
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {story.preview}
                  </p>
                </div>
                
                <Button variant="secondary" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Story
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
