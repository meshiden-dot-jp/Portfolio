import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

const invoices = [
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
      <Table>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.category}>
              <TableCell className="font-medium align-text-top">{invoice.category}</TableCell>
              <TableCell className="">{invoice.contents}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default biography