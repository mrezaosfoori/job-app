"use client";
import H1 from "@/src/components/ui/h1";
import React from "react";
import { useForm } from "react-hook-form";
import { createJobSchema, createJobValues } from "@/src/data/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import Select from "@/src/components/ui/select";
import { jobTypes, locationTypes } from "@/src/data/job-types";
import { Divide, FileUp, X } from "lucide-react";
import LocationInput from "@/src/components/LocationInput";
import { Label } from "@/src/components/ui/Lable";
import RichTextEditor from "@/src/components/RichTextEditor";
import { draftToMarkdown } from "markdown-draft-js";
import LoadingButton from "@/src/components/LoadingButton";
import { formatSalary } from "@/src/utils";

const NewJobForm = () => {
  const form = useForm<createJobValues>({
    resolver: zodResolver(createJobSchema),
  });

  const {
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: createJobValues) {
    alert(JSON.stringify(values));
  }
  return (
    <main className="m-auto my-10 max-w-3xl space-y-10">
      <div className="space-y-5 text-center">
        <H1>کارمند مورد نظرتو پیدا کن</H1>
        <p className="text-muted-foreground">آگهی شغلیتو بذار تا همه بدونن</p>
      </div>
      <div className="space-y-6 rounded-lg border p-4">
        <div>
          <h2 className="font-semibold">مشخصات آگهی</h2>
          <p className="text-muted-foreground">
            مشخصات شغل و جزِئیات آن را آماده کن`
          </p>
        </div>
        <Form {...form}>
          <form
            className="space-y-4"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              control={control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>عنوان شغل</FormLabel>
                  <FormControl>
                    <Input placeholder="مدیر محصول .." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نوع شغل</FormLabel>
                  <FormControl>
                    <Select defaultValue="" {...field}>
                      <option value="" hidden>
                        {" "}
                        نوع شغل را انتخاب کن
                      </option>
                      {jobTypes.map((item, key) => {
                        return (
                          <option key={key} value={item.english}>
                            {item.persian}
                          </option>
                        );
                      })}
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> اسم شرکت</FormLabel>
                  <FormControl>
                    <Input placeholder="شرکت  ..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="companyLogo"
              render={({ field: { value, ...fieldValues } }) => (
                <FormItem>
                  <FormLabel> لوگوی شرکت</FormLabel>
                  <FormLabel htmlFor="logo">
                    <div className="my-2 flex h-10 w-full  items-center justify-between gap-2 rounded-md border border-input  px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <div className="flex items-center gap-2 rounded-lg bg-gray-100 p-1">
                        <FileUp />
                        <p>افزودن فایل</p>
                      </div>
                      <span className="border-b">{value?.name}</span>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="logo"
                      className="hidden"
                      {...fieldValues}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        fieldValues.onChange(file);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="locationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> محل کار</FormLabel>
                  <FormControl>
                    <Select defaultValue="" {...field}>
                      <option value="" hidden>
                        {" "}
                        نوع محل کار را انتخاب کن
                      </option>
                      {locationTypes.map((item, key) => {
                        return (
                          <option key={key} value={item.english}>
                            {item.persian}
                          </option>
                        );
                      })}
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>شهر</FormLabel>
                  <FormControl>
                    <LocationInput
                      onLocationSelected={field.onChange}
                      ref={field.ref}
                    />
                  </FormControl>
                  {watch("location") && (
                    <div className="items-cnter flex  gap-1">
                      <button
                        type="button"
                        onClick={() =>
                          setValue("location", "", { shouldValidate: true })
                        }
                      >
                        <X size={20} />
                      </button>
                      <span className="text-sm"> {watch("location")}</span>
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <Label htmlFor="applicationEmail">آدرس اینترنتی شرکت</Label>
              <div className="flex justify-between">
                <FormField
                  control={control}
                  name="applicationEmail"
                  render={({ field }) => (
                    <FormItem className="grow">
                      <FormControl>
                        <div className="flex items-center">
                          <Input
                            id="applicationEmail"
                            placeholder="ایمیل"
                            type="email"
                            {...field}
                          />
                          <span className="mx-2">یا</span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="applicationUrl"
                  render={({ field }) => (
                    <FormItem className="grow">
                      <FormControl>
                        <Input
                          placeholder="وبسایت"
                          type="url"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            trigger("applicationEmail");
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <Label onClick={() => setFocus("description")}>توضیحات</Label>
                  <FormControl>
                    <RichTextEditor
                      onChange={(draft: any) =>
                        field.onChange(draftToMarkdown(draft))
                      }
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>میزان حقوق </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  {watch("salary") && (
                    <div className="items-cnter flex  gap-1">
                      <span className="text-sm">
                        {formatSalary(watch("salary"))}
                      </span>
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <LoadingButton type="submit" loading={isSubmitting}>
              ثبت آگهی
            </LoadingButton>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default NewJobForm;
