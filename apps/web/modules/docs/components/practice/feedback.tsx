import { IconCircleCheckFilled, IconCircleXFilled } from "@tabler/icons-react"
import { cn } from "@saygo/ui/lib/utils"

type Props = {
  correct: boolean
  correctAnswer?: string
  explanation?: string
}

export function Feedback({ correct, correctAnswer, explanation }: Props) {
  return (
    <div
      className={cn(
        "mt-3 rounded-md border px-3 py-2.5 text-sm",
        correct
          ? "border-green-600/30 bg-green-500/10"
          : "border-destructive/30 bg-destructive/10"
      )}
    >
      <div className="flex items-center gap-1.5 font-medium">
        {correct ? (
          <>
            <IconCircleCheckFilled size={16} className="text-green-600" />
            <span>¡Correcto!</span>
          </>
        ) : (
          <>
            <IconCircleXFilled size={16} className="text-destructive" />
            <span>Incorrecto</span>
          </>
        )}
      </div>
      {!correct && correctAnswer && (
        <p className="mt-1 text-foreground/90">
          Respuesta correcta:{" "}
          <span className="font-semibold">{correctAnswer}</span>
        </p>
      )}
      {explanation && (
        <p className="mt-1 text-muted-foreground">{explanation}</p>
      )}
    </div>
  )
}
