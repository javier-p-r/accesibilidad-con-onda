import { ChevronLeft, ChevronRight, Eye, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface CourseFooterProps {
  currentUnit: number;
  totalUnits?: number;
}

const accessibilityFeatures = [
  "Navegación por teclado completa",
  "Etiquetas ARIA apropiadas",
  "Contraste WCAG AA cumplido",
  "Texto alternativo en imágenes",
  "Estructura semántica HTML5",
  "Enlaces descriptivos",
  "Headings jerárquicos correctos",
  "Texto redimensionable hasta 200%",
  "Focus visible en elementos interactivos",
  "Contenido accesible para lectores de pantalla"
];

export const CourseFooter = ({ currentUnit, totalUnits = 6 }: CourseFooterProps) => {
  const prevUnit = currentUnit > 1 ? currentUnit - 1 : null;
  const nextUnit = currentUnit < totalUnits ? currentUnit + 1 : null;

  return (
    <footer className="bg-course-surface border-t border-course-border mt-12">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation buttons */}
        <nav className="flex justify-between items-center mb-6" aria-label="Navegación entre unidades">
          <div>
            {prevUnit && (
              <Button
                asChild
                variant="outline"
                className="border-course-border hover:bg-course-light"
              >
                <Link 
                  to={`/unidad-${prevUnit}`}
                  aria-label={`Ir a la unidad anterior: Unidad ${prevUnit}`}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Unidad Anterior
                </Link>
              </Button>
            )}
          </div>
          
          <div className="text-center">
            <span className="text-sm font-medium text-course-secondary bg-course-light px-3 py-1 rounded-full">
              Unidad {currentUnit}
            </span>
          </div>
          
          <div>
            {nextUnit && (
              <Button
                asChild
                variant="outline"
                className="border-course-border hover:bg-course-light"
              >
                <Link 
                  to={`/unidad-${nextUnit}`}
                  aria-label={`Ir a la siguiente unidad: Unidad ${nextUnit}`}
                >
                  Siguiente Unidad
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            )}
          </div>
        </nav>

        {/* Footer content */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-course-border">
          <p className="text-sm text-muted-foreground">
            © 2024 <span className="font-medium text-course-primary">Javier Peña Rodríguez</span>
          </p>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm" 
                className="hover:bg-course-light text-course-secondary"
                aria-label="Ver características de accesibilidad de esta página"
              >
                <Eye className="h-4 w-4 mr-2" />
                Accesibilidad
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-popover border-course-border">
              <div className="p-2">
                <h3 className="font-semibold mb-2 text-course-primary">
                  Características de Accesibilidad
                </h3>
                <div className="space-y-1">
                  {accessibilityFeatures.map((feature, index) => (
                    <DropdownMenuItem key={index} className="cursor-default">
                      <Check className="h-3 w-3 mr-2 text-green-600 flex-shrink-0" />
                      <span className="text-xs">{feature}</span>
                    </DropdownMenuItem>
                  ))}
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </footer>
  );
};