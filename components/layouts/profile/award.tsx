import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    year: "2024",
    award: (
      <>
        <a href="https://topaz.dev/projects/ac3c682bb55442262681">Progateハッカソン 優秀賞 <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
      </>
    ),
  },
  {
    year: "2022",
    award: (
      <>
        <a href="https://express.adobe.com/page/SQ8KHbD94RDKy/">SDGsクリエイティブアイデアコンテスト2021 優秀賞 <i className="fa-solid fa-arrow-up-right-from-square"></i></a><br />
        <p>平塚秦野地区県立学校交通安全大会ポスターの部 最優秀賞</p>
      </>
    ),
  },
]

const award = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/6 font-bold text-black">YEAR</TableHead>
            <TableHead className="font-bold text-black">AWARD</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.year}>
              <TableCell className="font-medium align-text-top">{invoice.year}</TableCell>
              <TableCell className="">{invoice.award}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default award