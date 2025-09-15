import { CourseHeader } from "@/components/CourseHeader";
import { CourseFooter } from "@/components/CourseFooter";

const Unidad4 = () => {
  return (
    <div className="min-h-screen bg-background">
      <CourseHeader unitTitle="Unidad 4: Navegación y Estructura de Documentos Accesibles y más" />
      
      <main id="main-content" className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <p className="text-lg mb-8 text-muted-foreground">
            La navegación y estructura son componentes fundamentales para la accesibilidad de un documento, ya que permiten a los usuarios, especialmente a aquellos que utilizan tecnologías de asistencia como los lectores de pantalla, moverse eficientemente por el contenido sin depender únicamente de la paginación.
          </p>

          <section aria-labelledby="indice-toc-marcadores">
            <h2 id="indice-toc-marcadores" className="text-2xl font-bold text-course-primary mb-4">
              Índice, TOC y Marcadores
            </h2>
            <p className="mb-4">
              El índice es una de las secciones más importantes en un proyecto accesible, ya que establece la jerarquía interna que facilita la navegación dentro del documento mediante hipervínculos o comandos.
            </p>

            <ul className="space-y-4 mb-8">
              <li>
                <div>
                  <h3 className="text-lg font-semibold text-course-secondary mb-2">Creación Automática</h3>
                  <p>Es vital crear el índice de forma <strong>automática</strong> a través del menú <code className="bg-muted px-2 py-1 rounded">Maquetación &gt; Tabla de contenido</code>, y no manualmente. Un índice creado a mano carece de la programación necesaria para la accesibilidad, aunque pueda parecer funcional.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3 className="text-lg font-semibold text-course-secondary mb-2">Configuración Esencial</h3>
                  <p className="mb-2">Al configurar la "Tabla de contenido", es imprescindible acceder a "Más opciones" y marcar como mínimo las siguientes casillas en la sección "Opciones" antes de aceptar:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>"Crear marcadores PDF"</strong></li>
                    <li><strong>"Crear anclaje de texto en párrafo de origen"</strong></li>
                    <li><strong>"Insertar"</strong></li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h3 className="text-lg font-semibold text-course-secondary mb-2">Tabla de Contenidos (TOC)</h3>
                  <p>Al realizar la configuración anterior, el documento contará con una TOC (Table Of Contents), que es el "índice interno" que los dispositivos y tecnologías de asistencia buscan para definir los contenidos del documento.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3 className="text-lg font-semibold text-course-secondary mb-2">Marcadores</h3>
                  <p>Son la representación visual de esta jerarquía interna. Se disponen en forma de "árbol" y permiten una navegación cómoda por el documento. En InDesign, se pueden ver y editar a través de <code className="bg-muted px-2 py-1 rounded">Ventana &gt; Interactivo &gt; Marcadores</code>.</p>
                </div>
              </li>
            </ul>
          </section>

          <section aria-labelledby="hipervinculos">
            <h2 id="hipervinculos" className="text-2xl font-bold text-course-primary mb-4">
              Hipervínculos
            </h2>
            <p className="mb-4">
              Todos los enlaces y URL presentes en el documento deben estar correctamente identificados y etiquetados para el PDF, pero también necesitan un texto alternativo para ser accesibles.
            </p>

            <ul className="space-y-4 mb-8">
              <li>
                <div>
                  <h3 className="text-lg font-semibold text-course-secondary mb-2">Etiquetado Correcto</h3>
                  <p>Es fundamental que todos los enlaces estén <strong>marcados como tal</strong> para que estén correctamente etiquetados dentro del PDF, ya que de lo contrario se interpretarán como texto.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3 className="text-lg font-semibold text-course-secondary mb-2">Texto Alternativo</h3>
                  <p>Es necesario <strong>aportar un texto alternativo</strong> para cada hipervínculo. Esto evita que el lector de pantalla lea literalmente la URL o el enlace en sí, proporcionando un contexto más comprensible para el usuario.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3 className="text-lg font-semibold text-course-secondary mb-2">Creación y Modificación</h3>
                  <p>Para crear o modificar un hipervínculo y añadirle un texto alternativo, se debe ir a <code className="bg-muted px-2 py-1 rounded">Texto &gt; Hipervínculos y referencias cruzadas</code> y acceder a la pestaña <strong>"Accesibilidad"</strong>, donde se encuentra la opción para incluir dicho texto.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3 className="text-lg font-semibold text-course-secondary mb-2">Panel de Hipervínculos</h3>
                  <p>Para una gestión más cómoda, el panel de hipervínculos (accesible desde <code className="bg-muted px-2 py-1 rounded">Ventana &gt; Interactivo &gt; Hipervínculos</code>) permite ver y modificar fácilmente todos los enlaces de un documento.</p>
                </div>
              </li>
            </ul>
          </section>

          <div className="bg-course-light border-l-4 border-course-secondary p-6 mt-8 rounded-r-lg">
            <p className="text-course-primary font-medium mb-0">
              <strong>Resumen:</strong> Una buena "Navegación y Estructura" en un documento accesible es como un mapa de carreteras bien diseñado para un viaje: el índice y los marcadores actúan como los hitos y las señales que guían al usuario, mientras que los hipervínculos son los desvíos y atajos que permiten llegar directamente a destinos específicos, todos ellos con descripciones claras para que nadie se pierda en el camino.
            </p>
          </div>
        </article>
      </main>

      <CourseFooter currentUnit={4} />
    </div>
  );
};

export default Unidad4;
