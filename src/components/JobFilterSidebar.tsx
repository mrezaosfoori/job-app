import React from "react";
import { Label } from "./ui/Lable";
import { Input } from "./ui/input";
import Select from "./ui/select";
import jobjson from "../data/jobs.json";
import { jobTypes } from "../data/job-types";
import { jobFilterSchema } from "../data/validation";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import FormSubmitButton from "./FormSubmitButton";

async function FilterJob(formData: FormData) {
   "use server"
  
   const values=Object.fromEntries(formData.entries());
   const { q, location, type, remote } = jobFilterSchema.parse(values);
   const searchParams=new URLSearchParams({
    ...(q && {q:q.trim()}),
    ...(location && {location}),
    ...(type && {type}),
    ...(remote && {remote:"true"}),
   })
  redirect(`./?${searchParams.toString()}`)
}

const JobFilterSidebar = () => {
  const locations = jobjson.jobs.map((item) => {
    return item.location;
  });
  const locs = locations.filter(
    (value, index) => locations.indexOf(value) === index,
  );

  return (
    <aside className="sticky top-2 h-fit border bg-background p-4 md:w-[260px]">
      <form action={FilterJob}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">جستجو</Label>
            <Input id="q" name="q" placeholder="عنوان شغل،شرکت و ..." />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">شهر</Label>
            <Select id="location" name="location">
              <option value="">همه شهر ها</option>
              {locs.map((item, key) => {
                return (
                  <option key={key} value={item}>
                    {item}
                  </option>
                );
              })}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="type">نوع قرارداد</Label>
            <Select id="type" name="type">
              <option value="">همه </option>
              {jobTypes.map((item, key) => {
                return (
                  <option key={key} value={item.englsih}>
                    {item.persian}
                  </option>
                );
              })}
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="remote"
              name="remote"
              type="checkbox"
              className="scale-125 accent-black"
            />
            <Label htmlFor="remote">دورکاری</Label>
          </div>
          <FormSubmitButton className="w-full">اعمال فیلتر</FormSubmitButton>
        </div>
      </form>
    </aside>
  );
};

export default JobFilterSidebar;
