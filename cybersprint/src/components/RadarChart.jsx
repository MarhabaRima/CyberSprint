// Show Skill Balance
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const data = [
  { subject: 'Linux', A: 80 },
  { subject: 'Nmap', A: 60 },
  { subject: 'Vulnerability', A: 40 },
  { subject: 'Network', A: 30 },
  { subject: 'Web Security', A: 50 },
];

export default function RadarChartComponent() {
  return (
    <div className="bg-[#1C1C2E] p-4 rounded-xl">
      <h2 className="text-sm font-semibold mb-2">Weekly Focus</h2>
      <RadarChart outerRadius={90} width={300} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" stroke="#fff" />
        <Radar name="Score" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}