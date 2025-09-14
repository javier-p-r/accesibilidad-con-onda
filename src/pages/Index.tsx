import { Book, Users, Target, FileText, Download, Settings, Eye, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const units = [
  {
    id: 1,
    title: "Antes de empezar a maquetar",
    description: "Fundamentos de accesibilidad, color, contraste, tipografía y preparación previa al diseño.",
    icon: Target,
    path: "/unidad-1"
  },
  {
    id: 2, 
    title: "Primeros pasos en InDesign",
    description: "Configuración inicial, metadatos, páginas maestras y creación de estilos de párrafo.",
    icon: Settings,
    path: "/unidad-2"
  },
  {
    id: 3,
    title: "Proceso de Maquetación", 
    description: "Maquetación de texto, material gráfico, tablas e hipervínculos accesibles.",
    icon: FileText,
    path: "/unidad-3"
  },
  {
    id: 4,
    title: "Navegación y Estructura",
    description: "Creación de índices, TOC, marcadores e hipervínculos para navegación accesible.",
    icon: Book,
    path: "/unidad-4"
  },
  {
    id: 5,
    title: "Orden de Lectura y Exportación",
    description: "Control del orden de lectura y exportación correcta a PDF accesible.",
    icon: Download,
    path: "/unidad-5"
  },
  {
    id: 6,
    title: "Buenas Prácticas y Recursos",
    description: "Recomendaciones adicionales, herramientas útiles y recursos para profundizar.",
    icon: Users,
    path: "/unidad-6"
  }
];

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-course-primary to-course-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Curso de Accesibilidad en Adobe InDesign
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Aprende a crear documentos accesibles desde la concepción hasta la exportación final a PDF
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-course-primary hover:bg-gray-100"
            >
              <Link to="/unidad-1" aria-label="Comenzar con la primera unidad del curso">
                Comenzar Curso
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="container mx-auto px-4 py-12">
        <section aria-labelledby="course-units">
          <h2 id="course-units" className="text-3xl font-bold text-center mb-4 text-course-primary">
            Unidades del Curso
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Este curso te guiará paso a paso en la creación de documentos completamente accesibles 
            usando Adobe InDesign, siguiendo las mejores prácticas y estándares WCAG.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.map((unit) => {
              const IconComponent = unit.icon;
              return (
                <Card 
                  key={unit.id} 
                  className="hover:shadow-lg transition-all duration-300 border-course-border hover:border-course-secondary group"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-course-light rounded-full flex items-center justify-center mb-4 group-hover:bg-course-secondary group-hover:text-white transition-colors">
                      <IconComponent className="h-8 w-8 text-course-secondary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2 text-course-primary">
                      <span className="font-bold text-course-secondary mr-2">
                        {unit.id}.
                      </span>
                      {unit.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {unit.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      asChild 
                      className="w-full bg-course-primary hover:bg-course-secondary"
                      aria-label={`Acceder a la unidad ${unit.id}: ${unit.title}`}
                    >
                      <Link to={unit.path}>
                        Acceder a Unidad
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Course Information */}
        <section className="mt-16 bg-course-surface rounded-lg p-8 border border-course-border" aria-labelledby="course-info">
          <h2 id="course-info" className="text-2xl font-bold mb-6 text-course-primary">
            Información del Curso
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-course-secondary">
                Objetivos de Aprendizaje
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dominar los principios de accesibilidad en documentos PDF</li>
                <li>• Aplicar estándares WCAG en Adobe InDesign</li>
                <li>• Crear estructuras de navegación accesibles</li>
                <li>• Optimizar el orden de lectura para lectores de pantalla</li>
                <li>• Exportar PDFs completamente accesibles</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-course-secondary">
                Características del Curso
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 6 unidades temáticas completas</li>
                <li>• Ejemplos prácticos y casos reales</li>
                <li>• Navegación totalmente accesible</li>
                <li>• Recursos adicionales y herramientas</li>
                <li>• Cumple estándares WCAG AA</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-course-surface border-t border-course-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
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
    </div>
  );
};

export default Index;