import Hero from './_components/Hero'
import Programs from './_components/Programs'
import Students from './_components/Students'
import WhyStarts from './_components/WhyStarts'
import WhereStart from './_components/WhereStart'
import Benefit from './_components/Benefit'
import Salary from './_components/Salary'
import LearningPhase from './_components/LearningPhase'
import CourseTimeline from './_components/CourseTimeline'
import ClassSchedule from './_components/ClassSchedule'
import CareerSupport from './_components/CareerSupport'
import Steps from './_components/Steps'

function LeadsPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Programs />
      <Students />
      <WhyStarts />
      <WhereStart />
      <Benefit />
      <Salary />
      <LearningPhase />
      <CareerSupport />
      <Steps />
      <CourseTimeline />
      <ClassSchedule />
    </main>
  )
}

export default LeadsPage
