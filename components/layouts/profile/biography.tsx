import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    year: "2025",
    biography: (
      <>
        <p>
          青山学院大学理工学部情報テクノロジー学科 在学中
        </p>
      </>
    ),
  },
  {
    year: "2023",
    biography: (
      <>
        <p>
          神奈川県立秦野高等学校 卒業
        </p>
      </>
    ),
  },
  {
    year: "2004",
    biography: (
      <>
        <p>
          神奈川県平塚市生まれ
        </p>
      </>
    ),
  },
]

const biography = () => {
  return (
    <div>
      <Table>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.year}>
              <TableCell className="font-medium align-text-top">{invoice.year}</TableCell>
              <TableCell className="">{invoice.biography}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default biography