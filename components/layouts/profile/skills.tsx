import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

const items = [
  {
    category: "Frontend",
    contents: "HTML, CSS, Next.js, Tailwind CSS, Sass",
  },
  {
    category: "Language",
    contents: "C, Java",
  },
  {
    category: "Design",
    contents: "Illustrator, After Effects, Premiere Pro, Photoshop, Figma",
  },
]

const biography = () => {
  return (
    <div>
      <h2>技術</h2>
      <Table>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.category}>
              <TableCell className="w-[20%] font-medium align-text-top pl-2 sm:pl-4">{item.category}</TableCell>
              <TableCell className="pr-2 sm:pr-4">{item.contents}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default biography