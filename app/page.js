import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold">Hello world!</h2>
        <Button>Click me!</Button>
      </main>
    </div>
  );
}
