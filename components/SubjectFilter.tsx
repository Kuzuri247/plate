"use client";

import { Select } from "@/components/ui/select";
import { removeKeysFromUrlQuery, formUrlQuery } from "@jsmastery/utils";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { subjects } from "@/constants/index";

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("subject") || "all";

  const [subject, setSubject] = useState(query);

  //optional for for indirect url update
  useEffect(() => {
    setSubject(query);
  }, [query]);

  useEffect(() => {
    let newUrl = "";
    if (subject === "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject,
      });
    }
    router.push(newUrl, { scroll: false });
  }, [subject, searchParams, router]);

  return (
    <Select onValueChange={setSubject} value={subject}>
      <SelectTrigger className="input capitalize text-black">
        <SelectValue placeholder="Subject"/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all" >All Subjects</SelectItem>
        {subjects.map((subject: string) => (
          <SelectItem key={subject} value={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
