'use client'
import React from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { pieData } from '@/lib/data'

export default function PieChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie dataKey="value" data={pieData} fill="#8884d8" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
