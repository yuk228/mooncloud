import { notFound } from "next/navigation";
import { Legal } from "@/components/app/legal/legal";
import { Metadata } from "next";

type Props = {
  params: {
    type: "terms" | "privacy";
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;

  const titles = {
    terms: "利用規約",
    privacy: "プライバシーポリシー",
  };

  return {
    title: `${titles[type]} | MCloud`,
    description: `MCloudの${titles[type]}をご確認ください。`,
  };
}

export default async function LegalPage({ params }: Props) {
  const { type } = await params;
  if (!["terms", "privacy"].includes(type)) {
    notFound();
  }

  return <Legal type={type} />;
}
