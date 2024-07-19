import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your New App</h1>
      <h2 className="text-2xl mb-4">This is your starting point. Customize it as you wish.</h2>
      <p className="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur
        interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.
      </p>
      <Button>Get Started</Button>
    </div>
  );
};

export default Index;