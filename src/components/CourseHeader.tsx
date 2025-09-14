import { ArrowLeft, Menu, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface CourseHeaderProps {
  unitTitle: string;
  showBackButton?: boolean;
}

const units = [
  { id: 1, title: "Antes de empezar a maquetar", path: "/unidad-1" },
  { id: 2, title: "Primeros pasos en InDesign", path: "/unidad-2" },
  { id: 3, title: "Proceso de Maquetación", path: "/unidad-3" },
  { id: 4, title: "Navegación y Estructura", path: "/unidad-4" },
  { id: 5, title: "Orden de Lectura y Exportación", path: "/unidad-5" },
  { id: 6, title: "Buenas Prácticas y Recursos", path: "/unidad-6" },
];

export const CourseHeader = ({ unitTitle, showBackButton = true }: CourseHeaderProps) => {
  return (
    <header className="bg-course-surface border-b border-course-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="hover:bg-course-light"
                aria-label="Volver al inicio"
              >
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Inicio
                </Link>
              </Button>
            )}
            <h1 className="text-xl font-semibold text-course-primary">
              {unitTitle}
            </h1>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline" 
                size="sm"
                className="border-course-border hover:bg-course-light"
                aria-label="Menú de navegación"
              >
                <Menu className="h-4 w-4 mr-2" />
                Navegación
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-popover border-course-border">
              <DropdownMenuItem asChild>
                <Link 
                  to="/" 
                  className="flex items-center gap-2 cursor-pointer"
                  aria-label="Ir a la página principal"
                >
                  <Book className="h-4 w-4" />
                  Página Principal
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {units.map((unit) => (
                <DropdownMenuItem key={unit.id} asChild>
                  <Link 
                    to={unit.path} 
                    className="cursor-pointer"
                    aria-label={`Ir a unidad ${unit.id}: ${unit.title}`}
                  >
                    <span className="font-medium text-course-secondary mr-2">
                      {unit.id}.
                    </span>
                    {unit.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};