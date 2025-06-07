import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const DUMMY_COMPANIONS: Companion[] = [
  {
    id: "dummy-1",
    subject: "maths",
    name: "Eg.Algebra Basics",
    topic: "Equations & Expressions",
    duration: 45,
  },
  {
    id: "dummy-2",
    subject: "science",
    name: "Eg.Physics Starter",
    topic: "Newton's Laws",
    duration: 30,
  },
  {
    id: "dummy-3",
    subject: "history",
    name: "Eg.World War II",
    topic: "Major Events",
    duration: 60,
  },
  {
    id: "dummy-4",
    subject: "coding",
    name: "Eg.Python Basics",
    topic: "Variables & Data Types",
    duration: 45,
  },
  {
    id: "dummy-5",
    subject: "economics",
    name: "Eg.Economics Basics",
    topic: "Supply & Demand",
    duration: 30,
  },
];

const CompanionsList = ({
  title,
  companions,
  classNames,
}: CompanionsListProps) => {
  const displayCompanions =
    companions && companions.length > 0 ? companions : DUMMY_COMPANIONS;
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl pb-4">{title}</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayCompanions?.map(
            ({ id, subject, name, topic, duration }: any) => (
              <TableRow key={id}>
                <TableCell>
                  <Link href={`/companions/${id}`}>
                    <div className="flex items-center gap-4">
                      <div
                        className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                        style={{ backgroundColor: getSubjectColor(subject) }}
                      >
                        <Image
                          src={`/icons/${subject}.svg`}
                          alt={subject}
                          width={35}
                          height={35}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-bold text-2xl">{name}</p>
                        <p className="text-lg">{topic}</p>
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <div className="subject-badge w-fit max-md:hidden dark:bg-neutral-700">
                    {subject}
                  </div>
                  <div
                    className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                    style={{ backgroundColor: getSubjectColor(subject) }}
                  >
                    <Image
                      src={`/icons/${subject}.svg`}
                      alt={subject}
                      width={18}
                      height={18}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 w-full justify-end">
                    <p className="text-2xl">
                      {duration} <span className="max-md:hidden">mins</span>
                    </p>
                    <Image
                      src="/icons/clock.svg"
                      alt="minutes"
                      width={14}
                      height={14}
                      className="md:hidden bg-slate-50 rounded-full"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
