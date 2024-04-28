import Image from "next/image";
import React from "react";
import CompanyLogo from "../assets/company-logo-placeholder.png";
import { Banknote, BriefcaseIcon, Clock, Globe2, MapPin } from "lucide-react";
import { formatMoney, relativeDate } from "../utils";
import Badge from "./Badge";


const JobListItem = ({ job }: any) => {
  return (
    <article className="  flex  gap-3 rounded-lg border p-5 hover:bg-muted/60">
      <Image
        src={CompanyLogo}
        alt={`${job.position}logo`}
        width={100}
        height={100}
        className="self-center rounded-lg"
      />
      <div className="flex-grow gap-3">
        <div className="">
          <h1 className="text-xl font-medium"> {job.title}</h1>
          <p className="text-muted-foreground">{job.company}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5 sm:hidden">
            <BriefcaseIcon size={16} className="shrink-0" /> {job.type}
          </p>
          <p className="flex items-center gap-1.5 ">
            <MapPin size={16} className="shrink-0" /> {job.locationType}
          </p>
          <p className="flex items-center gap-1.5 ">
            <Globe2 size={16} className="shrink-0" />{" "}
            {job.location || "worldwide"}
          </p>
          <p className="flex items-center gap-1.5 ">
            <Banknote size={16} className="shrink-0" /> {job.type}
          </p>
          <p className="flex items-center gap-1.5 ">
            <BriefcaseIcon size={16} className="shrink-0" />
            {`${formatMoney(job.salaryRange.from)}  تا ${formatMoney(job.salaryRange.to)}میلیون تومان`}
          </p>
          <p className="flex items-center gap-1.5 sm:hidden">
            <Clock size={16} className="shrink-0" />
            {relativeDate(job.posted)}
          </p>
        </div>
      </div>
      <div className="hidden flex-col items-end justify-between sm:flex">
        <Badge>{job.type}</Badge>
       
          <span className="flex items-center gap-1.5 ">
            <Clock size={16} className="shrink-0" />
            {relativeDate(job.posted)}
          </span>
       
      </div>
    </article>
  );
};

export default JobListItem;
