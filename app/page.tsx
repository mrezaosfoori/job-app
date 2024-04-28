import { useEffect } from "react";
import jobjson from "../src/data/jobs.json";
import JobListItem from "../src/components/JobListItem";
import JobFilterSidebar from "@/src/components/JobFilterSidebar";
import H1 from "@/src/components/ui/h1";

export default function Home() {
  
  const jobs = jobjson.jobs;

  return (
    <main className="m-auto my-10 max-w-5xl  space-y-10 px-3">
      <div className="space-y-5  text-center ">
        <H1>
          مشاغل
        </H1>
        <p className="text-muted-foreground">شغل رویایی خود را پیدا کن</p>
      </div>
      <section className="flex flex-col gap-2 md:flex-row ">
        <JobFilterSidebar />
        <div className="space-y-4 grow">
          {jobs.map((item, index) => {
            return <JobListItem job={item} key={index} />;
          })}
        </div>
      </section>
    </main>
  );
}
