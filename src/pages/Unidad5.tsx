import { CourseHeader } from "@/components/CourseHeader";
import { CourseFooter } from "@/components/CourseFooter";

const Unidad5 = () => {
  return (
    <div className="min-h-screen bg-background">
      <CourseHeader unitTitle="Unidad 5: Control del Orden de Lectura y Exportación Final a PDF Accesible" />
      
      <main id="main-content" className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <p className="text-lg mb-8 text-muted-foreground">
            El control del orden de lectura y la correcta exportación a un PDF accesible son pasos cruciales para garantizar que el contenido sea comprensible para todos los usuarios, especialmente para aquellos que utilizan lectores de pantalla. Es importante recordar que el orden de lectura es una de las dos variantes que Adobe Acrobat no puede comprobar y validar automáticamente, requiriendo una revisión manual.
          </p>

          <section aria-labelledby="orden-lectura">
            <h2 id="orden-lectura" className="text-2xl font-bold text-course-primary mb-4">
              Orden de Lectura en InDesign
            </h2>
            <p className="mb-4">
              InDesign establece el orden de lectura de tres formas diferentes, y comprenderlas ayuda a ahorrar tiempo y trabajo en la validación posterior.
            </p>

            <ul className="space-y-6 mb-8">
              <li>
                <div>
                  <h3 className="text-lg font-semibold text-course-secondary mb-2">Por Defecto</h3>
                  <p>Este es el modo para archivos sin tratamiento de accesibilidad o donde no se ha marcado la opción "Usar estructura para el orden de tabulación" al exportar. En este caso, el orden lo rige la <strong>secuencia en que se incluyó cada elemento</strong> en el documento. Esto significa que, independientemente de su posición visual, un elemento introducido primero se leerá antes. Aunque no es el método más eficiente, ofrece cierto control desde el panel "Capas".</p>
                </div>
              </li>
              <li>
                <div>
                  <h3 className="text-lg font-semibold text-course-secondary mb-2">Estructura por Orden de Tabulación</h3>
                  <p>Esta es la opción más útil para obras de texto corrido, como informes o novelas. El orden de lectura se deduce según la <strong>estructura lógica del documento</strong>, yendo de arriba hacia abajo y de izquierda a derecha. Sin embargo, es vital recordar que este orden se aplica a los elementos (cajas de texto, imágenes, etc.). Si una imagen o un elemento no está incluido en el flujo de texto principal, aparecerá al final en la estructura y en el orden de lectura. Esta opción es necesaria al exportar si no se está utilizando el panel "Artículos".</p>
                </div>
              </li>
              <li>
                <div>
                  <h3 className="text-lg font-semibold text-course-secondary mb-2">Panel "Artículos"</h3>
                  <p className="mb-3">InDesign ofrece la posibilidad de controlar <strong>completamente el orden de lectura</strong> de los elementos de la maqueta. Esto es especialmente útil en proyectos complejos o que no sigan un orden de lectura lógico, como trípticos o revistas. No obstante, no se recomienda para proyectos extensos o con un diseño simple, ya que su uso implica arrastrar elementos página por página.</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Para acceder, ve a <code className="bg-muted px-2 py-1 rounded">Ventana &gt; Artículos</code></li>
                    <li>En este panel, puedes arrastrar las distintas cajas o elementos y ordenarlos para establecer la secuencia de lectura deseada</li>
                    <li>Los cambios solo tendrán efecto una vez que se marque la opción <strong>"Usar para el orden de etiquetado en PDF etiquetado"</strong> en el desplegable superior derecho del panel</li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          <section aria-labelledby="exportacion-pdf">
            <h2 id="exportacion-pdf" className="text-2xl font-bold text-course-primary mb-4">
              Exportación de Archivos PDF Accesibles
            </h2>
            <p className="mb-4">
              Una vez completado el proceso de maquetación y revisión, se puede exportar el archivo como PDF. Es fundamental entender que el archivo exportado <strong>no es el PDF final accesible</strong>; siempre será necesario el uso de Adobe Acrobat Pro (o herramientas como PAC) para la validación y una escucha con un lector de pantalla.
            </p>
            <p className="mb-6">
              El proceso de exportación es similar al de un PDF interactivo, pero se debe prestar atención a secciones específicas:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-course-secondary mb-3">Pestaña "General"</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>"Crear PDF etiquetado"</strong>: Esta opción es <strong>vital</strong>. Sin marcar esta casilla, todo el trabajo previo de accesibilidad habrá sido en vano, ya que la estructura y etiquetas no se transferirán al PDF exportado.
                  </li>
                  <li>
                    <strong>"Incrustar miniaturas de página"</strong> y <strong>"Crear capas de Acrobat"</strong>: Es recomendable marcar estas opciones.
                  </li>
                  <li>
                    <strong>"Usar estructura para el orden de tabulación"</strong>: Esta casilla es necesaria si no se ha trabajado con el panel "Artículos" para definir un orden de lectura personalizado.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-course-secondary mb-3">Pestaña "Avanzado"</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>"Mostrar título"</strong>: Si se han modificado los metadatos del archivo (en <code className="bg-muted px-2 py-1 rounded">Archivo &gt; Información de archivo</code>), se debe seleccionar la opción <strong>"Título del documento"</strong> en el desplegable "Mostrar título".
                  </li>
                  <li>
                    <strong>Idioma</strong>: Es crucial asegurarse de que el idioma seleccionado sea el correcto para el documento.
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-muted-foreground">
              Con estos parámetros, el PDF se puede exportar. Sin embargo, como se mencionó, aún <strong>no se considera un PDF accesible final</strong> sin la validación posterior en Adobe Acrobat Pro o PAC y una escucha por parte de un lector de pantalla.
            </p>
          </section>

          <div className="bg-course-light border-l-4 border-course-secondary p-6 mt-8 rounded-r-lg">
            <p className="text-course-primary font-medium mb-0">
              <strong>Analogía útil:</strong> Piensa en el orden de lectura y la exportación de un PDF accesible como la planificación de una ruta de viaje detallada y la preparación de un mapa final. El orden de lectura es la secuencia lógica que un guía (lector de pantalla) seguirá para describir los lugares de interés. Si los elementos no están bien ordenados (como si el mapa tuviera los puntos en una secuencia ilógica), el guía se confundirá. La exportación, por otro lado, es como imprimir ese mapa: si no marcas la opción "Crear PDF etiquetado", es como imprimir un montón de hojas sin el mapa real, solo imágenes sin ninguna instrucción de ruta. Y, finalmente, el PDF exportado necesita ser validado, lo que sería como hacer que un experto revise el mapa para asegurarse de que el guía pueda seguirlo sin problemas y que todos los puntos de interés estén claramente identificados para el viajero.
            </p>
          </div>
        </article>
      </main>

      <CourseFooter currentUnit={5} />
    </div>
  );
};

export default Unidad5;