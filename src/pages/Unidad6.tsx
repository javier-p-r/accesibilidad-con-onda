import { CourseHeader } from "@/components/CourseHeader";
import { CourseFooter } from "@/components/CourseFooter";
import { ExternalLink } from "lucide-react";

const Unidad6 = () => {
  return (
    <div className="min-h-screen bg-background">
      <CourseHeader unitTitle="Unidad 6: Buenas Prácticas y Recursos Adicionales" />
      
      <main id="main-content" className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <p className="text-lg mb-8 text-muted-foreground">
            Para asegurar la accesibilidad de un documento, no solo es importante seguir los pasos técnicos, sino también adoptar buenas prácticas en el proceso de maquetación y conocer los recursos disponibles que pueden facilitar y optimizar el trabajo.
          </p>

          <section aria-labelledby="buenas-practicas">
            <h2 id="buenas-practicas" className="text-2xl font-bold text-course-primary mb-4">
              Buenas Prácticas de Maquetación
            </h2>
            <p className="mb-4">
              La forma en que se resuelve un problema de diseño puede tener un gran impacto en la accesibilidad del documento. Es crucial utilizar las herramientas adecuadas en InDesign para evitar problemas en la exportación y la interpretación por parte de los lectores de pantalla.
            </p>

            <ul className="space-y-4 mb-8">
              <li>
                <div>
                  <h3 className="text-lg font-semibold text-course-secondary mb-2">Uso de Herramientas Adecuadas</h3>
                  <p>Existen diferentes métodos para resolver un problema o diseñar un elemento. Por ejemplo, para alinear tres imágenes, es preferible utilizar la herramienta "Alinear" en lugar de una tabla sin bordes de tres columnas. Visualmente, el resultado podría ser similar, pero al exportar a PDF, el validador detectaría la etiqueta de tabla y demandaría un encabezado, además de que el lector de pantalla lo anunciaría como una tabla.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3 className="text-lg font-semibold text-course-secondary mb-2">Cuidado con Caracteres Especiales</h3>
                  <p>Los caracteres especiales, como el <strong>salto de línea forzado</strong>, pueden ser útiles para la maquetación, pero hay que ser cuidadosos. Estos caracteres también cuentan dentro de la estructura y, por ejemplo, los saltos de línea forzados se interpretan como pausas por los lectores de pantalla.</p>
                </div>
              </li>
            </ul>
          </section>

          <section aria-labelledby="recursos-adicionales">
            <h2 id="recursos-adicionales" className="text-2xl font-bold text-course-primary mb-4">
              Recursos Adicionales
            </h2>
            <p className="mb-6 text-muted-foreground">
              Existen diversas herramientas y tutoriales que pueden apoyar el proceso de creación de documentos accesibles en InDesign.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-course-secondary mb-4">Herramientas</h3>
                <div className="grid gap-4">
                  <div className="bg-course-surface p-4 rounded-lg border border-course-border">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Adobe Color Contrast Analyzer
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Herramienta web para verificar el contraste de colores</p>
                    <a 
                      href="https://color.adobe.com/es/create/color-contrast-analyzer" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-course-secondary hover:text-course-primary text-sm font-medium"
                      aria-label="Abrir Adobe Color Contrast Analyzer en nueva ventana"
                    >
                      color.adobe.com/es/create/color-contrast-analyzer
                    </a>
                  </div>

                  <div className="bg-course-surface p-4 rounded-lg border border-course-border">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Contrast Colour Analyser
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Software para análisis de contraste de colores</p>
                    <a 
                      href="https://www.tpgi.com/color-contrast-checker/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-course-secondary hover:text-course-primary text-sm font-medium"
                      aria-label="Abrir TPG Color Contrast Checker en nueva ventana"
                    >
                      tpgi.com/color-contrast-checker/
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-course-secondary mb-4">Tutoriales</h3>
                <div className="grid gap-4">
                  <div className="bg-course-surface p-4 rounded-lg border border-course-border">
                    <h4 className="font-semibold mb-2">Creating Accessible PDF Files Using Adobe InDesign</h4>
                    <p className="text-sm text-muted-foreground mb-2">Chad Chelius (en inglés)</p>
                    <a 
                      href="https://www.youtube.com/watch?v=j5CND3bbuSI" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-course-secondary hover:text-course-primary text-sm font-medium inline-flex items-center gap-2"
                      aria-label="Ver tutorial de Chad Chelius en YouTube"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Ver en YouTube
                    </a>
                  </div>

                  <div className="bg-course-surface p-4 rounded-lg border border-course-border">
                    <h4 className="font-semibold mb-2">PDF accesible. PDF correctamente etiquetado desde InDesign</h4>
                    <p className="text-sm text-muted-foreground mb-2">Tutorial en español</p>
                    <a 
                      href="https://www.youtube.com/watch?v=SEzoqrAA0_Y" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-course-secondary hover:text-course-primary text-sm font-medium inline-flex items-center gap-2"
                      aria-label="Ver tutorial de PDF accesible en YouTube"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Ver en YouTube
                    </a>
                  </div>

                  <div className="bg-course-surface p-4 rounded-lg border border-course-border">
                    <h4 className="font-semibold mb-2">10 Steps to Accessible PDF</h4>
                    <p className="text-sm text-muted-foreground mb-2">An Excerpt from InDesign Magazine (en inglés)</p>
                    <a 
                      href="https://techaccessok.org/wp-content/uploads/2022/04/10_Steps_to_Accessible_PDF_Final.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-course-secondary hover:text-course-primary text-sm font-medium inline-flex items-center gap-2"
                      aria-label="Descargar guía de 10 pasos para PDF accesible"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Descargar PDF
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-course-secondary mb-4">Otros Recursos</h3>
                <div className="grid gap-4">
                  <div className="bg-course-surface p-4 rounded-lg border border-course-border">
                    <h4 className="font-semibold mb-2">Listado completo de etiquetas PDF accesible</h4>
                    <p className="text-sm text-muted-foreground mb-2">Cheatsheet de etiquetas estándar</p>
                    <a 
                      href="https://www.usableyaccesible.com/archivos/AA_Cheatsheet_Etiquetas_Estandar_PDF_accesible.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-course-secondary hover:text-course-primary text-sm font-medium inline-flex items-center gap-2"
                      aria-label="Descargar cheatsheet de etiquetas PDF"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Descargar PDF
                    </a>
                  </div>

                  <div className="bg-course-surface p-4 rounded-lg border border-course-border">
                    <h4 className="font-semibold mb-2">Accesibilidad Web. WCAG 2.2 de forma sencilla</h4>
                    <p className="text-sm text-muted-foreground mb-2">Revilla Carreras (2024)</p>
                    <a 
                      href="https://www.usableyaccesible.com/archivos/Accesibilidad_Web_WCAG_2_2_2024_Revilla_Carreras_protegido.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-course-secondary hover:text-course-primary text-sm font-medium inline-flex items-center gap-2"
                      aria-label="Descargar guía de WCAG 2.2"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Descargar PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-course-light border-l-4 border-course-secondary p-6 mt-8 rounded-r-lg">
            <p className="text-course-primary font-medium mb-0">
              <strong>Reflexión final:</strong> Adoptar buenas prácticas y conocer los recursos adicionales en accesibilidad es como ser un artesano experimentado con las herramientas adecuadas y un buen manual de instrucciones. No solo se trata de saber qué hacer, sino de cómo hacerlo correctamente y qué ayudas tienes a tu disposición. Utilizar la herramienta correcta para cada tarea es como elegir el cincel perfecto para un detalle delicado, y los recursos son como tener una biblioteca llena de técnicas y ejemplos para perfeccionar tu arte, asegurando que tu obra final sea accesible y disfrutable para todos.
            </p>
          </div>
        </article>
      </main>

      <CourseFooter currentUnit={6} />
    </div>
  );
};

export default Unidad6;