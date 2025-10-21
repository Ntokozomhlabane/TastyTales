import { Card } from "@/components/ui/card";
import { Trophy, Lock } from "lucide-react";


interface Badge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  unlocked: boolean;
  category: "food" | "province" | "language";
}

const badges: Badge[] = [
  { id: "1", name: "Pap Master", description: "Cooked perfect pap", emoji: "🥣", unlocked: true, category: "food" },
  { id: "2", name: "Chakalaka Chef", description: "Made spicy chakalaka", emoji: "🌶️", unlocked: false, category: "food" },
  { id: "3", name: "Gauteng Explorer", description: "Learned about Gauteng", emoji: "🏙️", unlocked: true, category: "province" },
  { id: "4", name: "isiZulu Speaker", description: "Completed isiZulu lesson", emoji: "🗣️", unlocked: true, category: "language" },
  { id: "5", name: "KZN Hero", description: "Explored KwaZulu-Natal", emoji: "🌊", unlocked: false, category: "province" },
  { id: "6", name: "Rainbow Chef", description: "Cooked all dishes", emoji: "🌈", unlocked: false, category: "food" },
];

export const BadgeDisplay = () => {
  const unlockedCount = badges.filter(b => b.unlocked).length;

  return (
    <section id="badges" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-fredoka">
            Your{" "}
            <span className="text-[#39D177] font-fredoka ">
              Cultural Badges
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-fredoka">
            You've earned {unlockedCount} out of {badges.length} badges! Keep learning! 🎉
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge) => (
            <Card
              key={badge.id}
              className={`p-6 text-center space-y-4 transition-all ${
                badge.unlocked
                  ? "hover:scale-105 shadow-playful hover:shadow-glow"
                  : "opacity-50 grayscale"
              }`}
            >
              <div className={`text-6xl ${badge.unlocked ? "animate-wiggle" : ""}`}>
                {badge.unlocked ? badge.emoji : <Lock className="h-16 w-16 mx-auto text-muted-foreground" />}
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">{badge.name}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>

              {badge.unlocked && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-success text-accent-foreground text-xs font-semibold">
                  <Trophy className="h-3 w-3" />
                  Unlocked!
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
