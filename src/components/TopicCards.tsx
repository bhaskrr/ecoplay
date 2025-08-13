import { topics } from "../app/data/gameData";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";

export const TopicCards = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {topics.map((topic) => (
        <Card key={topic.id} className="hover:-translate-y-1 transition-all duration-500">
          <CardHeader>
            <topic.icon />
            <CardTitle className="text-xl">{topic.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{topic.description}</CardDescription>
          </CardContent>
          <CardFooter >
            <Button variant="default" size="sm" className="hover:bg-black/20 hover:text-black">Start Learning</Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};
