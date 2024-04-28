import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">ایران جابز</h3>
            <p className="text-sm text-muted-foreground">
              اتصال نوابغ به فرصت ها
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline">
              درباره ما
            </Link>
            <Link href="/contact" className="hover:underline">
             راه های ارتباطی
            </Link>
            <Link href="/terms" className="hover:underline">
              خدمات
            </Link>
            <Link href="/privacy" className="hover:underline">
              شرایط استفاده
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} تمامی حقوق این وبسایت متعلق یه شرکت ایران جابز است
        </div>
      </div>
    </footer>
  );
}
