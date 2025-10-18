import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "zu", name: "isiZulu", flag: "🇿🇦" },
  { code: "af", name: "Afrikaans", flag: "🇿🇦" },
  { code: "xh", name: "isiXhosa", flag: "🇿🇦" },
];

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-card/80 backdrop-blur-md shadow-card z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold font-fredoka bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            TastyTales
          </h1>
          <span className="text-2xl animate-bounce">🥣</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#games" className="text-foreground hover:text-primary transition-colors font-medium">
            Games
          </a>
          <a href="#stories" className="text-foreground hover:text-primary transition-colors font-medium">
            Stories
          </a>
          <a href="#badges" className="text-foreground hover:text-primary transition-colors font-medium">
            Badges
          </a>
          <a href="#classroom" className="text-foreground hover:text-primary transition-colors font-medium">
            Classroom
          </a>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Globe className="h-4 w-4" />
              Language
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-card z-[100]">
            {languages.map((lang) => (
              <DropdownMenuItem key={lang.code} className="cursor-pointer">
                <span className="mr-2">{lang.flag}</span>
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};
