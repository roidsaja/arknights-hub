import { Badge, Button, Card, Group, Text } from "@mantine/core";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CardItemProps } from "../Interfaces";

export function OpsCard({ data }: CardItemProps) {
  const router = useRouter();
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="w-full hover:transition"
    >
      <Group justify="space-between" mt="md" mb="xs" className="z-10">
        <Text fw={700} c="white">
          {data.name}
        </Text>
        <Badge color="orange" variant="light">
          <div className="flex items-center gap-1">
            <Sparkles size={18} />
            <p className="text-base font-bold">{data.rarity}</p>
          </div>
        </Badge>
      </Group>

      <Text size="sm" className="z-10" c="teal.4">
        {data.class}
      </Text>
      <Card.Section className="h-40 w-full">
        <Image
          src={data.art}
          alt={data.name}
          className="translate-y-[130px] scale-[1.7] object-contain transition hover:scale-[2]"
          fill
        />
      </Card.Section>

      <Button
        variant="filled"
        color="teal"
        fullWidth
        mt="md"
        radius="md"
        className="z-10"
        onClick={() => router.push(`?op=${data.name}`)}
      >
        Details
      </Button>
    </Card>
  );
}
