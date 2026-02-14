import type { LessonContent } from "../../content-types";

export const informacionPersonal: LessonContent = {
  title: "Información Personal (Ser/Estar)",
  description:
    "Dominio del verbo to be en afirmativo, negativo e interrogativo; respuestas cortas; números 0-100; edades; profesiones; familia cercana.",
  blocks: [
    // —— To Be afirmativo ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            To Be afirmativo
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Usos principales
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Identidad</strong> (I'm Ana)
            </li>
            <li>
              <strong>Edad</strong> (She's 25 years old)
            </li>
            <li>
              <strong>Profesión</strong> (He's a teacher)
            </li>
            <li>
              <strong>Nacionalidad</strong> (We're Mexican)
            </li>
            <li>
              <strong>Estado civil</strong> (They're married)
            </li>
            <li>
              <strong>Relación familiar</strong> (She's my sister)
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "table",
      caption: "Formas completas y contracciones",
      headers: ["Pronombre", "Forma completa", "Contracción"],
      rows: [
        ["I", "I am", "I'm"],
        ["You", "You are", "You're"],
        ["He", "He is", "He's"],
        ["She", "She is", "She's"],
        ["It", "It is", "It's"],
        ["We", "We are", "We're"],
        ["They", "They are", "They're"],
      ],
    },
    {
      type: "exercise",
      title: "Completa con la forma correcta (contracción)",
      items: [
        { question: "I ___ 30 years old.", answer: "I'm" },
        { question: "She ___ my mother.", answer: "She's" },
        { question: "We ___ from Spain.", answer: "We're" },
        { question: "They ___ engineers.", answer: "They're" },
        { question: "He ___ single.", answer: "He's" },
      ],
    },
    // —— To Be negativo ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            To Be negativo
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Usos principales
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>No soy</strong> (I'm not a teacher)
            </li>
            <li>
              <strong>No es</strong> (He's not a teacher)
            </li>
            <li>
              <strong>No estamos</strong> (We're not from Spain)
            </li>
            <li>
              <strong>No son</strong> (They're not engineers)
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "table",
      caption: "Formas negativas",
      headers: ["Forma completa", "Contracción"],
      rows: [
        ["I am not", "I'm not"],
        ["You are not", "You're not / You aren't"],
        ["He is not", "He's not / He isn't"],
        ["She is not", "She's not / She isn't"],
        ["It is not", "It's not / It isn't"],
        ["We are not", "We're not / We aren't"],
        ["They are not", "They're not / They aren't"],
      ],
    },
    {
      type: "exercise",
      title: "Convierte a negativo (usa contracciones)",
      items: [
        { question: "I am a lawyer → ?", answer: "I'm not a lawyer." },
        {
          question: "She is 18 years old → ?",
          answer: "She isn't 18 years old. / She's not 18 years old.",
        },
        {
          question: "We are from Canada → ?",
          answer: "We aren't from Canada. / We're not from Canada.",
        },
        {
          question: "He is single → ?",
          answer: "He isn't single. / He's not single.",
        },
      ],
    },
    // —— To Be interrogativo ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            To Be interrogativo
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Usos principales
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>¿Estás listo?</strong> (Are you ready?)
            </li>
            <li>
              <strong>¿Es ella de 30 años?</strong> (Is she 30 years old?)
            </li>
            <li>
              <strong>¿Son de Japón?</strong> (Are they from Japan?)
            </li>
            <li>
              <strong>¿Es él tu padre?</strong> (Is he your father?)
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "table",
      headers: ["Afirmativa", "Interrogativa"],
      rows: [
        ["You are Mexican", "Are you Mexican?"],
        ["He is a teacher", "Is he a teacher?"],
        ["They are married", "Are they married?"],
        ["I am late", "Am I late?"],
      ],
    },
    {
      type: "exercise",
      title: "Convierte a interrogativo",
      items: [
        { question: "You are ready → ?", answer: "Are you ready?" },
        { question: "She is 30 years old → ?", answer: "Is she 30 years old?" },
        { question: "They are from Japan → ?", answer: "Are they from Japan?" },
        { question: "He is your father → ?", answer: "Is he your father?" },
      ],
    },
    // —— Respuestas cortas ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            Respuestas cortas
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Estructura
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Yes</strong> (Yes, I am)
            </li>
            <li>
              <strong>No</strong> (No, I'm not)
            </li>
            <li>
              <strong>Yes, I'm</strong> (Yes, I am / No, I'm not)
            </li>
            <li>
              <strong>No, I'm not</strong> (No, I'm not / Yes, I am)
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "table",
      caption: "Respuestas cortas",
      headers: ["Pregunta", "Afirmativa", "Negativa"],
      rows: [
        ["Are you Mexican?", "Yes, I am", "No, I'm not"],
        ["Is she a teacher?", "Yes, she is", "No, she isn't / No, she's not"],
        ["Are they married?", "Yes, they are", "No, they aren't"],
        ["Is he your brother?", "Yes, he is", "No, he isn't"],
      ],
    },
    {
      type: "exercise",
      title: "Responde con respuesta corta (afirmativa y negativa)",
      items: [
        {
          question: "Are you from Mexico? → Afirmativa y negativa.",
          answer: "Yes, I am. / No, I'm not.",
        },
        {
          question: "Is he a doctor? → Afirmativa y negativa.",
          answer: "Yes, he is. / No, he isn't.",
        },
        {
          question: "Are they your parents? → Afirmativa y negativa.",
          answer: "Yes, they are. / No, they aren't.",
        },
      ],
    },
    // —— Números 0-100 ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            Números 0-100
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">0-10</h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>0</strong> (zero)
            </li>
            <li>
              <strong>1</strong> (one)
            </li>
            <li>
              <strong>2</strong> (two)
            </li>
            <li>
              <strong>3</strong> (three)
            </li>
            <li>
              <strong>4</strong> (four)
            </li>
            <li>
              <strong>5</strong> (five)
            </li>
            <li>
              <strong>6</strong> (six)
            </li>
            <li>
              <strong>7</strong> (seven)
            </li>
            <li>
              <strong>8</strong> (eight)
            </li>
            <li>
              <strong>9</strong> (nine)
            </li>
            <li>
              <strong>10</strong> (ten)
            </li>
          </ul>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            11-20
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>11</strong> (eleven)
            </li>
            <li>
              <strong>12</strong> (twelve)
            </li>
            <li>
              <strong>13</strong> (thirteen)
            </li>
            <li>
              <strong>14</strong> (fourteen)
            </li>
            <li>
              <strong>15</strong> (fifteen)
            </li>
            <li>
              <strong>16</strong> (sixteen)
            </li>
            <li>
              <strong>17</strong> (seventeen)
            </li>
            <li>
              <strong>18</strong> (eighteen)
            </li>
            <li>
              <strong>19</strong> (nineteen)
            </li>
            <li>
              <strong>20</strong> (twenty)
            </li>
          </ul>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Decenas
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>20</strong> (twenty)
            </li>
            <li>
              <strong>30</strong> (thirty)
            </li>
            <li>
              <strong>40</strong> (forty)
            </li>
            <li>
              <strong>50</strong> (fifty)
            </li>
            <li>
              <strong>60</strong> (sixty)
            </li>
            <li>
              <strong>70</strong> (seventy)
            </li>
            <li>
              <strong>80</strong> (eighty)
            </li>
            <li>
              <strong>90</strong> (ninety)
            </li>
            <li>
              <strong>100</strong> (one hundred)
            </li>
          </ul>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Ejemplos
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>I'm 25 years old</strong> (Tengo 25 años)
            </li>
            <li>
              <strong>She's 30 years old</strong> (Ella tiene 30 años)
            </li>
            <li>
              <strong>How old are you?</strong> (¿Cuántos años tienes?)
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Escribe en palabras",
      items: [
        { question: "13 → ?", answer: "thirteen" },
        { question: "28 → ?", answer: "twenty-eight" },
        { question: "45 → ?", answer: "forty-five" },
        { question: "67 → ?", answer: "sixty-seven" },
      ],
    },
    // —— Profesiones ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            Profesiones básicas
          </h2>
          <p className="mb-2 text-foreground/90">
            Siempre usa <strong>a/an</strong> con profesiones: I'm a teacher ✓ ·
            I'm teacher ✗. An antes de vocal: I'm an engineer, She's an artist.
            Sin artículo: I'm unemployed, She's retired.
          </p>
        </>
      ),
    },
    {
      type: "vocabulary",
      title: "Vocabulario: profesiones",
      items: [
        { en: "doctor", es: "médico/a" },
        { en: "nurse", es: "enfermero/a" },
        { en: "teacher", es: "maestro/a" },
        { en: "professor", es: "profesor/a universitario" },
        { en: "student", es: "estudiante" },
        { en: "lawyer", es: "abogado/a" },
        { en: "engineer", es: "ingeniero/a" },
        { en: "accountant", es: "contador/a" },
        { en: "manager", es: "gerente" },
        { en: "waiter / waitress", es: "mesero/a" },
        { en: "chef / cook", es: "chef / cocinero/a" },
        { en: "artist", es: "artista" },
        { en: "designer", es: "diseñador/a" },
        { en: "photographer", es: "fotógrafo/a" },
        { en: "writer", es: "escritor/a" },
        { en: "retired", es: "jubilado/a" },
        { en: "unemployed", es: "desempleado/a" },
      ],
    },
    {
      type: "exercise",
      title: "Completa con a/an o sin artículo",
      items: [
        { question: "I'm ___ doctor.", answer: "a" },
        { question: "She's ___ engineer.", answer: "an" },
        { question: "He's ___ unemployed.", answer: "(sin artículo)" },
        {
          question: "They're ___ artists.",
          answer: "(plural: They're artists)",
        },
      ],
    },
    // —— Familia ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            Familia cercana
          </h2>
          <p>Estos son los posesivos, que se refieren a la persona o cosa que tiene o pertenece a alguien.</p>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>my</strong> (mi / mis)
            </li>
            <li>
              <strong>your</strong> (tu / tus)
            </li>
            <li>
              <strong>his</strong> (su / su)
            </li>
            <li>
              <strong>her</strong> (su / su)
            </li>
            <li>
              <strong>our</strong> (nuestro / nuestra)
            </li>
            <li>
              <strong>their</strong> (su / su)
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "vocabulary",
      title: "Vocabulario: familia nuclear y extendida",
      items: [
        { en: "mother / mom", es: "madre / mamá" },
        { en: "father / dad", es: "padre / papá" },
        { en: "parents", es: "padres" },
        { en: "sister", es: "hermana" },
        { en: "brother", es: "hermano" },
        { en: "daughter", es: "hija" },
        { en: "son", es: "hijo" },
        { en: "children", es: "hijos / niños" },
        { en: "grandmother / grandma", es: "abuela" },
        { en: "grandfather / grandpa", es: "abuelo" },
        { en: "grandparents", es: "abuelos" },
        { en: "aunt", es: "tía" },
        { en: "uncle", es: "tío" },
        { en: "cousin", es: "primo/a" },
        { en: "husband", es: "esposo" },
        { en: "wife", es: "esposa" },
        { en: "boyfriend", es: "novio" },
        { en: "girlfriend", es: "novia" },
      ],
    },
    {
      type: "vocabulary",
      title: "Posesivos",
      items: [
        { en: "my", es: "mi / mis" },
        { en: "your", es: "tu / tus" },
        { en: "his", es: "su (de él)" },
        { en: "her", es: "su (de ella)" },
        { en: "our", es: "nuestro/a/os/as" },
        { en: "their", es: "su (de ellos)" },
      ],
    },
    {
      type: "exercise",
      title: "Traduce al inglés",
      items: [
        {
          question: "Mi madre es profesora.",
          answer: "My mother is a teacher.",
        },
        {
          question: "Su hermana (de él) tiene 30 años.",
          answer: "His sister is 30 years old.",
        },
        {
          question: "Nuestros padres son de México.",
          answer: "Our parents are from Mexico.",
        },
        { question: "¿Es ella tu hermana?", answer: "Is she your sister?" },
        {
          question: "Mi padre no es doctor.",
          answer: "My father isn't a doctor.",
        },
      ],
    },
    // —— Errores comunes ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            Errores comunes a evitar
          </h2>
          <div className="space-y-5 text-sm text-foreground/90">
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span> <code>I 25 years old</code>
              <br />
              <span className="font-semibold text-green-700">Correcto:</span> <code>I'm 25 years old</code>
              <br />
              <span className="text-foreground/70">Nunca omitas el verbo <b>to be</b>.</span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span> <code>Yes, I'm</code>
              <br />
              <span className="font-semibold text-green-700">Correcto:</span> <code>Yes, I am</code>
              <br />
              <span className="text-foreground/70">No uses contracción en respuestas breves afirmativas.</span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span> <code>I'm teacher</code>
              <br />
              <span className="font-semibold text-green-700">Correcto:</span> <code>I'm a teacher</code>
              <br />
              <span className="text-foreground/70">Recuerda poner el artículo <b>a</b> o <b>an</b> antes de profesiones.</span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span> <code>You are ready?</code>
              <br />
              <span className="font-semibold text-green-700">Correcto:</span> <code>Are you ready?</code>
              <br />
              <span className="text-foreground/70">En preguntas, invierte el orden: primero el verbo, luego el sujeto.</span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span> <code>I have 25 years</code>
              <br />
              <span className="font-semibold text-green-700">Correcto:</span> <code>I'm 25 years old</code>
              <br />
              <span className="text-foreground/70">No traduzcas literalmente las edades; usa <b>to be + años old</b>.</span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span> <code>I amn't ready</code>
              <br />
              <span className="font-semibold text-green-700">Correcto:</span> <code>I'm not ready</code>
              <br />
              <span className="text-foreground/70">"Amn't" no existe en inglés.</span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span> <code>He not my brother</code>
              <br />
              <span className="font-semibold text-green-700">Correcto:</span> <code>He isn't my brother</code>
              <br />
              <span className="text-foreground/70">Forma correctamente la negativa con <b>isn't</b> o <b>is not</b>.</span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span> <code>I'm no a student</code>
              <br />
              <span className="font-semibold text-green-700">Correcto:</span> <code>I'm not a student</code>
              <br />
              <span className="text-foreground/70">En negativo se usa <b>not</b>, no <b>no</b>, después de <b>to be</b>.</span>
            </div>
          </div>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Corrige el error",
      items: [
        { question: "I have 30 years.", answer: "I'm 30 years old." },
        { question: "She is teacher.", answer: "She's a teacher." },
        { question: "You are from Spain?", answer: "Are you from Spain?" },
        { question: "I amn't ready.", answer: "I'm not ready." },
        { question: "Yes, I'm.", answer: "Yes, I am." },
      ],
    },
    // —— Práctica integrada ——
    {
      type: "exercise",
      title: "Práctica integrada",
      items: [
        {
          question: "Mi hermano no es doctor, es enfermero.",
          answer: "My brother isn't a doctor, he's a nurse.",
        },
        {
          question: "Ellos son mis padres. Tienen 55 y 53 años.",
          answer: "They're my parents. They're 55 and 53 years old.",
        },
        {
          question: "No soy de Argentina, soy de Chile.",
          answer: "I'm not from Argentina, I'm from Chile.",
        },
        {
          question: "¿Está casada tu hermana?",
          answer: "Is your sister married?",
        },
      ],
    },
  ],
};
