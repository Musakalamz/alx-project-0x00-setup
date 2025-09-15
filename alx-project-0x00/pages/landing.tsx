import Button from "@/components/Button";
import Card from "@/components/Card";

const landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="grid grid-cols-4 gap-4">
        {/* Small Buttons */}
        <Button title="Small - sm" size="small" shape="rounded-sm" />
        <Button title="Small - md" size="small" shape="rounded-md" />
        <Button title="Small - md" size="small" shape="rounded-lg" />
        <Button title="Small - full" size="small" shape="rounded-full" />

        {/* Medium Buttons */}
        <Button title="Medium - sm" size="medium" shape="rounded-sm" />
        <Button title="Medium - md" size="medium" shape="rounded-md" />
        <Button title="Medium - md" size="medium" shape="rounded-lg" />
        <Button title="Medium - full" size="medium" shape="rounded-full" />

        {/* Large Buttons */}
        <Button title="Large - sm" size="large" shape="rounded-sm" />
        <Button title="Large - md" size="large" shape="rounded-md" />
        <Button title="Large - md" size="large" shape="rounded-lg" />
        <Button title="Large - full" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default landing;
