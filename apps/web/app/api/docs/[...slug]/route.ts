import { NextResponse } from "next/server"
import fs from "node:fs"
import path from "node:path"

const CONTENT_DIR = path.join(process.cwd(), "content")

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params
  const filePath = path.join(CONTENT_DIR, ...slug) + ".md"

  if (!fs.existsSync(filePath)) {
    return new NextResponse("Not found", { status: 404 })
  }

  const content = fs.readFileSync(filePath, "utf-8")
  const filename = `${slug[slug.length - 1]}.md`

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  })
}
