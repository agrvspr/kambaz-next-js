"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ course,}: {course: { name: string } | undefined;
}) {
  const pathname = usePathname();
  const section = pathname.split("/").pop();
  const sectionLabel =
    section ? section.charAt(0).toUpperCase() + section.slice(1) : "";

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <span className="text-danger">
            &gt; {course?.name ?? "Course"}
          </span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {sectionLabel}
        </li>
      </ol>
    </nav>
  );
}