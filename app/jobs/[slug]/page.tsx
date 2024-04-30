import { cache } from "react"
import jobjson from "../../../src/data/jobs.json";
import { Button } from "@/src/components/ui/button";
import JobPage from "@/src/components/JobPage";

interface PageProps{
    params:{slug:number}
}




const page = async ({params:{slug}}:PageProps) => {
    const job = jobjson.jobs[slug];

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
      <aside>
        <Button asChild>
          <a href={job.apply} className="w-40 md:w-fit">
           ارسال رزومه
          </a>
        </Button>
      </aside>
    </main>
  );
}

export default page
