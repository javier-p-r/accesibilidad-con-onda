import { CourseHeader } from "@/components/CourseHeader";
import { CourseFooter } from "@/components/CourseFooter";

const Unidad3 = () => {
  return (
    <div className="min-h-screen bg-background">
      <CourseHeader unitTitle="Unidad 3: Proceso de Maquetación" />
      
      <main id="main-content" className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <div className="bg-course-light border-l-4 border-course-secondary p-6 mb-8 rounded-r-lg">
            <p className="text-course-primary font-medium mb-0">
              Una vez configurados los parámetros iniciales en InDesign, el proceso de maquetación requiere aplicar consideraciones específicas para el texto, el material gráfico, las tablas, la navegación (índices, TOC y marcadores), los hipervínculos y el orden de lectura. Esto es crucial para asegurar que el contenido sea comprensible y navegable para todos los usuarios.
            </p>
          </div>

          <section aria-labelledby="texto">
            <h2 id="texto" className="text-2xl font-bold text-course-primary mb-4">
              Texto
            </h2>
            <p className="mb-4">
              La maquetación de texto en un proyecto accesible solo requiere tres elementos clave, además de las consideraciones previas sobre composición (párrafos a bandera, tipografías legibles, etc.):
            </p>
            <ul className="space-y-2 mb-8">
              <li><strong>Revisar que el idioma esté incluido</strong> correctamente.</li>
              <li><strong>Definir la etiqueta de exportación</strong> que le corresponde a cada estilo de párrafo.</li>
              <li><strong>Respetar la jerarquía</strong>: Un título "H2" puede contener un "H3", pero nunca al revés. Si se incumple, el documento fallará en la validación de accesibilidad.</li>
            </ul>
          </section>

          <section aria-labelledby="material-grafico">
            <h2 id="material-grafico" className="text-2xl font-bold text-course-primary mb-4">
              Material Gráfico (Imágenes, Ilustraciones y Gráficos)
            </h2>
            <p className="mb-4">Existen consideraciones generales importantes para todo el material gráfico:</p>
            <ul className="space-y-4 mb-8">
              <li>Se deben <strong>evitar siempre los cuadros flotantes</strong>. Es deseable que todo el material gráfico esté incluido dentro del flujo del texto y no como un elemento independiente.</li>
              <li>Son preferibles los <strong>formatos basados en mapas de bits antes que vectoriales</strong>, ya que el lector de pantalla puede interpretar y leer las fuentes de estos últimos.</li>
              <li>Una <strong>mala maquetación puede hacer inaccesible un material que en sí mismo era accesible</strong>.</li>
            </ul>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-course-secondary mb-3">Imágenes e Ilustraciones</h3>
                <ul className="space-y-3">
                  <li>Lo esencial es <strong>discernir cuáles aportan información relevante y cuáles son decorativas</strong>.</li>
                  <li>
                    Si son relevantes, se debe aportar un <strong>texto alternativo</strong> para que el lector de pantalla pueda leerlo. En InDesign, esto se hace seleccionando la imagen, haciendo clic derecho, y yendo a "Opciones de exportación de objetos" y, dentro de la pestaña "Texto alternativo", desplegando el menú "Origen del texto alternativo".
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Si el material no se ha tratado previamente para accesibilidad, se puede incluir el texto alternativo seleccionando la opción <strong>"A medida"</strong>.</li>
                      <li>Si el material ya ha sido tratado para accesibilidad, se pueden <strong>importar los metadatos</strong> seleccionando la fuente deseada (por ejemplo, "XMP: descripción" para importar el campo de descripción).</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-course-secondary mb-3">Gráficos</h3>
                <p className="mb-3">Los gráficos merecen una mención especial, ya que su accesibilidad debe considerarse desde su diseño:</p>
                <ul className="space-y-2">
                  <li>No deben depender <strong>únicamente del color para transmitir la información</strong>. Se pueden usar técnicas de diseño como patrones para distinguir la información.</li>
                  <li>Es muy importante <strong>vigilar la relación de proporciones</strong> al implementar un gráfico, ya que agrandarlo o disminuirlo puede cambiar el tamaño de la fuente.</li>
                  <li>Es necesario que la <strong>leyenda sea visible y específica</strong>.</li>
                  <li>Si el gráfico no queda claro para el lector de pantalla, se puede <strong>incorporar un párrafo bajo el gráfico</strong> que explique la idea que quiere transmitir.</li>
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="tablas">
            <h2 id="tablas" className="text-2xl font-bold text-course-primary mb-4">
              Tablas
            </h2>
            <p className="mb-4">La maquetación de tablas accesibles sigue el mismo proceso que una tabla normal, pero con dos requisitos esenciales:</p>
            <ul className="space-y-4 mb-8">
              <li>Toda tabla debe crearse con la <strong>herramienta "Tabla"</strong>.</li>
              <li>Es imprescindible que todas las tablas tengan <strong>celdas de encabezado</strong>. Estas medidas permiten al lector de pantalla interpretar correctamente la tabla y cómo leerla.</li>
              <li>En cuanto al diseño, es necesario mantener una <strong>regularidad en las tablas</strong> para que sean identificables.</li>
              <li>Las tablas admiten la inclusión de un <strong>resumen (en Adobe Acrobat) que funciona como texto alternativo</strong>. Esto es útil para todas las tablas, pero especialmente recomendado para tablas muy extensas o complicadas.</li>
            </ul>
          </section>

          <section aria-labelledby="indice-toc">
            <h2 id="indice-toc" className="text-2xl font-bold text-course-primary mb-4">
              Índice, TOC y Marcadores
            </h2>
            <p className="mb-4">
              El índice es una de las secciones más importantes, ya que establece la jerarquía interna que permite la navegación dentro del documento mediante hipervínculos o comandos, fundamental para no depender de la paginación.
            </p>
            <ul className="space-y-4 mb-8">
              <li>Es vital <strong>crear el índice de forma automática</strong> (Maquetación &gt; Tabla de contenido) y no manual, ya que un índice hecho a mano carece de esta programación.</li>
              <li>En el menú de "Tabla de contenido", hay que asegurarse de pinchar en <strong>"Más opciones"</strong> y, tras configurar el índice con los párrafos y estilos, en la sección "Opciones" hay que marcar como mínimo <strong>"Crear marcadores PDF"</strong>, <strong>"Crear anclaje de texto en párrafo de origen"</strong> e <strong>"Insertar"</strong> antes de aceptar.</li>
              <li>Con esto, el documento contará con una <strong>TOC (Table Of Contents)</strong>, que es el "índice interno" que buscan los dispositivos y tecnologías para definir los contenidos.</li>
              <li>Los <strong>"marcadores"</strong> son la representación visual de esta jerarquía interna, dispuestos en forma de "árbol" y que permiten navegar cómodamente por el documento. Se pueden ver y editar en Ventana &gt; Interactivo &gt; Marcadores.</li>
            </ul>
          </section>

          <section aria-labelledby="hipervinculos">
            <h2 id="hipervinculos" className="text-2xl font-bold text-course-primary mb-4">
              Hipervínculos
            </h2>
            <ul className="space-y-4 mb-8">
              <li>Todos los enlaces y URL del documento deben estar <strong>marcados como tal</strong> para que estén correctamente etiquetados en el PDF.</li>
              <li>Es necesario aportar un <strong>texto alternativo</strong> para que el lector de pantalla no lea literalmente la URL o el enlace.</li>
              <li>Para ello, se crea o modifica el hipervínculo (Texto &gt; Hipervínculos y referencias cruzadas) y se accede a la pestaña <strong>"Accesibilidad"</strong>, donde se incluye el texto alternativo.</li>
              <li>El panel de hipervínculos (Ventana &gt; Interactivo &gt; Hipervínculos) permite ver y modificar fácilmente todos los hipervínculos de un documento.</li>
            </ul>
          </section>

          <section aria-labelledby="orden-lectura">
            <h2 id="orden-lectura" className="text-2xl font-bold text-course-primary mb-4">
              Orden de Lectura y Panel "Artículos"
            </h2>
            <p className="mb-4">
              El orden en que un lector de pantalla interpreta un archivo PDF es una de las variantes que Adobe Acrobat no puede comprobar y validar automáticamente, requiriendo una verificación manual. Conocer cómo InDesign establece este orden puede ahorrar mucho tiempo.
            </p>
            <p className="mb-4">InDesign trabaja el orden de lectura de tres formas diferentes:</p>
            <ul className="space-y-4 mb-8">
              <li><strong>Por defecto</strong>: Este modo rige los archivos sin tratamiento de accesibilidad explícito o sin la opción "Usar estructura para el orden de tabulación" marcada al exportar. El orden de lectura lo define el orden de inclusión de cada elemento (lo que se incluyó antes se leerá antes), controlable desde el panel "Capas".</li>
              <li><strong>Estructura por orden de tabulación</strong>: Es la opción más útil para obras de texto corrido (informes, novelas). El orden de lectura se deduce según la estructura lógica del documento: de arriba a abajo y de izquierda a derecha. Sin embargo, si una imagen no está incluida en el flujo de texto, aparecerá al final en la estructura y en el orden de lectura.</li>
              <li><strong>Panel "Artículos"</strong>: InDesign ofrece un control completo sobre el orden de lectura de los elementos de la maqueta. Es especialmente útil para proyectos complejos o que no siguen un orden lógico (como trípticos o revistas). No es muy recomendable para proyectos extensos o de diseño simple, ya que implica trabajar página por página. Para activarlo, se arrastran las cajas o elementos al panel "Artículos" (Ventana &gt; Artículos) y se marca la opción <strong>"Usar para el orden de etiquetado en PDF etiquetado"</strong> en el desplegable superior derecho del panel.</li>
            </ul>
          </section>
        </article>
      </main>

      <CourseFooter currentUnit={3} />
    </div>
  );
};

export default Unidad3;