import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Medal } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.8 },
  { day: "Wed", hours: 5.2 },
  { day: "Thu", hours: 4.1 },
  { day: "Fri", hours: 6.7 },
  { day: "Sat", hours: 8.4 },
  { day: "Sun", hours: 7.3 },
];

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  isPositive?: boolean;
}

function StatCard({ title, value, change, icon, isPositive = true }: StatCardProps) {
  return (
    <Card className="bg-gaming-card border-gaming-muted/20 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xs sm:text-sm font-medium truncate">{title}</CardTitle>
        <div className="p-2 rounded-full bg-gaming-primary/10 text-gaming-primary shrink-0">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-xl sm:text-2xl font-bold">{value}</div>
        <p className={`text-xs ${isPositive ? 'text-gaming-highlight' : 'text-gaming-accent'} truncate`}>
          {change}
        </p>
      </CardContent>
    </Card>
  );
}

interface StatisticsProps {
  className?: string;
}

export function Statistics({ className }: StatisticsProps) {
  return (
    <div className={className}>
      <h2 className="text-xl font-bold text-gaming-foreground mb-4">Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <StatCard
          title="Total Play Time"
          value="15,340h"
          change="+14% from last month"
          icon={<Clock className="h-4 w-4" />}
          isPositive={true}
        />
        <StatCard
          title="Total Games Played"
          value="280"
          change="+32 this week"
          icon={<Medal className="h-4 w-4" />}
          isPositive={true}
        />
      </div>
      
      <Card className="bg-gaming-card border-gaming-muted/20 shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm font-medium">Weekly Gaming Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[180px] md:h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--gaming-primary))" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="hsl(var(--gaming-primary))" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--gaming-muted)/20)" />
                <XAxis 
                  dataKey="day" 
                  tick={{ fill: 'hsl(var(--gaming-foreground)/70)', fontSize: 10 }}
                  axisLine={{ stroke: 'hsl(var(--gaming-muted)/20)' }}
                  tickLine={{ stroke: 'hsl(var(--gaming-muted)/20)' }}
                />
                <YAxis 
                  tick={{ fill: 'hsl(var(--gaming-foreground)/70)', fontSize: 10 }}
                  axisLine={{ stroke: 'hsl(var(--gaming-muted)/20)' }}
                  tickLine={{ stroke: 'hsl(var(--gaming-muted)/20)' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--gaming-card))', 
                    borderColor: 'hsl(var(--gaming-muted)/20)',
                    color: 'hsl(var(--gaming-foreground))'
                  }}
                  itemStyle={{ color: 'hsl(var(--gaming-primary))' }}
                  formatter={(value: number) => [`${value} hours`, 'Play Time']}
                  labelStyle={{ color: 'hsl(var(--gaming-foreground))' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="hsl(var(--gaming-primary))" 
                  fillOpacity={1} 
                  fill="url(#colorHours)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
