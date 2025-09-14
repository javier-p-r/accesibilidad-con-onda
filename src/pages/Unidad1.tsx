import { CourseHeader } from "@/components/CourseHeader";
import { CourseFooter } from "@/components/CourseFooter";

const Unidad1 = () => {
  return (
    <div className="min-h-screen bg-background">
      <CourseHeader unitTitle="Unidad 1: Antes de empezar a maquetar un documento accesible" />
      
      <main id="main-content" className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <div className="bg-course-light border-l-4 border-course-secondary p-6 mb-8 rounded-r-lg">
            <p className="text-course-primary font-medium mb-0">
              La accesibilidad debe integrarse desde la concepción del proyecto editorial, no como un proceso posterior a la maquetación. Para ello, es fundamental prestar atención a los siguientes puntos:
            </p>
          </div>

          <section aria-labelledby="color-contraste">
            <h2 id="color-contraste" className="text-2xl font-bold text-course-primary mb-4">
              Color y Contraste
            </h2>
            <ul className="space-y-4 mb-8">
              <li>Es esencial elegir una gama de colores con el <strong>suficiente contraste</strong> para que sea fácilmente distinguible. Esto beneficia especialmente a personas con discapacidades visuales y a usuarios en general, ya que un bajo contraste dificulta la lectura.</li>
              <li>
                La normativa <strong>WCAG 2.1</strong> establece dos estándares básicos de contraste:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>AA</strong> (mínimo exigible)</li>
                  <li><strong>AAA</strong> (objetivo deseado)</li>
                </ul>
              </li>
              <li>Estos estándares consideran tanto los colores como su interacción con el texto en diferentes usos y tamaños.</li>
              <li>Para verificar el contraste y la accesibilidad de una paleta de colores, existen recursos útiles como la web <strong>Adobe Color Contrast Analyzer</strong> o Contrast Colour Analyser.</li>
              <li>En el material gráfico, se debe <strong>evitar que la transmisión de información dependa únicamente del color</strong>. Para comprobarlo, se puede imprimir o transformar el material a blanco y negro o recurrir a técnicas como patrones.</li>
            </ul>
          </section>

          <section aria-labelledby="tipografia-composicion">
            <h2 id="tipografia-composicion" className="text-2xl font-bold text-course-primary mb-4">
              Tipografía y Composición
            </h2>
            <p className="mb-4">La elección de la tipografía y la composición es clave en proyectos accesibles:</p>
            <ul className="space-y-4 mb-8">
              <li><strong>Tamaño de la fuente:</strong> Se recomienda un cuerpo de fuente de al menos <strong>11pt</strong> para facilitar la lectura.</li>
              <li><strong>Estilo de la fuente:</strong> Se deben evitar estilos con trazos extremadamente finos o con muchas ligaduras, ya que dificultan la lectura. Generalmente, es preferible elegir <strong>fuentes de palo seco</strong> y, si es posible, con suficiente espaciado e interlineado.</li>
              <li>
                <strong>Composición:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Un texto dispuesto <strong>a bandera</strong> (sin justificar) y <strong>sin separaciones</strong> de palabras es mucho más accesible. Esto facilita la lectura visual y ayuda a personas con dislexia.</li>
                  <li>Es fundamental para los lectores de pantalla, ya que interpretan los guiones como pausas, interrumpiendo la lectura continua.</li>
                  <li>Siempre que sea posible, es deseable incluir el párrafo completo dentro de una página y <strong>no cortarlo</strong>.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section aria-labelledby="estilo-texto">
            <h2 id="estilo-texto" className="text-2xl font-bold text-course-primary mb-4">
              Estilo del Texto
            </h2>
            <ul className="space-y-2 mb-8">
              <li>Aunque el uso de <strong>cursivas y negritas</strong> no está contraindicado, se debe <strong>evitar su uso en párrafos completos o partes importantes</strong> del texto, a menos que no dificulten la lectura.</li>
            </ul>
          </section>

          <section aria-labelledby="redaccion-originales">
            <h2 id="redaccion-originales" className="text-2xl font-bold text-course-primary mb-4">
              Redacción de los Originales
            </h2>
            <p className="mb-4">Para facilitar la accesibilidad y la lectura, se recomienda:</p>
            <ul className="space-y-2 mb-8">
              <li>Uso de <strong>frases cortas y concisas</strong></li>
              <li>Evitar tiempos verbales compuestos o modos como el subjuntivo</li>
              <li>Léxico preciso pero no excesivamente técnico o complejo</li>
              <li>Ofrecer una <strong>organización y jerarquía clara</strong> (capítulos o epígrafes claros y bien ordenados por importancia)</li>
            </ul>
          </section>

          <section aria-labelledby="materiales-graficos">
            <h2 id="materiales-graficos" className="text-2xl font-bold text-course-primary mb-4">
              Recuento y Adaptación de Materiales Gráficos
            </h2>
            <ul className="space-y-2 mb-8">
              <li>Es muy beneficioso considerar y enfocar el material gráfico y de apoyo desde un <strong>punto de vista accesible</strong> desde el inicio del proyecto.</li>
            </ul>
          </section>

          <section aria-labelledby="textos-alternativos">
            <h2 id="textos-alternativos" className="text-2xl font-bold text-course-primary mb-4">
              Textos Alternativos
            </h2>
            <ul className="space-y-2 mb-8">
              <li>Es crucial empezar a desarrollar los textos alternativos que acompañarán al <strong>material gráfico</strong> (imágenes, ilustraciones, gráficos, etc.) y a los <strong>hipervínculos</strong>.</li>
              <li>Para las <strong>tablas</strong>, deben mantener una regularidad en su composición y, si son demasiado extensas, deben acompañarse de un <strong>resumen</strong> que funcione como texto alternativo.</li>
            </ul>
          </section>

          <section aria-labelledby="proyectos-multilingues">
            <h2 id="proyectos-multilingues" className="text-2xl font-bold text-course-primary mb-4">
              Proyectos Multilingües
            </h2>
            <ul className="space-y-2 mb-8">
              <li>Siempre se debe <strong>definir el idioma principal del documento</strong>.</li>
              <li>Esto asegura que los lectores de pantalla utilicen la voz predefinida para ese idioma.</li>
              <li>Si el idioma cambia dentro de la obra, esto puede generar problemas de lectura. Por ello, siempre que sea posible, es deseable realizar <strong>una maqueta por idioma</strong>.</li>
            </ul>
          </section>
        </article>
      </main>

      <CourseFooter currentUnit={1} />
    </div>
  );
};

export default Unidad1;