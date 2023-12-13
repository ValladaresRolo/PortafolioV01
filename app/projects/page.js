import CardProject from "@/components/CardProject";

const projects = () => {
  return (
    <div className="grid grid-cols-3 h-screen items-center">
      <CardProject />
      <CardProject />
      <CardProject />
    </div>
  );
};

export default projects;
