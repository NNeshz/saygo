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
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">To Be afirmativo</h2>
          <p className="mb-3 text-foreground/90">
            Usos principales: <strong>identidad</strong> (I'm Ana), <strong>edad</strong> (She's 25 years old), <strong>profesión</strong> (He's a teacher), <strong>nacionalidad</strong> (We're Mexican), <strong>estado civil</strong> (They're married), <strong>relación familiar</strong> (She's my sister).
          </p>
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
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">To Be negativo</h2>
          <p className="mb-2 text-foreground/90">
            Estructura: <strong>Sujeto + to be + NOT</strong>. "I am not" solo tiene una contracción: <strong>I'm not</strong> (no existe "I amn't"). Para el resto hay dos opciones: She's not = She isn't; They're not = They aren't.
          </p>
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
        { question: "She is 18 years old → ?", answer: "She isn't 18 years old. / She's not 18 years old." },
        { question: "We are from Canada → ?", answer: "We aren't from Canada. / We're not from Canada." },
        { question: "He is single → ?", answer: "He isn't single. / He's not single." },
      ],
    },
    // —— To Be interrogativo ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">To Be interrogativo</h2>
          <p className="mb-2 text-foreground/90">
            Se invierte el orden: <strong>To be + Sujeto + complemento?</strong> Afirmativa: You are ready → Pregunta: Are you ready?
          </p>
          <p className="text-sm text-muted-foreground">
            Preguntas Yes/No empiezan con el verbo (Are you a student?). Preguntas WH- empiezan con Who, What, Where, How (What is your name? Where are you from? How old are you?).
          </p>
        </>
      ),
    },
    {
      type: "table",
      caption: "Afirmativa → Interrogativa",
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
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">Respuestas cortas</h2>
          <p className="mb-2 text-foreground/90">
            No respondas solo "Yes" o "No". En <strong>afirmativas</strong> no uses contracción: ✓ Yes, I am · ❌ Yes, I'm. En <strong>negativas</strong> sí: ✓ No, I'm not · ✓ No, he isn't.
          </p>
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
        { question: "Are you from Mexico? → Afirmativa y negativa.", answer: "Yes, I am. / No, I'm not." },
        { question: "Is he a doctor? → Afirmativa y negativa.", answer: "Yes, he is. / No, he isn't." },
        { question: "Are they your parents? → Afirmativa y negativa.", answer: "Yes, they are. / No, they aren't." },
      ],
    },
    // —— Números 0-100 ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">Números 0-100</h2>
          <p className="mb-2 text-foreground/90">
            <strong>0-10:</strong> zero, one, two, three, four, five, six, seven, eight, nine, ten.
            <strong> 11-20:</strong> eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty (excepciones: thirteen, fifteen).
          </p>
          <p className="mb-2 text-foreground/90">
            <strong>Decenas:</strong> twenty, thirty, forty (no "fourty"), fifty, sixty, seventy, eighty, ninety, one hundred.
            <strong> Compuestos:</strong> decena + guion + unidad: twenty-one, thirty-five, forty-seven.
          </p>
          <p className="text-sm text-muted-foreground">
            Edad: I'm 25 years old / I'm 25. Pregunta: How old are you? How old is your sister?
          </p>
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
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">Profesiones básicas</h2>
          <p className="mb-2 text-foreground/90">
            Siempre usa <strong>a/an</strong> con profesiones: I'm a teacher ✓ · I'm teacher ✗. An antes de vocal: I'm an engineer, She's an artist. Sin artículo: I'm unemployed, She's retired.
          </p>
          <p className="text-sm text-muted-foreground">
            Vocabulario: doctor, nurse, teacher, student, lawyer, engineer, accountant, manager, waiter, chef, artist, designer, photographer, writer, retired, unemployed.
          </p>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Completa con a/an o sin artículo",
      items: [
        { question: "I'm ___ doctor.", answer: "a" },
        { question: "She's ___ engineer.", answer: "an" },
        { question: "He's ___ unemployed.", answer: "(sin artículo)" },
        { question: "They're ___ artists.", answer: "(plural: They're artists)" },
      ],
    },
    // —— Familia ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">Familia cercana</h2>
          <p className="mb-2 text-foreground/90">
            <strong>Nuclear:</strong> mother, father, parents, sister, brother, daughter, son, children. <strong>Extendida:</strong> grandmother, grandfather, grandparents, aunt, uncle, cousin. <strong>Pareja:</strong> husband, wife, boyfriend, girlfriend.
          </p>
          <p className="mb-2 text-foreground/90">
            <strong>Posesivos:</strong> my, your, his, her, our, their. Ejemplos: My mother is a nurse. His sister is 25. Is she your sister?
          </p>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Traduce al inglés",
      items: [
        { question: "Mi madre es profesora.", answer: "My mother is a teacher." },
        { question: "Su hermana (de él) tiene 30 años.", answer: "His sister is 30 years old." },
        { question: "Nuestros padres son de México.", answer: "Our parents are from Mexico." },
        { question: "¿Es ella tu hermana?", answer: "Is she your sister?" },
        { question: "Mi padre no es doctor.", answer: "My father isn't a doctor." },
      ],
    },
    // —— Errores comunes ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">Errores comunes a evitar</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
            <li>I 25 years old → I'm 25 years old (no omitir to be)</li>
            <li>Yes, I'm → Yes, I am (no contracción en respuestas cortas afirmativas)</li>
            <li>I'm teacher → I'm a teacher (artículo con profesión)</li>
            <li>You are ready? → Are you ready? (invertir en preguntas)</li>
            <li>I have 25 years → I'm 25 years old (no traducir literal)</li>
            <li>I amn't ready → I'm not ready ("amn't" no existe)</li>
            <li>He not my brother → He isn't my brother (usar forma negativa correcta)</li>
            <li>I'm no a student → I'm not a student (no doble negación)</li>
          </ul>
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
          instruction: "Traduce al inglés:",
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
