import { CourseHeader } from "@/components/CourseHeader";
import { CourseFooter } from "@/components/CourseFooter";

const Unidad2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <CourseHeader unitTitle="Unidad 2: Primeros pasos dentro de InDesign" />
      
      <main id="main-content" className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <div className="bg-course-light border-l-4 border-course-secondary p-6 mb-8 rounded-r-lg">
            <p className="text-course-primary font-medium mb-0">
              Una vez que se han considerado los parámetros previos de accesibilidad, se puede comenzar a trabajar con InDesign. Es crucial aprender a trabajar con un único archivo, definir los metadatos esenciales, comprender la composición adecuada en páginas maestras y dominar la creación de estilos de párrafo y carácter vinculados a etiquetas para la exportación a PDF.
            </p>
          </div>

          <section aria-labelledby="archivo-metadatos">
            <h2 id="archivo-metadatos" className="text-2xl font-bold text-course-primary mb-4">
              Archivo y Metadatos
            </h2>
            <ul className="space-y-4 mb-8">
              <li>Siempre que sea posible, es recomendable trabajar con un <strong>único archivo</strong> para todo el proyecto y evitar crear un libro. Esto simplifica la estructura de etiquetas cuando se exporta el documento y facilita la definición de metadatos, lo cual es muy beneficioso para el orden de lectura.</li>
              <li>
                Una vez creado el archivo, lo primero es <strong>implementar los metadatos</strong> a través de "Archivo &gt; Información de archivo".
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Cuantos más datos se incluyan en el desplegable, mejor.</li>
                  <li>El campo <strong>"Título del documento" es obligatorio</strong>.</li>
                  <li>Es muy recomendable rellenar el campo de <strong>"Autor"</strong>.</li>
                  <li>Estos dos campos son los que el lector de pantalla suele anunciar cuando una persona accede al documento.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section aria-labelledby="composicion-paginas">
            <h2 id="composicion-paginas" className="text-2xl font-bold text-course-primary mb-4">
              Composición y Páginas Maestras
            </h2>
            <ul className="space-y-4 mb-8">
              <li>Después de definir los metadatos, se procede con el proceso normal de composición para una página maestra (márgenes, línea base, etc.).</li>
              <li>Es necesario utilizar las <strong>herramientas adecuadas</strong>. Por ejemplo, si la obra se dispone en columnas, la caja debe crearse con la herramienta "Opciones de marco de texto &gt; Columnas" y no usando alternativas como dos cajas de texto, tablas sin bordes o tabulaciones.</li>
              <li>Es importante <strong>no crear cajas flotantes ni utilizar elementos aislados</strong> en la composición. Todas las cajas que se creen deben estar vinculadas para que el flujo de texto sea continuo. Si un elemento aparece aislado, InDesign interpretará que no pertenece al cuerpo principal y cambiará su posición en el orden de lectura (normalmente se leerá al final).</li>
              <li>Es vital saber que los elementos que aparecen en la página maestra y que no se modifican en el proceso de maquetación, como la foliación, <strong>no se leerán</strong> cuando se exporte el PDF.</li>
            </ul>
          </section>

          <section aria-labelledby="estilos-parrafo">
            <h2 id="estilos-parrafo" className="text-2xl font-bold text-course-primary mb-4">
              Creación de Estilos de Párrafo y Carácter
            </h2>
            <p className="mb-4">
              Una de las medidas más beneficiosas para optimizar la maquetación accesible es trabajar utilizando <strong>estilos de párrafo y carácter</strong>. Esto facilita el etiquetado correcto de todo el contenido del PDF, un requisito clave de las WCAG, ya que se puede vincular una etiqueta por cada estilo y se aplicará en conjunto.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-course-secondary mb-3">Nomenclatura</h3>
                <p>Aunque no es estrictamente necesario, es un buen hábito nombrar los estilos según las etiquetas que tendrán en la estructura del PDF (similares a HTML, como "H1" en lugar de "Título"). Esto resulta en un árbol de etiquetas más "limpio" y facilita la identificación de problemas posteriores. Sin embargo, lo fundamental es definir correctamente la etiqueta de exportación.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-course-secondary mb-3">Definición</h3>
                <p className="mb-3">Al crear los estilos, se debe prestar atención a dos aspectos fundamentales:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Que tenga el <strong>idioma correctamente seleccionado</strong> (Opciones de estilo de párrafo &gt; Formato de carácter avanzado &gt; Idioma).</li>
                  <li><strong>Seleccionar y definir la etiqueta de exportación</strong> dentro del menú (Opciones de estilo de párrafo &gt; Exportación de etiquetas &gt; PDF).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-course-secondary mb-3">Recomendaciones adicionales para estilos</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>La etiqueta <strong>"H1"</strong> debe reservarse para el título principal del libro, por lo que la jerarquía debería comenzar en <strong>"H2"</strong>.</li>
                  <li>Si no se encuentra una etiqueta específica, es preferible utilizar la etiqueta <strong>"p" (párrafo)</strong>.</li>
                  <li>Las funciones de <strong>"Lista" o "Tabla" aplican automáticamente</strong> la etiqueta necesaria.</li>
                  <li>La etiqueta <strong>"artefacto"</strong> se utiliza para elementos que el lector de pantalla debe ignorar, como imágenes decorativas.</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>

      <CourseFooter currentUnit={2} />
    </div>
  );
};

export default Unidad2;