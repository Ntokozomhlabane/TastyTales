import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Trophy, RotateCcw } from "lucide-react";
import { toast } from "sonner";

interface Ingredient {
  id: string;
  name: string;
  emoji: string;
  required: boolean;
}

const ingredients: Ingredient[] = [
  { id: "1", name: "Maize Meal", emoji: "🌽", required: true },
  { id: "2", name: "Water", emoji: "💧", required: true },
  { id: "3", name: "Salt", emoji: "🧂", required: true },
  { id: "4", name: "Tomato", emoji: "🍅", required: false },
  { id: "5", name: "Onion", emoji: "🧅", required: false },
  { id: "6", name: "Pepper", emoji: "🌶️", required: false },
];

interface CookingGameProps {
  onClose: () => void;
}

export const CookingGame = ({ onClose }: CookingGameProps) => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleIngredientClick = (id: string) => {
    const ingredient = ingredients.find(i => i.id === id);
    if (!ingredient) return;

    // Disallow adding non-required ingredients
    if (!ingredient.required) {
      toast.error("No — try again.");
      return;
    }

    // Allow toggle only for required ingredients
    if (selectedIngredients.includes(id)) {
      setSelectedIngredients(selectedIngredients.filter(i => i !== id));
    } else {
      setSelectedIngredients([...selectedIngredients, id]);
    }
  };

  const handleCook = () => {
    const requiredIngredients = ingredients.filter(i => i.required);
    const hasAllRequired = requiredIngredients.every(i => 
      selectedIngredients.includes(i.id)
    );

    if (hasAllRequired) {
      setIsComplete(true);
      toast.success("Perfect Pap! You've earned a Cultural Badge! 🏆");
    } else {
      toast.error("Missing some ingredients! Try again! 🥣");
    }
  };

  const handleReset = () => {
    setSelectedIngredients([]);
    setIsComplete(false);
  };

  return (
    <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Make Traditional Pap! 🥣
              </h2>
              <p className="text-muted-foreground mt-2">
                Click the right ingredients to make delicious pap
              </p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Available Ingredients</h3>
              <div className="grid grid-cols-3 gap-3">
                {ingredients.map((ingredient) => (
                  <button
                    key={ingredient.id}
                    onClick={() => handleIngredientClick(ingredient.id)}
                    className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                      selectedIngredients.includes(ingredient.id)
                        ? "border-primary bg-primary/10 scale-95"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    <div className="text-4xl mb-2">{ingredient.emoji}</div>
                    <div className="text-xs font-medium">{ingredient.name}</div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                * Required ingredients are marked in the recipe
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Your Pot 🍲</h3>
              <div className="min-h-[200px] p-6 rounded-xl border-2 border-dashed border-primary bg-gradient-hero/5 flex flex-wrap gap-2 items-start content-start">
                {selectedIngredients.length === 0 ? (
                  <p className="text-muted-foreground text-sm w-full text-center mt-16">
                    Add ingredients here...
                  </p>
                ) : (
                  selectedIngredients.map((id) => {
                    const ingredient = ingredients.find(i => i.id === id);
                    return (
                      <div
                        key={id}
                        className="text-3xl animate-bounce-in"
                      >
                        {ingredient?.emoji}
                      </div>
                    );
                  })
                )}
              </div>

              {isComplete ? (
                <div className="p-6 rounded-xl bg-gradient-success text-accent-foreground text-center space-y-4 animate-bounce-in">
                  <Trophy className="h-16 w-16 mx-auto animate-wiggle" />
                  <h4 className="text-2xl font-bold">You Did It!</h4>
                  <p>You've learned how to make traditional Pap!</p>
                  <Button variant="secondary" onClick={handleReset} className="w-full">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Try Again
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleCook}
                  disabled={selectedIngredients.length === 0}
                  className="w-full"
                  variant="hero"
                >
                  Cook Pap! 🔥
                </Button>
              )}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-muted space-y-2">
            <h4 className="font-semibold">Cultural Story:</h4>
            <p className="text-sm text-muted-foreground">
              Pap is a traditional South African staple food made from maize meal. It's been eaten for generations 
              and brings families together at mealtimes. Different regions have their own special ways of making it!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
