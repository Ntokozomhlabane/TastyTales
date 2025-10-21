import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  difficulty: "easy" | "medium" | "hard";
  onClick: () => void;
}

const difficultyStyles = {
  easy: "bg-[#3CD27A] text-white font-[Fredoka] rounded-md",
  medium: "bg-primary text-white font-[Fredoka] rounded-md",
  hard: "bg-destructive text-white font-[Fredoka] rounded-md",
};

export const GameCard = ({ title, description, image, difficulty, onClick }: GameCardProps) => {
  return (
    <Card className="overflow-hidden hover:scale-105 transition-all hover:shadow-glow cursor-pointer group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold ${difficultyStyles[difficulty]}`}
        >
          {difficulty}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-card-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>

        <Button
          onClick={onClick}
          className="w-full group-hover:animate-pop"
          variant="default"
        >
          <Play className="mr-2 h-4 w-4" />
          Play Game
        </Button>
      </div>
    </Card>
  );
};
