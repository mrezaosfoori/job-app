import z from "zod";
import { jobTypes,locationTypes } from "./job-types";
import { formatEnglish } from "../utils";


const requiredString = z
  .string({
    required_error: "این فیلد الزامی است",
  })
  .min(1, "این فیلد الزامی است");
const persianRequiredString = requiredString.regex(/^[\u0600-\u06FF\s]+$/, "عنوان  شغل می بایست فارسی باشد.");
;
const numericRequiredString = requiredString.regex(/^\d+$/, "Must be a number");


const companyLogoSchema = z
  .custom<File | undefined>()
  .refine(
    (file) => !file || (file instanceof File && file.type.startsWith("image/")),
    "فایل باید فرمت عکس داشته باشد.",
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "حجم فایل باید کمتر از 2 مگابایت باشد.");


  const applicationSchema = z
    .object({
      applicationEmail: z
        .string()
        .max(100)
        .email()
        .optional()
        .or(z.literal("")),
      applicationUrl: z.string().max(100).url().optional().or(z.literal("")),
    })
    .refine((data) => data.applicationEmail || data.applicationUrl, {
      message: "ایمیل یا ادرس اینترنی شرکت الزامی است.",
      path: ["applicationEmail"],
    });


export const createJobSchema = z
  .object({
    title: persianRequiredString.max(100),

    type: z
      .string()
      .optional()
      .refine(
        (value) => formatEnglish(jobTypes).includes(value),
        "انتخاب نوع شغل الزامی است",
      )
      .or(z.literal("")),
    companyName: persianRequiredString.max(100),
    companyLogo: companyLogoSchema,
    locationType: z
      .string()
      .optional()
      .refine(
        (value) => formatEnglish(locationTypes).includes(value),
        "انتخاب نوع محل کار الزامی است",
      )
      .or(z.literal("")),

    location: persianRequiredString.max(100),
    description: z.string().max(5000).optional(),
    salary: numericRequiredString.max(
      9,
      "Number can't be longer than 9 digits",
    ),
  })
  .and(applicationSchema);

export type createJobValues = z.infer<typeof createJobSchema>;

export const jobFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional(),
});

export type JobFilterValues = z.infer<typeof jobFilterSchema>;
