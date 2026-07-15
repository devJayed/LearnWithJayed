// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { SectionHeading } from "@/components/ui/section-heading";
// import { learningSteps } from "@/features/landing/data/landing-content";

// export function LearningProcessSection() {
//   return (
//     <section className="section-padding">
//       <div className="container space-y-12">
//         <SectionHeading
//           eyebrow="Learning Process"
//           title="A simple path from admission to exam readiness"
//           description="The same flow can later become application state inside student dashboards and course modules."
//         />
//         <div className="grid gap-5 md:grid-cols-3">
//           {learningSteps.map(({ title, description, icon: Icon }, index) => (
//             <Card key={title}>
//               <CardHeader className="flex-row items-center gap-4 space-y-0">
//                 <div className="grid size-12 place-items-center rounded-md bg-accent text-accent-foreground">
//                   {index + 1}
//                 </div>
//                 <Icon className="size-7 text-primary" />
//               </CardHeader>
//               <CardContent>
//                 <h3 className="text-xl font-bold">{title}</h3>
//                 <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
